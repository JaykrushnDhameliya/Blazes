/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import { Flour } from "../../components/Flour";
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
          { id: 2, name: "Flour", url: "/flour" },
        ]}
        image="/assets/img/patern.png"
      />
      <Flour />
    </MainLayout>
  );
};

export default Work1;
