import axios from 'axios';

export default axios.create({
    baseURL: 'https://6835e141cd78db2058c384b1.mockapi.io',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    timeout: 10000,
    withCredentials: true,
});
