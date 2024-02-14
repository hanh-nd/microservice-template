/**
 * TODO: DELETE THIS FILE
 *
 * This is just a template file to show how to create a job
 * You should delete this file and create your own job files
 */
import { injected, token } from 'brandi';
import { Logger } from 'winston';
import { LOGGER_TOKEN } from '../utils/logging';

export interface TemplateJob {
    execute(): Promise<void>;
}

export class TemplateJobImpl implements TemplateJob {
    constructor(private readonly logger: Logger) {}

    async execute(): Promise<void> {
        this.logger.info('Executing template job...');
    }
}

injected(TemplateJobImpl, LOGGER_TOKEN);

export const TEMPLATE_JOB_TOKEN = token<TemplateJob>('TemplateJob');
