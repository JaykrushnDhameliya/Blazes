/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import { WallHung  } from "../../components/WallHung";
import PageHeader from "../../components/Page-header";

const Work1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <PageHeader
        title="Collections"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "Wall Hung", url: "/wall-hung" },
        ]}
        image="/assets/img/patern.png"
      />
      <WallHung />
    </MainLayout>
  );
};

export default Work1;
