import axios from 'axios';

const useAxios = () => {
  const axiosClient = axios.create({ baseURL: 'https://api.sampleapis.com' });

  return {
    axiosClient
  };
};

export default useAxios;
