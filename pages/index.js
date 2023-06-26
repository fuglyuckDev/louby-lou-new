import Head from "next/head";
import React from "react";
import Hero from "@/components/Hero/Hero";
import Navigation from "@/components/Navigation/Navigation";
import About from "@/components/About/About";
import DividerTitle from "@/components/typography/DividerTitle/DividerTitle";
import Decoration from "@/components/Decoration/Decoration";
import Card from "@/components/Card/Card";
import Socials from "@/components/Socials/Socials";
import homeData from "./api/json/home.json";
import Companies from "@/components/Companies/Companies";
import Reviews from "@/components/Reviews/Reviews";

export async function getServerSideProps() {
  const pageData = await homeData;
  return {
    props: {
      pageData,
    },
  };
}

export default function Home({ pageData }) {
  let content = pageData.main;
  let head = pageData.head;

  return (
    <>
      <Head>
        <title>{head.title}</title>
        <meta name={head.metadata.name} content={head.metadata.content} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={head.favicon} />
      </Head>
      <main>
        <Navigation />
        <Hero title={content.hero.title} src={content.hero.video.url} button />
        <About title={content.about.title} body={content.about.body} />
        <Decoration position={content.decoration.top.position} />
        <DividerTitle
          spacing={"large"}
          title={content.dividerTitle.top.title}
          text={content.dividerTitle.top.text}
        />
        {content.cards.map((item, idx) => (
          <Card
            title={item.title}
            desc={item.description}
            pos={item.position}
            img={item.image}
            key={idx}
            button
            buttonType={item.buttonAction}
          />
        ))}

        <Decoration position={content.decoration.bottom.position} />

        <Reviews data={content.reviews} />
        <Socials />
        <Companies />
      </main>
    </>
  );
}
