import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Images from "./images"

const StyledMenu = styled.div`
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: opacity 1s ease-in-out; /* Adapte a duração da animação conforme desejado */
`;

export const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
   
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []); 

  return (
    <StyledMenu isVisible={isVisible}>
      <nav className="main-menu ">
        <ul>
          
          <li>
            <img className="logo-img " src={Images.imgLogoMenu}/>
          </li>
          <li>
          <a className='link' href="#products">
              <p className="nav-p">products</p>
            </a>
          </li>
          <li>
          <a className='link' href="#serv">
              <p className="nav-p">services</p>
            </a>
          </li>
          <li>
          <a className='link' href="#about-us">
              <p className="nav-p">contact</p>
            </a>
           
          </li>
        </ul>
      </nav>
    </StyledMenu>
  );
};

export default Menu;
