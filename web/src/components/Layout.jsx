import React, { createContext, useState } from 'react';
import styled from 'styled-components';
import { BreakpointProvider } from '../hooks/useBreakpoint';
import { GlobalStyles, mediaQuery } from '../styles';
import Footer from './Footer';
import Nav from './Nav';
import SEO from './SEO';

const ContentStyles = styled.div`
  max-width: var(--maxWidth);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
  background-color: var(--bg);
`;

const Main = styled.div`
  padding: 0 0.7rem;

  ${mediaQuery('xs')`
  padding: 0 1rem;
`};

  ${mediaQuery('sm')`
  padding: 0 1.5rem;
`};

  ${mediaQuery('md')`
  padding: 0 2.2rem;
`};
`;

// these should maybe be synced up with mediaQueries
const queries = {
  or: '(orientation: portrait)', // we can check orientation also
  navChange: '(max-width: 780px)',
};

export const TitleContext = createContext({
  title: 'Sport',
  setTitle: () => {},
});

const Layout = ({ children, siteTitle, siteDescription }) => {
  const [title, setTitle] = useState(siteTitle);
  return (
    <>
      <GlobalStyles />
      <SEO title={siteTitle} description={siteDescription} />
      <ContentStyles>
        <BreakpointProvider queries={queries}>
          <Nav title={title} />
          <TitleContext.Provider value={{ title, setTitle }}>
            <Main>{children}</Main>
          </TitleContext.Provider>
        </BreakpointProvider>
        <Footer />
      </ContentStyles>
    </>
  );
};

export default Layout;
