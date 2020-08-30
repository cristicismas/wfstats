import Head from 'next/head';

import OpenWorld from '../components/OpenWorld/OpenWorld';

const Root = () => {
  return (
    <div id="root">
      <Head>
        <title>Warframe Stats</title>
        <link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Cantarell:wght@400;700&display=swap" rel="stylesheet" /> 
      </Head>

      <h1 id="title">WFSTATS</h1>

      <OpenWorld />
    </div>
  )
}

export default Root;
