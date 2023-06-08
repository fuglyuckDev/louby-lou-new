import Head from "next/head";
import Hero from "@/components/Hero/Hero";
import Navigation from "@/components/Navigation/Navigation";
import About from "@/components/About/About";
import DividerTitle from "@/components/typography/DividerTitle/DividerTitle";
import Decoration from "@/components/Decoration/Decoration";
import Card from "@/components/Card/Card";
import Socials from "@/components/Socials/Socials";
import homeData from "./api/json/home.json";

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
          />
        ))}

        <Decoration position={content.decoration.bottom.position} />
        <DividerTitle
          title={content.dividerTitle.bottom.title}
          text={content.dividerTitle.bottom.text}
        />
        <Socials />
      </main>
    </>
  );
}
