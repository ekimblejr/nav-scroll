import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll';
import React from "react";

export const MobilebarContainer = styled.aside<MobileContainerProps>`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.5s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const MobilebarIcon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const MobilebarWrapper = styled.div`
  color: #fff;
`;

export const MobilebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
`;

export const MobilebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-out;
  color: #fff;
  cursor: pointer;

  &.hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export interface MobilebarProps {
  isOpen: boolean;
  onToggle?: () => void;
  pageArrayNames: Array<string>;
  onPageChange: (page: string) => void;
}

export interface MobileContainerProps {
  isOpen: boolean;
  onToggle?: () => void;
}

const Mobilebar: React.FunctionComponent<MobilebarProps> = ({isOpen, onToggle, pageArrayNames, onPageChange}) => {
  const handleToggle = () => {
    onToggle && onToggle();
  };
  const mobilePageLinks = pageArrayNames.map((page) => (
    <MobilebarLink to={'#'} onClick={() => {handleToggle(); onPageChange(page)}}>{page}</MobilebarLink>
  ));

  return (
    <MobilebarContainer isOpen={isOpen} onClick={handleToggle}>
      <MobilebarIcon>
        <CloseIcon />
      </MobilebarIcon>
      <MobilebarWrapper>
        <MobilebarMenu>
          {mobilePageLinks}
        </MobilebarMenu>
      </MobilebarWrapper>
    </MobilebarContainer>
  );
};

export default Mobilebar;
