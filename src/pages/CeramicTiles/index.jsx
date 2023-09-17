/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CeramicTwoColumn } from "../../components/Ceramic-Two-Column";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";

const CeramicTile = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      {/* <WorkHeader
        title="Collections"
        // title = "text",
        // content="Architecture bibendum pharetra eleifend. Suspendisse vel volutpat purus, sit amet bibendum nisl. Cras mollis turpis a ipsum ultes, nec condimentum ipsum consequat. Mauris vitae consequat nibh, vitae interdum mi."
      /> */}
      <PageHeader
        title="Collections"
        fullPath={[
          { id: 1, name: "homes", url: "/" },
          { id: 2, name: "CeramicTiles", url: "/CeramicTiles" },
        ]}
        image="/assets/img/patern.png"
      />
      <CeramicTwoColumn/>
    </MainLayout>
  );
};

export default CeramicTile;
