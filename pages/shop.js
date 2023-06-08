import Events from "@/components/Events/Events";
import Navigation from "@/components/Navigation/Navigation";
import DividerTitle from "@/components/typography/DividerTitle/DividerTitle";
import React from "react";

const shop = () => {
  return (
    <>
      <main>
        <Navigation />
        <DividerTitle
          title={"this page is currently under development"}
          text={[""]}
        />
        <Events />
      </main>
    </>
  );
};

export default shop;
