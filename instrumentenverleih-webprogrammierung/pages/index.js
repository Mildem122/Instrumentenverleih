import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Instrumental</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Nav />
      <Results results={results} />
      <Footer />
    </div>
  );
}

//Renderd on server before things on the top
export async function getServerSideProps(context) {
  const playingTechnique = context.query.playingTechnique;

  const request = await fetch(
    requests[playingTechnique]?.url || requests.fetchStringInstruments.url
  ).then((res) => res.json());

  return {
    props: {
      results: request,
    },
  };
}
