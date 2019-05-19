import axios from 'axios'

import CONFIGS from '@constants/configs'

export const callApi = (call) => {
    let {
        title = '',
        endpoint,
        method = 'GET',
        params = null,
        data = null,
        headers = {},
        showJSON = false
    } = call

    let url = CONFIGS.URL_API + endpoint

    // Merge headers info
    let defaultHeaders = {
      "Content-Type": "application/json",
      "Accept": "application/json"
    };

    headers = Object.assign({}, defaultHeaders, headers);

    console.debug(`[${title} CALL API URL]`, url);
    console.debug(`[${title} CALL API REQUEST]`, { headers, method, url, params, data });

    if (showJSON) {
        console.log('[CALL API JSON DATA]', JSON.stringify(data))
    }

    // Create request reference
    var request = {
        headers,
        method,
        url
    };

    if (params) request.params = params;
    if (data) request.data = data;

    return axios(request)
}

export const callProductionApi = (call) => {
    let {
        title = '',
        endpoint,
        method = 'GET',
        params = null,
        data = null,
        headers = {},
        showJSON = false
    } = call

    let url = CONFIGS.URL_PROD_API + endpoint

    // Merge headers info
    let defaultHeaders = {};

    headers = Object.assign({}, defaultHeaders, headers);

    console.debug(`[${title} CALL PROD API URL]`, url);
    console.debug(`[${title} CALL PROD API REQUEST]`, { headers, method, url, params, data });

    if (showJSON) {
        console.log('[CALL PROD API JSON DATA]', JSON.stringify(data))
    }

    // Create request reference
    var request = {
        headers,
        method,
        url
    };

    if (params) request.params = params;
    if (data) request.data = data;

    return axios(request)
}
