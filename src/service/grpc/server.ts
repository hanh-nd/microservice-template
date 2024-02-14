import { Server, ServerCredentials, loadPackageDefinition } from '@grpc/grpc-js';
import { loadSync } from '@grpc/proto-loader';
import { injected, token } from 'brandi';
import { Logger } from 'winston';
import { GRPCServerConfig, GRPC_SERVER_CONFIG_TOKEN } from '../../config/grpc-server';
import { ProtoGrpcType } from '../../proto/gen/template_service';
import { LOGGER_TOKEN } from '../../utils/logging';
import { TEMPLATE_SERVICE_HANDLERS_FACTORY_TOKEN, TemplateServiceHandlersFactory } from './handler';

export class TemplateServiceGRPCServer {
    constructor(
        private readonly handlerFactory: TemplateServiceHandlersFactory,
        private readonly gRPCServerConfig: GRPCServerConfig,
        private readonly logger: Logger,
    ) {}

    public loadProtoAndStart(path: string): void {
        const protoGRPC = this.loadProtoGRPC(path);
        const server = new Server();
        server.addService(protoGRPC.TemplateService.service, this.handlerFactory.getHandlers());
        server.bindAsync(`0.0.0.0:${this.gRPCServerConfig.port}`, ServerCredentials.createInsecure(), (error, port) => {
            if (error) {
                this.logger.error('Failed to start gRPC server', error);
                return;
            }

            this.logger.info(`gRPC server started at: ${port}`);
        });
    }

    private loadProtoGRPC(path: string): ProtoGrpcType {
        const definition = loadSync(path, {
            keepCase: false,
            enums: Number,
            defaults: false,
            oneofs: true,
        });

        const packageDefinition = loadPackageDefinition(definition);
        return packageDefinition as unknown as ProtoGrpcType;
    }
}

injected(TemplateServiceGRPCServer, TEMPLATE_SERVICE_HANDLERS_FACTORY_TOKEN, GRPC_SERVER_CONFIG_TOKEN, LOGGER_TOKEN);

export const TEMPLATE_SERVICE_GRPC_SERVER_TOKEN = token<TemplateServiceGRPCServer>('TemplateServiceGRPCServer');
