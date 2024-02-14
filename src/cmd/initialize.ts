import { Container } from 'brandi';
import dotenv from 'dotenv';
import * as config from '../config';
import * as cache from '../dataaccess/cache';
import * as db from '../dataaccess/db';
import * as kafka from '../dataaccess/kafka';
import * as jobs from '../jobs';
import { TEMPLATE_JOB_TOKEN } from '../jobs/template.job';
import * as templateManagement from '../modules/template';
import * as utils from '../utils';

export async function initialize(envPath?: string): Promise<void> {
    dotenv.config({ path: envPath });

    const container = new Container();

    // binding services
    config.bindToContainer(container);
    cache.bindToContainer(container);
    await db.bindToContainer(container);
    await kafka.bindToContainer(container);
    jobs.bindToContainer(container);
    templateManagement.bindToContainer(container);
    utils.bindToContainer(container);

    // do initializations
    const templateJob = container.get(TEMPLATE_JOB_TOKEN);
    templateJob.execute().then(() => {
        setTimeout(() => {
            process.exit(0);
        }, 1000);
    });
}
