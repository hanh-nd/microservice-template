import { injected, token } from 'brandi';
import { Router } from 'express';
import {
    TEMPLATE_MANAGEMENT_OPERATOR_TOKEN,
    TemplateManagementOperator,
} from '../../../modules/template/template-operator';
import { SuccessResponse } from '../../../utils/response';

export function getTemplateRouter(templateManagementOperator: TemplateManagementOperator): Router {
    const router = Router();

    router.get('/api/template', async (req, res) => {
        const { name } = req.query;
        const message = await templateManagementOperator.hello({ name: name as string });
        return res.json(new SuccessResponse(message));
    });

    return router;
}

injected(getTemplateRouter, TEMPLATE_MANAGEMENT_OPERATOR_TOKEN);

export const TEMPLATE_ROUTER_TOKEN = token<Router>('TemplateRouter');
