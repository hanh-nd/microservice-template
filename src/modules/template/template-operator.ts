import { token } from 'brandi';
import { BadRequestException } from '../../utils/errors';
import { HelloRequest } from './interfaces';

export interface TemplateManagementOperator {
    hello(request: HelloRequest): Promise<string>;
}

export class TemplateManagementOperatorImpl implements TemplateManagementOperator {
    constructor() {}

    public async hello(request: HelloRequest): Promise<string> {
        const { name } = request;
        if (!name) {
            throw new BadRequestException('Name is required');
        }
        return `Hello, ${name}!`;
    }
}

export const TEMPLATE_MANAGEMENT_OPERATOR_TOKEN = token<TemplateManagementOperator>('TemplateManagementOperator');
