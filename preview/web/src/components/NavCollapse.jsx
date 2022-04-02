import React, { useCallback } from 'react';
import styled from 'styled-components';
// import { motion } from 'framer-motion';
import { animated, useSpring } from 'react-spring';
import { Link } from 'gatsby';

// Dropdown styles
const DropDown = styled(animated.div)`
  position: absolute;
  top: calc(var(--nav-size) * 1.1);
  left: 0;
  width: 180px;
  background-color: var(--black);
  border: var(--border);
  border-radius: var(--border-radius);
  padding: 15px;
  overflow: hidden;
  z-index: 20;

  #contact {
    border-top: 1px solid var(--grey);
    opacity: 0.8;
    border-radius: 0 0 8px 8px;
  }
`;

const MenuItemStyled = styled.div`
  height: 4.5rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  border-radius: var(--border-radius);
  padding: 0.5rem;
  color: var(--offWhite);

  &:hover,
  &.active {
    background-color: #525357;
  }
`;

const NavCollape = ({ list, dropref, setOpen }) => {
  const handleClick = useCallback(
    evt => {
      if (evt.target.nodeName !== 'A') {
        return;
      }
      setOpen(false);
    },
    [setOpen]
  );

  const handleTouchStart = useCallback(
    evt => {
      if (evt.target.nodeName !== 'A') {
        return;
      }
      setOpen(false);
    },
    [setOpen]
  );

  // const handleKey = useCallback(
  //   evt => {
  //     if (evt.target.nodeName !== 'A') {
  //       return;
  //     }
  //     // keyCode = 9 "tab"
  //     if (evt.keyCode === 9) {
  //       setOpen(state => !state);
  //     }
  //   },
  //   [setOpen]
  // );

  const categories = list.map((cat, idx) => (
    <MenuItemStyled key={cat._id} nav-index={idx + 1}>
      <Link
        to={`/category/${cat.slug.current}`}
        activeStyle={{ color: 'yellow' }}>
        {cat.name}
      </Link>
    </MenuItemStyled>
  ));

  const springProps = useSpring({
    transform: 'translateX(20px) scaleY(1)',
    opacity: 0.95,
    from: { transform: 'translateX(-110px) scaleY(0.5)', opacity: 0 },
  });

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      ref={dropref}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      role="button"
      tabIndex={0}>
      <DropDown style={{ ...springProps }} key="subject" aria-expanded="true">
        {categories}
        <MenuItemStyled key="contact" id="contact">
          <Link to="/contact" activeStyle={{ color: 'yellow', opacity: '1' }}>
            Contact
          </Link>
        </MenuItemStyled>
      </DropDown>
    </div>
  );
};

export default NavCollape;
