import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import CatalougePage from "../../components/Catalouge";

const Catalouge = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <MainLayout>
      <PageHeader
        title="Catalouge"
        fullPath={[
          { id: 1, name: "homes", url: "/" },
          { id: 2, name: "catalouge", url: "/catalouge" },
        ]}
        image="/assets/img/exports.jpg"
      />
      <CatalougePage />
    </MainLayout>
  );
};

export default Catalouge;
