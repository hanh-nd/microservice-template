import { Container } from 'brandi';
import { TEMPLATE_JOB_TOKEN, TemplateJobImpl } from './template.job';

export function bindToContainer(container: Container) {
    container.bind(TEMPLATE_JOB_TOKEN).toInstance(TemplateJobImpl).inSingletonScope();
}
