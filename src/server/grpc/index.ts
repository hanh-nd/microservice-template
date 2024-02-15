import { Container } from 'brandi';
import { TEMPLATE_SERVICE_HANDLERS_FACTORY_TOKEN, TemplateServiceHandlersFactory } from './handler';
import { TEMPLATE_SERVICE_GRPC_SERVER_TOKEN, TemplateServiceGRPCServer } from './server';

export function bindToContainer(container: Container): void {
    container
        .bind(TEMPLATE_SERVICE_HANDLERS_FACTORY_TOKEN)
        .toInstance(TemplateServiceHandlersFactory)
        .inSingletonScope();
    container.bind(TEMPLATE_SERVICE_GRPC_SERVER_TOKEN).toInstance(TemplateServiceGRPCServer).inSingletonScope();
}
