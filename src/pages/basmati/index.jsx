/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import { Basmatis } from "../../components/Basmati";
import PageHeader from "../../components/Page-header";

const Basmati = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <PageHeader
        title="Rice"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "basmati", url: "/basmati" },
        ]}
        image="/assets/img/patern1.png"
      />
      <Basmatis />
    </MainLayout>
  );
};

export default Basmati;
