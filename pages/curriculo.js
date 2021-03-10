import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./src/components/Navbar/Nav_module";

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
import foot from "../styles/Footer.module.css";

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
          stroke="#56638aff"
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
          stroke="#56638aff"
          d="M14,26 L 22,33 L 35,16"
          initial={false}
          strokeDasharray="0 1"
          animate={{ pathLength: isComplete ? 1 : 0 }}
        />
      </svg>
      <NavBar />
      <div className={first.section} id="first">
        <div className={first.glass}>
          <div className={first.left}>
            <div className={first.center}>
              <div className={first.photo}>
                <Image
                  className={first.photo}
                  src="/foto.png"
                  alt="Picture of the author"
                  width={150}
                  height={150}
                  layout="intrinsic"
                />
              </div>
              <h1 className={first.title}>Henrique Cabral</h1>
              <h3 className={first.insideText}>
                React.js/Next.js, Node.js e Shell script
              </h3>
              <a href="#about">
                <button className={first.cto}>Conhecer</button>
              </a>
              <a
                href="https://forms.gle/WgPLRfMUPfP49AY78"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={first.cto2}>CONTRATAR</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={first.code}>
        <Image
          src="/coding.svg"
          alt="Picture of the author"
          width={250}
          height={250}
          layout="intrinsic"
        />
      </div>
      <div className={first.hack}>
        <Image
          src="/hacking.svg"
          alt="Picture of the author"
          width={250}
          height={250}
          layout="intrinsic"
        />
      </div>

      <div className={about.section} id="about">
        <div className={about.glass}>
          <h1 className={services.callText}>Sobre</h1>
          <div className={about.left}>
            <div>
              <p className={about.textAbout}>
                <a
                  href="https://www.linkedin.com/in/henrique-cabral-a6b7ba176/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={about.txtMark1}
                >
                  Henrique Oliveira Cabral
                </a>{" "}
                29 anos,fluente em português e compreensão avançada em inglês, juiz-forano, mineiro, sempre em busca de novos desafios
                e conhecimento. Possui histórico de aprovações em vestibulares a
                nível de ensino médio: CTU - 2007; e a nível superior: Economia
                UFJF - 2010; Engenharia Mecatrônica IFET - 2010 (cursado até
                2012); FAEFID UFJF - 2013 (cursado até 2018) e 1º lugar geral
                Sistemas de Informação UFJF - 2020 (formação atual).
              </p>
            </div>
          </div>
          <div className={about.right}>
            <p className={about.textAbout2}>
              Além das hard skills, é válido citar as soft skills de liderança,
              trabalho em equipe e oratória, desenvolvidas nestas ordens
              iniciáticas:{" "}
              <span className={about.txtMark}>Ordem Rosacruz AMORC</span> e{" "}
              <span className={about.txtMark}>Ordem DeMolay</span>, exercendo,
              nessa última, o cargo de liderança como Mestre Conselheiro de seu
              Capítulo.
            </p>
          </div>
          <h1 className={services.callText}>Personalidade</h1>
          <div className={about.Neu}>
            <div className={about.sellCall2}>
              <div className={about.borderRound}>
                <p className={about.sellDash2}>IFNJ</p>
              </div>
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
          </div>

          <h1 className={services.callText}>Projetos e Colaborações</h1>
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
            <Carousel.Item indicators="false" className={about.styledCar}>
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
                  Script Orçamento
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item indicators="false" className={about.styledCar}>
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
                  Direct Funding Now
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item indicators="false" className={about.styledCar}>
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
            <Carousel.Item indicators="false" className={about.styledCar}>
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
                  Spk and associates
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item indicators="false" className={about.styledCar}>
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
          <a
            href="https://codesandbox.io/u/hocabral37"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={about.cto2}>CodeSandbox</button>
          </a>
        </div>
      </div>
      <div className={services.section} id="services">
        <div className={services.glass}>
          <h1 className={services.callText}>Onde posso contribuir</h1>
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
                  <h3 className={services.pTitle}>Frontend</h3>
                  <p className={services.txt}>
                    HTML, CSS, Bootstrap, Vanilla Javascript, React.js, Next.js
                  </p>
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
                  <h3 className={services.pTitle2}>Backend</h3>
                  <p className={services.txt2}>
                    Desenvolvimento de Rotas, API's e integrações.
                  </p>
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
                  <p className={services.txt}>
                    Contraste, posicionamento de conteúdo, intuitividade,
                    visibilidade, gamificação...
                  </p>
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
                  <h3 className={services.pTitle2}>SEO</h3>
                  <p className={services.txt2}>
                    Construção de um SEO vencendor e aumento do fluxo orgânico.
                  </p>
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
                  <h3 className={services.pTitle}>Aulas</h3>
                  <p className={services.txt}>
                    Deseja aprender a codar? Posso te ensinar Javascript e
                    M.E.R.N.
                  </p>
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
                  <h3 className={services.pTitle2}>
                    Segurança e Manutenção de sites
                  </h3>
                  <p className={services.txt2}>
                    LGDP e análise de vulnerabilidades - Pentest.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className={foot.section} id="contact">
        <div className={foot.glass}>
          <div>
            <h1 className={foot.title}>Precisando de ajuda em seu projeto?</h1>
            <h2 className={foot.subtitle}>Conte comigo!</h2>
          </div>

          <p className={foot.call}>
            Apaixonado por programação, mindset de solucionar problemas,
            aprendizado rápido, trabalho responsável, sinto prazer em compor
            equipes e desenvolver em time!
          </p>
          <div className={foot.bottom}>
            <a href="https://forms.gle/WgPLRfMUPfP49AY78">
              <button className={first.cto}>Contrate</button>
            </a>
            <Container>
              <Row className={foot.socialRow} xs={2} lg={1}>
                <Col className={foot.fit} lg={"auto"} xs={1}>
                  <a href="https://www.linkedin.com/in/henrique-cabral-a6b7ba176/">
                    <Image
                      className={foot.img}
                      src="/linkedin.png"
                      alt="linkedin"
                      layout="intrinsic"
                      width={70}
                      height={70}
                    />
                  </a>
                </Col>
                <Col className={foot.fit} lg={"auto"} xs={1}>
                  <a href="https://github.com/Henrique-NiroL">
                    <Image
                      className={foot.img2}
                      src="/github.png"
                      alt="github"
                      layout="intrinsic"
                      width={70}
                      height={70}
                    />
                  </a>
                </Col>
              </Row>
            </Container>
          </div>
          <div className={foot.last}>
            <small className={foot.addres}>
              Henrique O. Cabral -{" "}
              <a className={foot.addres} href="mailto:hocabral37@gmail.com">
                Email
              </a>
            </small>
            <small className={foot.addres2}>
              Rua Candido Tostes - Juiz de Fora - MG - BR
            </small>
          </div>
        </div>
      </div>
    </>
  );
}
