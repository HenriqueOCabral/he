import Head from 'next/head'
import styles from '../styles/Home.module.css'


import Curriculo from './curriculo'


export default function Home() {
  return (
    <div className={styles.container} id="fullPageBg">
      <Head>
        <meta name="googlebot" content="all" />
        <title>Henrique Cabral</title>
        <link rel="icon" href="favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        ></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Mate+SC&display=swap"
          rel="stylesheet"
        ></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"></script>
        <script type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `     VANTA.NET({
        el: "#first",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
      });

      VANTA.WAVES({
        el: "#contact",
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
      });`,
          }}
        />
      </Head>
      <>
        <Curriculo />
      </>
    </div>
  );
}
