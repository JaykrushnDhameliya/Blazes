/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import { ToorDal } from "../../components/Toor";
import PageHeader from "../../components/Page-header";

const Toor = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <PageHeader
        title="Pules"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "toor-dal", url: "/toor-dal" },
        ]}
        image="/assets/img/patern1.png"
      />
      <ToorDal />
    </MainLayout>
  );
};

export default Toor;
