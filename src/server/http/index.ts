import { Container } from 'brandi';
import * as middlewares from './middlewares';
import * as routes from './routes';
import { TEMPLATE_SERVICE_HTTP_SERVER_TOKEN, TemplateServiceHTTPServer } from './server';

export function bindToContainer(container: Container): void {
    routes.bindToContainer(container);
    middlewares.bindToContainer(container);
    container.bind(TEMPLATE_SERVICE_HTTP_SERVER_TOKEN).toInstance(TemplateServiceHTTPServer).inSingletonScope();
}
