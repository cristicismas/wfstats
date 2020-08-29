import Head from 'next/head';

import OpenWorldCycles from '../components/OpenWorld/OpenWorldCycles';

const Root = () => {
  return (
    <div id="root">
      <Head>
        <title>Warframe Stats</title>
        <link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Cantarell:wght@400;700&display=swap" rel="stylesheet" /> 
      </Head>

      <h1 id="title">WFSTATS</h1>

      <OpenWorldCycles />
    </div>
  )
}

export default Root;
