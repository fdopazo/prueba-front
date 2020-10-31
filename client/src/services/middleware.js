import axios from 'axios';
import { Service } from 'axios-middleware';

const service = new Service(axios);

service.register({
    onRequest(config) {
        console.log('onRequest');
        config.headers = {
            ...config.headers,
        };
        return config;
    },
    onSync(promise) {
        console.log('onSync');
        return promise;
    },
    onResponse(response) {
        console.log('onResponse');
        return response;
    },

    onResponseError(error) {
        // handle the response error
        return error
    },

});

export default service;