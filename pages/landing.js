import { useState, useRef, useEffect } from "react";
import React from "react";
import RINGS from "vanta/dist/vanta.rings.min.js"
import * as THREE from "three";
import Image from "next/image";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import first from "../styles/First.module.css";


export default function VantaFirst({ width, height, children }) {
  const [vantaEffect, setVantaEffect] = useState(0);

  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(RINGS({
          THREE,
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <div ref={vantaRef} className={first.section} id="first">
        <div className={first.glass}>
          <div className={first.left}>
            <div className={first.center}>
              <h1 className={first.title}>
                Henrique Cabral
              </h1>
              <ul className={first.list}>
                <li>
                  <a
                    className={first.insideText}
                    href="https://henriqueocabral.medium.com/"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className={first.insideText}
                    href="https://github.com/HenriqueOCabral"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    className={first.insideText}
                    href="https://www.linkedin.com/in/henrique-cabral-a6b7ba176/"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
            <a href="#about">
              <motion.button
                className={first.cto}
                animate={{
                  scale: [2, 1, 2, 1, 1],
                  rotate: [360, 360, 180, 270, 90],
                }}
                whileHover={{ scale: 1.2, rotate: [360, 360, 180, 270, 90] }}
                whileTap={{ scale: 0.8 }}
              >
                <Image
                  className={first.arrow}
                  src="/fast-forward.svg"
                  alt="btn"
                  width={50}
                  height={65}
                  layout="intrinsic"
                />
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

