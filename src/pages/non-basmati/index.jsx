/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import { NonBasmatis } from "../../components/NonBasmati";
import PageHeader from "../../components/Page-header";

const NonBasmati = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <PageHeader
        title="Rice"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "non-basmati", url: "/non-basmati" },
        ]}
        image="/assets/img/patern1.png"
      />
      <NonBasmatis />
    </MainLayout>
  );
};

export default NonBasmati;
