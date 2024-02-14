import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { TemplateServiceClient as _TemplateServiceClient, TemplateServiceDefinition as _TemplateServiceDefinition } from './TemplateService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  HelloRequest: MessageTypeDefinition
  HelloResponse: MessageTypeDefinition
  TemplateService: SubtypeConstructor<typeof grpc.Client, _TemplateServiceClient> & { service: _TemplateServiceDefinition }
}

