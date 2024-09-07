import { useQuery } from '@tanstack/react-query';
import { Auth0ContextInterface } from '@auth0/auth0-react';
import useAxios from './useAxios';

const useApi = () => {
  const { axiosClient } = useAxios();

  const getFn = (uri: string, headers?: object) => axiosClient
    .get(`${uri}`,
      { headers: { ...headers } })
    .then(result => {
      const { data } = result;
      return data;
    }).catch(error => {
      console.log('Error retrieving content', error.code);
    }).finally(() => console.log('All done getting'));

  const getPageContent = async (uri: string, auth?: Auth0ContextInterface) => {
    if (auth) {
      return auth.getAccessTokenSilently({
        authorizationParams: {
          audience: 'sample//',
          scope: 'default:admin'
        }
      }).then(async (token) => {
        const headers = { Authorization: `Bearer ${token}` };
        return await getFn(uri, headers);
      });
    } else {
      return await getFn(uri);
    }
  };

  return {
    getPageContent: (page: string) => useQuery({
      queryKey: [page],
      queryFn: () => getPageContent(page),
      refetchOnWindowFocus: false
    })
  };
};

export default useApi;
