import { token } from 'brandi';
import { ErrorRequestHandler, NextFunction, Request, RequestHandler, Response } from 'express';
import { HttpStatus } from '../../../constants';
import { ErrorWithStatus, NotFoundException } from '../../../utils/errors';
import { ErrorResponse } from '../../../utils/response';

export function generalErrorHandler(): ErrorRequestHandler {
    return (error: ErrorWithStatus, req: Request, res: Response, next: NextFunction) => {
        return res
            .status(error.status ?? HttpStatus.INTERNAL_SERVER_ERROR)
            .json(new ErrorResponse(error.status, error.message));
    };
}

export function apiNotFoundHandler(): RequestHandler {
    return (req: Request, res: Response, next: NextFunction) => {
        throw new NotFoundException('API not found!!');
    };
}

export const GENERAL_ERROR_HANDLER_TOKEN = token<ErrorRequestHandler>('GeneralErrorHandler');
export const API_NOT_FOUND_HANDLER_TOKEN = token<RequestHandler>('APINotFoundHandler');
