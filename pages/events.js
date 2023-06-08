import React from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation/Navigation";
import Decoration from "@/components/Decoration/Decoration";
import Socials from "@/components/Socials/Socials";
import About from "@/components/About/About";
import Events from "@/components/Events/Events";
import events__Data from "./api/json/eventsList.json";

export async function getServerSideProps() {
  const eventsData = await events__Data;
  return {
    props: {
      eventsData,
    },
  };
}

export default function events({ eventsData }) {
  return (
    <>
      <Head>
        <title>Louby Lou</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation />
        <About
          title={"What is a Louby Lou Event?"}
          body={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis metus diam, ultrices at lectus vitae, tempor ullamcorper arcu. Sed pulvinar at tellus sit amet consectetur. Phasellus rutrum sollicitudin urna ac feugiat. Sed eleifend commodo risus, quis posuere justo.",
            "Quisque sit amet luctus enim. Sed vel urna porta, gravida tellus eu, consequat justo. Nulla iaculis blandit fermentum. Vivamus metus justo, ultricies sit amet placerat non, aliquam ac ante. Donec semper mauris mi, quis pellentesque erat pretium sed. Cras sed sagittis lacus.",
          ]}
          spacer
        />
        <Decoration position={"right"} />
        {eventsData.events.map((item, idx) => (
          <Events key={idx} position={Number.isInteger(idx / 2)} data={item} />
        ))}

        <Socials />
      </main>
    </>
  );
}
