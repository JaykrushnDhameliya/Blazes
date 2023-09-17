/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import { WorkTwoColumn } from "../../components/Work-Two-Column";
import PageHeader from "../../components/Page-header";

const Work1 = () => {
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
          { id: 2, name: "Sanitary Ware", url: "/SanitaryWare" },
        ]}
        image="/assets/img/patern.png"
      />
      <WorkTwoColumn />
    </MainLayout>
  );
};

export default Work1;
