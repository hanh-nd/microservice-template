import { injected, token } from 'brandi';
import { Router } from 'express';
import { BadRequestException } from '../../../utils/errors';
import { SuccessResponse } from '../../../utils/response';
import {
    TEMPLATE_MANAGEMENT_OPERATOR_TOKEN,
    TemplateManagementOperator,
} from '../../../modules/template/template-operator';

export function getTemplateRouter(templateManagementOperator: TemplateManagementOperator): Router {
    const router = Router();

    router.get('/api/template', async (req, res) => {
        const { name } = req.query;
        if (!name) {
            throw new BadRequestException('Name is required');
        }
        const message = templateManagementOperator.hello(name as string);
        return res.json(new SuccessResponse(message));
    });

    return router;
}

injected(getTemplateRouter, TEMPLATE_MANAGEMENT_OPERATOR_TOKEN);

export const TEMPLATE_ROUTER_TOKEN = token<Router>('TemplateRouter');
