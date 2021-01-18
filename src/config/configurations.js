import { config } from 'dotenv';

config();
const envVars = process.env;
const configurations = Object.freeze({
  env: envVars.NODE_ENV,
  port: envVars.PORT
});
export default configurations;
