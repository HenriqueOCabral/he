
import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import  MenuToggle  from "./menuToggle";
import  NavMenu  from "./navMenu";


const MenuContainer = styled(motion.div)`
  min-width: 300px;
  width: 100%;
  max-width: 44%;
  height: 100vh;
  background-color: #56638aff;
  box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
  z-index: 90;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(4em);
  user-select: none;
  padding: 1em 2.5em;
  
`;


const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  position: fixed;
  
`;

const menuVariants = {
  open: {
    transform: "translateX(3%)",
    zindex: 90,
  },
  closed: {
    transform: "translateX(103%)",
    zindex: 1,
  },
};

const menuTransition = {
  type: "spring",
  duration: 1,
  stiffness: 33,
  delay: 0.1,
};


export default function HamburgerMenu(props) {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      <MenuContainer
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={menuTransition}
      >

        <ContentContainer>
          <NavMenu isOpen={isOpen} />
        </ContentContainer>
      </MenuContainer>
    </>
  );
}
