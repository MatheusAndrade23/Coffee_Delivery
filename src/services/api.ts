import axios from 'axios';

import config from '../config';

export const db = axios.create({
  baseURL: config.dbUrl,
});
