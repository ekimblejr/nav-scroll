import React from 'react';
import styled from 'styled-components';
import {FaBars} from 'react-icons/fa';
import {Link} from 'react-scroll'

export const NavWrapper = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #000;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  color: #fff;
`;

export const NavLogo = styled.div`
  color: #fff;
  text-decoration: none;
  display: flex;
  margin-left: 24px;
  justify-self: flex-start;
  align-items: center;
  cursor: pointer;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    right: 0;
    margin-right: 24px;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export interface NavigationBarProps {
  onToggle: () => void;
  pageArrayNames: Array<string>;
  onPageChange: (page: string) => void
}

const NavigationBar: React.FunctionComponent<NavigationBarProps> = ({onToggle, pageArrayNames, onPageChange}) => {
  const handleToggle = () => {
    onToggle && onToggle();
  };
  const pageLinks = pageArrayNames.map((page) => (
    <NavItem key={page}>
      <NavLink to={'#'} onClick={() => onPageChange(page)}>{page}</NavLink>
    </NavItem>
  ));

  return (
    <NavWrapper>
      <NavbarContainer>
        <NavLogo>Website Title</NavLogo>
        <MobileIcon onClick={handleToggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          {pageLinks}
        </NavMenu>
      </NavbarContainer>
    </NavWrapper>
  );
}

export default NavigationBar;
