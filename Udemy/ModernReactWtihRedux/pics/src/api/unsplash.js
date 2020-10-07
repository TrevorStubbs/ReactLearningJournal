import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID CTJF7IvvVrMnVumEuCIKoDPhv8Mh_kMs6glc76UirZ8'
  }
});