import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Home/Header";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Abell - Your Shopping Destination</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HomeHeader */}
      <Header />
    </div>
  );
};

export default Home;
