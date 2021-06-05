import React from "react";

import { useEffect, useState } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { Carousel } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";

import about from "../styles/About.module.css";
import first from "../styles/First.module.css";
import services from "../styles/Products.module.css";

import VantaFirst from "./landing";
import VantaFoot from "./foot";

export default function curriculo() {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

  return (
    <>
      <svg className={first.progressIcon} viewBox="0 0 60 60">
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke="#ff4496"
          strokeDasharray="0 1"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{
            pathLength,
            rotate: 90,
            translateX: 5,
            translateY: 5,
            scaleX: -1, // Reverse direction of line animation
          }}
        />
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke="#a2d2ff"
          d="M14,26 L 22,33 L 35,16"
          initial={false}
          strokeDasharray="0 1"
          animate={{ pathLength: isComplete ? 1 : 0 }}
        />
      </svg>

      <VantaFirst/>

      <div className={about.section} id="about">
        <div className={about.glass}>
          <h1 className={services.callText}>Skills</h1>
          <motion.div
            className={about.wrap}
            animate={{ scale: [1, 0.9, 0.9, 0.9, 0.9, 0.9, 1] }}
            transition={{
              type: "spring",
              bounce: 0.1,
              repeat: 2,
              repeatDelay: 2,
            }}
          >
            <div className={about.left}>
              <div>
                <div className={about.NeuFront}>
                  <div className={about.sellCallFront}>
                    <div>
                      <p className={about.sellDashFront}>Frontend</p>
                    </div>
                  </div>
                  <div className={about.personList}>
                    <ul className={about.personList}>
                      <li className={about.personListItemFront}>React</li>
                      <li className={about.personListItemFront}>NextJs</li>
                      <li className={about.personListItemFront}>NodeJs</li>
                      <li className={about.personListItemFront}>
                        Styled Components
                      </li>
                      <li className={about.personListItemFront}>
                        Framer-Motion
                      </li>
                      <li className={about.personListItemFront}>Bootstrap</li>
                      <li className={about.personListItemFront}>Redux</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className={about.right}>
              <div className={about.NeuRed}>
                <div className={about.sellCallRed}>
                  <p className={about.sellDashRed}>Red Team</p>
                </div>
                <div className={about.personList}>
                  <ul className={about.personList}>
                    <li className={about.personListItemRed}>OWASP Top10</li>
                    <li className={about.personListItemRed}>NIST</li>
                    <li className={about.personListItemRed}>Web App Pentest</li>
                    <li className={about.personListItemRed}>
                      Engenharia Social
                    </li>
                    <li className={about.personListItemRed}>Ethical Hacking</li>
                    <li className={about.personListItemRed}>
                      Kali Linux Tools
                    </li>
                    <li className={about.personListItemRed}>
                      Metasploit Framework
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className={about.Neu} whileHover={{ scale: 1.1 }}>
            <div className={about.sellCall2}>
              <p className={about.sellDash2}>IFNJ</p>
            </div>
            <div className={about.personList}>
              <ul className={about.personList}>
                <li className={about.personListItem}>Integridade</li>
                <li className={about.personListItem}>Consistência</li>
                <li className={about.personListItem}>Relacionamento</li>
                <li className={about.personListItem}>Criatividade</li>
                <li className={about.personListItem}>Visão</li>
                <li className={about.personListItem}>Empatia</li>
                <li className={about.personListItem}>Sensibilidade</li>
              </ul>
            </div>
          </motion.div>

          <h1 className={services.callText}>Portfólio</h1>
          <Carousel indicators={false} fade={true} interval={2200}>
            <Carousel.Item className={about.styledCar}>
              <Image
                className={about.gray}
                src="/portTadala.png"
                alt="tadala"
                layout="fill"
              />
              <Carousel.Caption>
                <a
                  href="https://compretadalafellas.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={about.carTxt}
                >
                  Tadalafellas®
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item indicators={false} className={about.styledCar}>
              <Image
                className={about.invert}
                src="/portScript.png"
                alt="precificação"
                layout="fill"
              />
              <Carousel.Caption>
                <a
                  href="https://www.l2mmedia.com/orcamento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={about.carTxt}
                >
                  Plugin Wix
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item indicators={false} className={about.styledCar}>
              <Image src="/portNaubly.png" alt="Naubly" layout="fill" />
              <Carousel.Caption>
                <a
                  href="https://naubly.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={about.carTxt}
                >
                  Naubly
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item indicators={false} className={about.styledCar}>
              <Image src="/portfDFN.png" alt="dfn" layout="fill" />
              <Carousel.Caption>
                <a
                  href="https://www.directfundingnow.com/apply-now/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={about.carTxt}
                >
                  DFN
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item indicators={false} className={about.styledCar}>
              <Image
                className={about.gray}
                src="/portDuo.png"
                alt="Duopied"
                layout="fill"
              />
              <Carousel.Caption>
                <a
                  href="https://www.duopied.com/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={about.carTxt}
                >
                  DuoPied
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item indicators={false} className={about.styledCar}>
              <Image
                className={about.gray}
                src="/portSPK.png"
                alt="SPK"
                layout="fill"
              />
              <Carousel.Caption>
                <a
                  href="https://www.spkaa.com/software/ptc-integrity/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={about.carTxt}
                >
                  Spk
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item indicators={false} className={about.styledCar}>
              <Image
                className={about.gray}
                src="/portVariety.png"
                alt="variety"
                layout="fill"
              />
              <Carousel.Caption>
                <a
                  href="https://www.variety.bc.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={about.carTxt}
                >
                  Variety Club Ca.
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://codesandbox.io/u/hocabral37"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={about.cto2}>CodeSandbox</button>
          </motion.a>
        </div>
      </div>
      <div className={services.section} id="services">
        <div className={services.glass}>
          <h1 className={services.callText}>Serviços</h1>
          <Container fluid className={services.controller}>
            <Row md={2} xs={1} className={services.mfRow}>
              <Col md={3} xs={1} className={services.offers}>
                <div>
                  <Image
                    src="/frontend.svg"
                    alt="Picture of the author"
                    width={60}
                    height={60}
                    layout="fixed"
                  />
                </div>
                <div>
                  <h3 className={services.pTitle}>Desenvolvimento Web</h3>
                </div>
              </Col>
              <Col md={3} xs={1} className={services.offers}>
                <div>
                  <Image
                    src="/admin.svg"
                    alt="Picture of the author"
                    width={60}
                    height={60}
                    layout="fixed"
                  />
                </div>
                <div>
                  <h3 className={services.pTitle2}>Bots p/ Redes Sociais</h3>
                </div>
              </Col>
              <Col md={3} xs={1} className={services.offers}>
                <div>
                  <Image
                    src="/userexperience.svg"
                    alt="Picture of the author"
                    width={60}
                    height={60}
                    layout="fixed"
                  />
                </div>
                <div>
                  <h3 className={services.pTitle}>User Experience - UX</h3>
                </div>
              </Col>
            </Row>
            <Row md={2} xs={1} className={services.mfRow}>
              <Col md={3} xs={1} className={services.offers}>
                <div>
                  <Image
                    src="/search.svg"
                    alt="Picture of the author"
                    width={60}
                    height={60}
                    layout="fixed"
                  />
                </div>
                <div>
                  <h3 className={services.pTitle2}>E-Commerce</h3>
                </div>
              </Col>
              <Col md={3} xs={1} className={services.offers}>
                <div>
                  <Image
                    src="/videoconference.svg"
                    alt="Picture of the author"
                    width={60}
                    height={60}
                    layout="fixed"
                  />
                </div>
                <div>
                  <h3 className={services.pTitle}>LGDP</h3>
                </div>
              </Col>
              <Col md={3} xs={1} className={services.offers}>
                <div>
                  <Image
                    src="/file.svg"
                    alt="Picture of the author"
                    width={60}
                    height={60}
                    layout="fixed"
                  />
                </div>
                <div>
                  <h3 className={services.pTitle2}>Pentest</h3>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <VantaFoot/>
    </>
  );
}
