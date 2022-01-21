import axios from 'axios';
import { baseGQLUrl } from './config';

const axiosGQLInstance = axios.create({
    baseURL: baseGQLUrl,
});

export default axiosGQLInstance;
