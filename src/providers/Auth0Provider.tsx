import { AppState, Auth0Provider as Provider } from '@auth0/auth0-react';
import React, { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { JwtPayload } from 'jwt-decode';

export type Auth0JwtPayload = {
  permissions: string[]
} & JwtPayload

export const Auth0Provider: React.FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();

  const domain = 'test';
  const clientId = 'test';

  const redirectUri = 'test';

  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId)) {
    return null;
  }

  return (
    <Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Provider>
  );
};
