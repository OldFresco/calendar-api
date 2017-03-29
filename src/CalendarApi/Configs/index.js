import path from 'path';
import { merge } from 'lodash';

// Default configuations applied to all environments
const defaultConfig = {
    env: process.env.NODE_ENV,
    get envs() {
        return {
            test: process.env.NODE_ENV === 'test',
            development: process.env.NODE_ENV === 'development',
            production: process.env.NODE_ENV === 'production'
        }
    },
    root: path.normalize(__dirname + '/../../..'),
    port: process.env.PORT || 4567,
    ip: process.env.IP || '0.0.0.0',
};

// Environment specific overrides
const environmentConfigs = {
    development: {
        mongo: {
            uri: process.env.MONGO_URI || 'mongodb://localhost/calendarapi'
        }
    },
    test: {
        port: 5678,
        security: {
            saltRounds: 4
        }
    },
    production: {}
};

// Recursively merge configurations
export default merge(defaultConfig, environmentConfigs[process.env.NODE_ENV] || {});