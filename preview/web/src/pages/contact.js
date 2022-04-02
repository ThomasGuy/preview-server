import React, { useContext, useEffect } from 'react';
import { TitleContext } from '../components/Layout';

import { Page } from '../styles';

const Contact = () => {
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle('Bloody Contact Page');
  }, [setTitle]);

  return (
    <Page>
      <h1>Contact page</h1>
    </Page>
  );
};

export default Contact;
