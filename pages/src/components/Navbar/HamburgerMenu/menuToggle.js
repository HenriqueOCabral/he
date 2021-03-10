import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Button = styled.div`
  z-index: 99;
  cursor: pointer;
  position: fixed;
  right: 15px;
  top: 15px;
  background: #56638aff !important;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="3"
    {...props}
  />
);

const transition = { duration: 0.3 };

export default function MenuToggle({ toggle, isOpen }) {
  return (
    <Button onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5", stroke: "#ffffff" },
            open: { d: "M 3 16.5 L 17 2.5", stroke: "#ffffff" },
          }}
          transition={transition}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          stroke="hsl(0, 0%, 100%)"
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={transition}
        />
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346", stroke: "#ffffff" },
            open: { d: "M 3 2.5 L 17 16.346", stroke: "#ffffff" },
          }}
          transition={transition}
        />
      </svg>
    </Button>
  );
}
