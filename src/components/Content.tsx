import { CssBaseline } from '@mui/material';
import { ContentWrapper } from './ContentWrapper';
import React, { useEffect, useState } from 'react';
import useApi from '../api/useApi';

export const Content = () => {
  const { getPageContent } = useApi();

  const [content, setContent] = useState<any>();
  const [content2, setContent2] = useState<any>();

  const { data } = getPageContent('/coffee/hot');

  useEffect(() => {
    if (data) {
      setContent(data[0]);
      setContent2(data[1]);
    }
  }, [data]);

  return (
    <>
      <CssBaseline/>
      <ContentWrapper>
        {content?.title}
        <br />
        {content2?.title}
        <br />
        Yet another coffee: {data && data[2]?.title}
      </ContentWrapper>
    </>
  );
};
