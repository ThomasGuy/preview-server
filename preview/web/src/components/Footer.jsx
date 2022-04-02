import React from 'react';
import styled from 'styled-components';
import { mediaQuery } from '../styles';

const FootWrapper = styled.footer`
  display: flex;
  align-items: flex-end;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  margin-top: auto;
  color: inherit;

  footer {
    font-size: 1.3rem;
    width: 100%;
    background-color: #422a2a;
    border-top: 2px solid var(--black);
    color: var(--offWhite);
    opacity: 0.5;

    & > a {
      color: inherit;
    }

    p {
      margin: 0.7rem;
    }

    ${mediaQuery('md')`
      font-size: 1.5rem;
    `};
  }
`;

const Footer = () => (
  <FootWrapper>
    <footer>
      <p>
        © {new Date().getFullYear()}
        {` `}
        <a href="mailto:twguy.webdev@gmail.com">TWGuy Web Development</a>
      </p>
    </footer>
  </FootWrapper>
);

export default Footer;
