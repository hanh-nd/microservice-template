import { Container } from 'brandi';
import dotenv from 'dotenv';
import * as config from '../config';
import * as cache from '../dataaccess/cache';
import * as db from '../dataaccess/db';
import * as kafka from '../dataaccess/kafka';
import * as jobs from '../jobs';
import * as templateManagement from '../modules/template';
import * as httpService from '../server/http';
import { TEMPLATE_SERVICE_HTTP_SERVER_TOKEN } from '../server/http/server';
import * as utils from '../utils';

export async function startHTTPServer(envPath?: string): Promise<void> {
    dotenv.config({ path: envPath });

    const container = new Container();

    // binding services
    config.bindToContainer(container);
    cache.bindToContainer(container);
    await db.bindToContainer(container);
    await kafka.bindToContainer(container);
    jobs.bindToContainer(container);
    templateManagement.bindToContainer(container);
    httpService.bindToContainer(container);
    utils.bindToContainer(container);

    const server = container.get(TEMPLATE_SERVICE_HTTP_SERVER_TOKEN);
    server.start();
}
