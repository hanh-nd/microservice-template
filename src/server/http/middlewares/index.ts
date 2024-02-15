import { Container, token } from 'brandi';
import { ErrorRequestHandler } from 'express';
import {
    API_NOT_FOUND_HANDLER_TOKEN,
    GENERAL_ERROR_HANDLER_TOKEN,
    apiNotFoundHandler,
    generalErrorHandler,
} from './error-handler';

export const ERROR_HANDLERS_TOKEN = token<ErrorRequestHandler[]>('ErrorHandlers');

export function bindToContainer(container: Container): void {
    container.bind(GENERAL_ERROR_HANDLER_TOKEN).toInstance(generalErrorHandler).inSingletonScope();
    container.bind(API_NOT_FOUND_HANDLER_TOKEN).toInstance(apiNotFoundHandler).inSingletonScope();
    container
        .bind(ERROR_HANDLERS_TOKEN)
        .toInstance(() => [container.get(GENERAL_ERROR_HANDLER_TOKEN)])
        .inSingletonScope();
}
