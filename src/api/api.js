import * as axios from 'axios';

export const getCrm = (sort, sort_direction) => {
    sort_direction = sort_direction ? 'desc' : 'asc';
    let sortData = sort ? `&sort=${sort}&sort_direction=${sort_direction}` : '';

    return axios.get(`https://api.cmsmagazine.ru/v1/instrumentsList?instrument_type_code=cms&page=1${sortData}`);
};