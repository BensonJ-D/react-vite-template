import { CssBaseline } from '@mui/material';
import { ContentWrapper } from './ContentWrapper';
import React, { useEffect, useState } from 'react';
import useApi from '../api/useApi';

export const Content = () => {
  const { getPageContent } = useApi();

  const [content, setContent] = useState<any>();

  const { data } = getPageContent('/coffee/hot');

  useEffect(() => {
    if (data) {
      setContent(data[0]);
    }
  }, [data]);

  return (
    <>
      <CssBaseline/>
      <ContentWrapper>
        {content?.title}
      </ContentWrapper>
    </>
  );
};
