import React, { useCallback, useEffect, useRef, useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import HomeIcon from '../assets/svg/house.svg';
import BurgerIcon from '../assets/svg/list.svg';
import { NavFixed, NavbarNav, NavbarNavItem, Banner } from '../styles';
import NavCollapse from './NavCollapse';
import useOnClickOutside from '../hooks/useOnClickOutside';

function NavItem({ open, setOpen, children, icon, linkref }) {
  const listener = useCallback(() => {
    setOpen(state => !state);
  }, [setOpen]);

  const handleKey = useCallback(
    evt => {
      // keyCode = 9 "tab"
      if (evt.keyCode === 9) {
        setOpen(state => !state);
      }
    },
    [setOpen]
  );

  useEffect(() => {
    const bun = linkref.current;
    bun.addEventListener('click', listener);
    document.addEventListener('keydown', handleKey); // listen for 'tab' key

    return () => {
      bun.removeEventListener('click', listener);
      document.removeEventListener('keydown', handleKey);
    };
  }, [handleKey, linkref, listener]);

  return (
    <NavbarNavItem>
      <div
        className="icon-button"
        ref={linkref}
        onClick={() => listener}
        onKeyDown={handleKey}
        role="button"
        tabIndex={0}>
        {icon}
      </div>
      {open && children}
    </NavbarNavItem>
  );
}

function NavLink({ icon }) {
  return (
    <NavbarNavItem>
      <Link className="icon-button" to="/" roll="link">
        {icon}
      </Link>
    </NavbarNavItem>
  );
}

function Nav({ title }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const linkref = useRef(null);
  const handler = useCallback(() => setOpen(false), [setOpen]);
  useOnClickOutside(dropdownRef, linkref, handler);

  const { category } = useStaticQuery(graphql`
    query {
      category: allSanityCategory {
        nodes {
          name
          slug {
            current
          }
          _id
        }
      }
    }
  `);

  return (
    <NavFixed>
      <NavbarNav>
        <Banner>{title}</Banner>
        <NavLink icon={<HomeIcon />} key="Home" />
        <NavItem
          linkref={linkref}
          icon={<BurgerIcon />}
          key="burger"
          open={open}
          setOpen={setOpen}>
          <NavCollapse
            list={category.nodes}
            dropref={dropdownRef}
            setOpen={setOpen}
          />
        </NavItem>
      </NavbarNav>
    </NavFixed>
  );
}

export default Nav;
