import { token } from 'brandi';

export interface TemplateManagementOperator {
    hello(name: string): Promise<string>;
}

export class TemplateManagementOperatorImpl implements TemplateManagementOperator {
    constructor() {}

    public async hello(name: string): Promise<string> {
        return `Hello, ${name}!`;
    }
}

export const TEMPLATE_MANAGEMENT_OPERATOR_TOKEN = token<TemplateManagementOperator>('TemplateManagementOperator');
