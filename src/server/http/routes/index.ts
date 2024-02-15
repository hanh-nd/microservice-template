import { Container, token } from 'brandi';
import { Router } from 'express';
import { TEMPLATE_ROUTER_TOKEN, getTemplateRouter } from './template';

export const ROUTES_TOKEN = token<Router[]>('Routes');

export function bindToContainer(container: Container): void {
    container.bind(TEMPLATE_ROUTER_TOKEN).toInstance(getTemplateRouter).inSingletonScope();
    container
        .bind(ROUTES_TOKEN)
        .toInstance(() => [container.get(TEMPLATE_ROUTER_TOKEN)])
        .inSingletonScope();
}
