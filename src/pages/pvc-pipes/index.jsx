/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import { PvcPipe } from "../../components/Pvc-Pipes";
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
          { id: 2, name: "PvcPipe", url: "/pvc-pipes" },
        ]}
        image="/assets/img/patern.png"
      />
      <PvcPipe />
    </MainLayout>
  );
};

export default Work1;
