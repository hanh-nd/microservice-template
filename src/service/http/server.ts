import { injected, token } from 'brandi';
import cookieSession from 'cookie-session';
import express, { ErrorRequestHandler, Express, RequestHandler, Router } from 'express';
import 'express-async-errors';
import { Logger } from 'winston';
import { HTTPServerConfig, HTTP_SERVER_CONFIG_TOKEN } from '../../config/http-server';
import { LOGGER_TOKEN } from '../../utils/logging';
import { ERROR_HANDLERS_TOKEN } from './middlewares';
import { API_NOT_FOUND_HANDLER_TOKEN } from './middlewares/error-handler';
import { ROUTES_TOKEN } from './routes';

export class TemplateServiceHTTPServer {
    constructor(
        private readonly routes: Router[],
        private readonly apiNotFoundHandler: RequestHandler,
        private readonly errorHandlers: ErrorRequestHandler[],
        private readonly httpServerConfig: HTTPServerConfig,
        private readonly logger: Logger,
    ) {}

    public start() {
        const server = this.getHTTPServer();
        server.listen(this.httpServerConfig.port, () => {
            this.logger.info(`HTTP server started at: ${this.httpServerConfig.port}`);
        });
    }

    private getHTTPServer(): Express {
        const server = express();
        server.set('trust proxy', true);
        server.use(express.json());
        server.use(express.urlencoded({ extended: true }));
        server.use(
            cookieSession({
                name: 'template-session',
                signed: false,
                secure: true,
            }),
        );
        server.use(this.routes);
        server.all('*', this.apiNotFoundHandler);
        server.use(this.errorHandlers);
        return server;
    }
}

injected(
    TemplateServiceHTTPServer,
    ROUTES_TOKEN,
    API_NOT_FOUND_HANDLER_TOKEN,
    ERROR_HANDLERS_TOKEN,
    HTTP_SERVER_CONFIG_TOKEN,
    LOGGER_TOKEN,
);

export const TEMPLATE_SERVICE_HTTP_SERVER_TOKEN = token<TemplateServiceHTTPServer>('TemplateServiceHTTPServer');
