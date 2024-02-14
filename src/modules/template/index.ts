import { Container } from 'brandi';
import { TEMPLATE_MANAGEMENT_OPERATOR_TOKEN, TemplateManagementOperatorImpl } from './template-operator';

export function bindToContainer(container: Container) {
    container.bind(TEMPLATE_MANAGEMENT_OPERATOR_TOKEN).toInstance(TemplateManagementOperatorImpl).inSingletonScope();
}
