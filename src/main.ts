import minimist from 'minimist';
import { initialize } from '@src/cmd/initialize';
import { startGRPCServer } from '@src/cmd/start-grpc-server';
import { startHTTPServer } from '@src/cmd/start-http-server';
import { startKafkaConsumer } from '@src/cmd/start-kafka-consumer';

const args = minimist(process.argv);

if (args['initialize']) {
    initialize('.env').catch((error) => {
        console.log(error);
        process.exit(1);
    });
} else if (args['start_grpc_server']) {
    startGRPCServer('.env').catch((error) => {
        console.log(error);
        process.exit(1);
    });
} else if (args['start_http_server']) {
    startHTTPServer('.env').catch((error) => {
        console.log(error);
        process.exit(1);
    });
} else if (args['start_kafka_consumer']) {
    startKafkaConsumer('.env').catch((error) => {
        console.log(error);
        process.exit(1);
    });
} else {
    console.log('no component was selected, exiting...');
}
