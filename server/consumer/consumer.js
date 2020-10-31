const express = require('express');
const app = express();
const axios = require('axios');

const getMLApi = async (query, offset, limit) => {
    const resp = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`,
        {
            params: {
                offset,
                limit
            }
        })

    return resp;
}

module.exports = {
    getMLApi
}