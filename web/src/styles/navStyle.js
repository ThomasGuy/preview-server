import styled from 'styled-components';

// Nav styles
export const NavFixed = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  max-width: var(--maxWidth);
  margin: 0 auto;

  height: var(--nav-size);
  background-color: var(--black);
  border-bottom: var(--border);
`;

export const NavbarNav = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  margin: 0 2rem; ;
`;

export const NavbarNavItem = styled.div`
  margin: 0;

  /* Icon Button */
  .icon-button {
    --button-size: calc(var(--nav-size) * 0.6);
    width: var(--button-size);
    height: var(--button-size);
    background-color: var(--black);
    border-radius: 50%;
    padding: 5px;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;
    outline: none;
  }

  .icon-button:hover {
    filter: brightness(1.4);
  }

  svg {
    fill: var(--offWhite);
    width: 25px;
    height: 25px;
  }
`;

export const Banner = styled.h2`
  color: var(--offWhite);
  font-size: 2.7rem;
  margin: 0 auto;
`;
