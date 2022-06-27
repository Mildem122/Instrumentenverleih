import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Instrumentenverleih</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
}

//Renderd on server before things on the top
export async function getServerSideProps(context) {
  const playingTechnique = context.query.playingTechnique;

  const request = await fetch(
    requests[playingTechnique]?.url || requests.fetchBellowInstruments.url
  ).then((res) => res.json());

  return {
    props: {
      results: request,
    },
  };
}
