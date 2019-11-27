import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api.cmsmagazine.ru/v1/instrumentsList'
});

export const API = {
    getCrmSuccess(page, sort, isDirectionDesc) {
        const direction = isDirectionDesc ? 'desc' : 'asc';
        const sortData = sort ? `&sort=${sort}&sort_direction=${direction}` : '';
        if(!page) page = '/?page=1';

        return instance.get(`${page}&instrument_type_code=cms${sortData}`)
            .then(data => data.data);
    }
};
