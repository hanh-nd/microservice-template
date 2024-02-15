import { sendUnaryData, status } from '@grpc/grpc-js';
import { injected, token } from 'brandi';
import {
    TEMPLATE_MANAGEMENT_OPERATOR_TOKEN,
    TemplateManagementOperator,
} from '../../modules/template/template-operator';
import { TemplateServiceHandlers } from '../../proto/gen/TemplateService';
import { ErrorWithStatus } from '../../utils/errors';
import { HttpStatusConverter } from '../../utils/http-status';

export class TemplateServiceHandlersFactory {
    constructor(private readonly templateManagementOperator: TemplateManagementOperator) {}

    public getHandlers(): TemplateServiceHandlers {
        return {
            Hello: async (call, callback) => {
                const helloRequest = call.request;
                try {
                    const message = await this.templateManagementOperator.hello(helloRequest);
                    return callback(null, { message });
                } catch (error) {
                    return this.handleError(error, callback);
                }
            },
        };
    }

    private handleError(e: unknown, callback: sendUnaryData<any>) {
        if (e instanceof ErrorWithStatus) {
            const status = HttpStatusConverter.toGRPCStatus(e.status);
            return callback({
                message: e.message,
                code: status,
            });
        } else if (e instanceof Error) {
            return callback({
                message: e.message,
                code: status.INTERNAL,
            });
        } else {
            return callback({
                code: status.INTERNAL,
            });
        }
    }
}

injected(TemplateServiceHandlersFactory, TEMPLATE_MANAGEMENT_OPERATOR_TOKEN);

export const TEMPLATE_SERVICE_HANDLERS_FACTORY_TOKEN = token<TemplateServiceHandlersFactory>(
    'TemplateServiceHandlersFactory',
);
