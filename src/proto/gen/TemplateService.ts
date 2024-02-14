// Original file: src/proto/service/template_service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { HelloRequest as _HelloRequest, HelloRequest__Output as _HelloRequest__Output } from './HelloRequest';
import type { HelloResponse as _HelloResponse, HelloResponse__Output as _HelloResponse__Output } from './HelloResponse';

export interface TemplateServiceClient extends grpc.Client {
  Hello(argument: _HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_HelloResponse__Output>): grpc.ClientUnaryCall;
  Hello(argument: _HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_HelloResponse__Output>): grpc.ClientUnaryCall;
  Hello(argument: _HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_HelloResponse__Output>): grpc.ClientUnaryCall;
  Hello(argument: _HelloRequest, callback: grpc.requestCallback<_HelloResponse__Output>): grpc.ClientUnaryCall;
  hello(argument: _HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_HelloResponse__Output>): grpc.ClientUnaryCall;
  hello(argument: _HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_HelloResponse__Output>): grpc.ClientUnaryCall;
  hello(argument: _HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_HelloResponse__Output>): grpc.ClientUnaryCall;
  hello(argument: _HelloRequest, callback: grpc.requestCallback<_HelloResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface TemplateServiceHandlers extends grpc.UntypedServiceImplementation {
  Hello: grpc.handleUnaryCall<_HelloRequest__Output, _HelloResponse>;
  
}

export interface TemplateServiceDefinition extends grpc.ServiceDefinition {
  Hello: MethodDefinition<_HelloRequest, _HelloResponse, _HelloRequest__Output, _HelloResponse__Output>
}
