import * as axios from 'axios';

export const getCrm = (page, sort, sort_direction) => {
    sort_direction = sort_direction ? 'desc' : 'asc';
    let sortData = sort ? `&sort=${sort}&sort_direction=${sort_direction}` : '';
    if(!page) page = '/?page=1';

    return axios.get(`https://cors-anywhere.herokuapp.com/https://api.cmsmagazine.ru/v1/instrumentsList${page}&instrument_type_code=cms${sortData}` );
};