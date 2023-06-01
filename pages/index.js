import Head from "next/head";
import Hero from "@/components/Hero/Hero";
import Navigation from "@/components/Navigation/Navigation";
import About from "@/components/About/About";
import DividerTitle from "@/components/typography/DividerTitle/DividerTitle";
import Decoration from "@/components/Decoration/Decoration";
import Card from "@/components/Card/Card";
import Socials from "@/components/Socials/Socials";

export default function Home() {
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
        <Hero title={"looking for giggles?"} />
        <About
          title={"get to know louby lou"}
          body={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis metus diam, ultrices at lectus vitae, tempor ullamcorper arcu. Sed pulvinar at tellus sit amet consectetur. Phasellus rutrum sollicitudin urna ac feugiat. Sed eleifend commodo risus, quis posuere justo.",
            "Quisque sit amet luctus enim. Sed vel urna porta, gravida tellus eu, consequat justo. Nulla iaculis blandit fermentum. Vivamus metus justo, ultricies sit amet placerat non, aliquam ac ante. Donec semper mauris mi, quis pellentesque erat pretium sed. Cras sed sagittis lacus.",
          ]}
        />
        <Decoration position={"right"} />
        <DividerTitle
          title={"we use this title element to break up the page"}
          text={["Keep this quite short, maybe a tagline?"]}
        />
        <Card
          title={"test title"}
          desc={[
            "This is a test description, just for looking at sake, I would use lorem ipsum but I feel like that's overused",
            "Now this is just an example of another paragraph, separated using an array rather than just plain text",
          ]}
          pos={"left"}
          img={"/images/pictures/lucy_about_me.jpeg"}
        />
        <Card
          title={"test title"}
          desc={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis metus diam, ultrices at lectus vitae, tempor ullamcorper arcu. Sed pulvinar at tellus sit amet consectetur. Phasellus rutrum sollicitudin urna ac feugiat. Sed eleifend commodo risus, quis posuere justo.",
            "Quisque sit amet luctus enim. Sed vel urna porta, gravida tellus eu, consequat justo. Nulla iaculis blandit fermentum. Vivamus metus justo, ultricies sit amet placerat non, aliquam ac ante. Donec semper mauris mi, quis pellentesque erat pretium sed. Cras sed sagittis lacus.",
          ]}
          pos={"right"}
          img={"/images/pictures/lucy_about_me.jpeg"}
        />
        <Decoration position={"left"} />
        <DividerTitle
          title={"we use this title element to break up the page"}
          text={["Keep this quite short, maybe a tagline?"]}
        />
        <Socials />
      </main>
    </>
  );
}
