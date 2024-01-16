/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import { MasoorDal } from "../../components/Masoor";
import PageHeader from "../../components/Page-header";

const Masoor = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <PageHeader
        title="Pules"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "masoor", url: "/masoor" },
        ]}
        image="/assets/img/patern1.png"
      />
      <MasoorDal />
    </MainLayout>
  );
};

export default Masoor;