import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, useMediaQuery } from '@material-ui/core';
import { Spin as Hamburger } from 'hamburger-react';
import { MENU_ITEMS } from './constants';
import { HeaderEl, Nav, Logo } from './styles';
import logo from '../../logo.png';
import theme from '../../config/theme';

const { breakpoints, palette } = theme;

function Header() {
  const [isOpen, setOpen] = useState(false);
  const isMobile = useMediaQuery(`(max-width:${breakpoints.values.md - 1}px)`);

  const clickMenu = () => {
    setOpen(false);
  };

  if (isOpen) document.body.classList.add('menu-open');
  else document.body.classList.remove('menu-open');

  return (
    <HeaderEl>
      <Container>
        <Nav>
          <Link to="/">
            <Logo primary src={logo} alt="Boost" />
          </Link>
          {isMobile ? (
            <div style={{ marginLeft: 'auto' }}>
              <Hamburger
                label="Show menu"
                toggled={isOpen}
                toggle={setOpen}
                color={palette.common.white}
              />
            </div>
          ) : null}
          {isOpen || !isMobile ? (
            <ul>
              {MENU_ITEMS &&
                MENU_ITEMS.map(({ id, url, label }) => (
                  <li key={id}>
                    <NavLink
                      onClick={clickMenu}
                      activeStyle={{ color: 'white' }}
                      to={url}
                      exact
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
            </ul>
          ) : null}
        </Nav>
      </Container>
    </HeaderEl>
  );
}

export default Header;
