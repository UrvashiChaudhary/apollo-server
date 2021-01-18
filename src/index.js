import Server from './server';
import configurations from './config/configurations';
import schema from './modules';

const server = new Server(configurations);

server.bootstrap().setupApollo(schema);
