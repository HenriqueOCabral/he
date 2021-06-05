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
        
      </Head>
      <>
        <Curriculo />
      </>
    </div>
  );
}
