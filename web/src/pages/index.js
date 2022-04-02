import React, { useContext, useEffect } from 'react';

import { Page } from '../styles';
import { SimpleModal } from '../components/SimpleModal';
import useSiteMetadata from '../hooks/useSiteMetadata';
import { TitleContext } from '../components/Layout';

const Home = () => {
  const { setTitle } = useContext(TitleContext);
  const { siteTitle } = useSiteMetadata();

  useEffect(() => {
    setTitle(siteTitle);
  }, [setTitle, siteTitle]);

  return (
    <Page>
      <h1>Sporty</h1>
      <SimpleModal>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>
          Nullam tincidunt, nisl eget vestibulum rhoncus, elit nisi faucibus
          quam, sollicitudin posuere massa lacus cursus ligula. Quisque vel
          turpis a quam posuere lobortis.
        </p>
        <p>
          Aenean risus nunc, pretium eu massa tincidunt, dignissim tincidunt
          arcu. Integer et mauris vestibulum, pharetra eros nec, feugiat orci.
        </p>
      </SimpleModal>

      <div>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>
          Nullam tincidunt, nisl eget vestibulum rhoncus, elit nisi faucibus
          quam, sollicitudin posuere massa lacus cursus ligula. Quisque vel
          turpis a quam posuere lobortis.
        </p>
        <p>
          Aenean risus nunc, pretium eu massa tincidunt, dignissim tincidunt
          arcu. Integer et mauris vestibulum, pharetra eros nec, feugiat orci.
        </p>
      </div>

      <div>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>
          Nullam tincidunt, nisl eget vestibulum rhoncus, elit nisi faucibus
          quam, sollicitudin posuere massa lacus cursus ligula. Quisque vel
          turpis a quam posuere lobortis.
        </p>
        <p>
          Aenean risus nunc, pretium eu massa tincidunt, dignissim tincidunt
          arcu. Integer et mauris vestibulum, pharetra eros nec, feugiat orci.
        </p>
      </div>

      <div>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>
          Nullam tincidunt, nisl eget vestibulum rhoncus, elit nisi faucibus
          quam, sollicitudin posuere massa lacus cursus ligula. Quisque vel
          turpis a quam posuere lobortis.
        </p>
        <p>
          Aenean risus nunc, pretium eu massa tincidunt, dignissim tincidunt
          arcu. Integer et mauris vestibulum, pharetra eros nec, feugiat orci.
        </p>
      </div>
    </Page>
  );
};

export default Home;
