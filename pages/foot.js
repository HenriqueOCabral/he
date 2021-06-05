import { useState, useRef, useEffect } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
import Image from "next/image";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import foot from "../styles/Footer.module.css";
import first from "../styles/First.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function VantaFoot({ width, height, children }) {
  const [vantaFoBg, setvantaFoBg] = useState(0);

  const vantaRefFO = useRef(null);

  useEffect(() => {
    if (!vantaFoBg) {
      setvantaFoBg(
        WAVES({
          THREE,
          el: vantaRefFO.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x70707,
          shininess: 46.0,
          waveHeight: 5.0,
          waveSpeed: 1.5,
          zoom: 0.65,
        })
      );
    }
    return () => {
      if (vantaFoBg) vantaFoBg.destroy();
    };
  }, [vantaFoBg]);

  return (
    <div ref={vantaRefFO}>
      <div className={foot.section} id="contact">
        <div className={foot.glass}>
          <div>
            <h1 className={foot.title}>Entre em contato</h1>
          </div>

          <p className={foot.call}>
            Falta muito pouco para fecharmos nossa parceria, clique no botão
            abaixo, busque preencher o formulário com atenção e aguarde o
            retorno para resolvermos a sua demanda com perfeição.
          </p>
          <div className={foot.bottom}>
            <a href="https://forms.gle/WgPLRfMUPfP49AY78">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={first.cto2}
              >
                <Image
                  className={first.arrow}
                  src="/fast-forward.svg"
                  alt="btnForm"
                  width={35}
                  height={45}
                  layout="intrinsic"
                />

                <Image
                  className={first.arrow}
                  src="/checklist.svg"
                  alt="btnForm"
                  width={35}
                  height={45}
                  layout="intrinsic"
                />
              </motion.button>
            </a>
            <Container>
              <Row className={foot.socialRow} xs={2} lg={1}>
                <Col className={foot.fit} lg={"auto"} xs={1}>
                  <a href="https://www.linkedin.com/in/henrique-cabral-a6b7ba176/">
                    <Image
                      className={foot.img}
                      src="/linkedin.svg"
                      alt="linkedin"
                      layout="intrinsic"
                      width={25}
                      height={25}
                    />
                  </a>
                </Col>
                <Col className={foot.fit} lg={"auto"} xs={1}>
                  <a href="https://github.com/HenriqueOCabral">
                    <Image
                      className={foot.img}
                      src="/github.svg"
                      alt="github"
                      layout="intrinsic"
                      width={25}
                      height={25}
                    />
                  </a>
                </Col>
                <Col className={foot.fit} lg={"auto"} xs={1}>
                  <a href="https://github.com/HenriqueOCabral">
                    <Image
                      className={foot.img}
                      src="/medium.svg"
                      alt="Medium"
                      layout="intrinsic"
                      width={25}
                      height={25}
                    />
                  </a>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}
