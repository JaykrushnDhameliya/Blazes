import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import Catalouge from "../../components/Catalouge";

const CatalougeDetails = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <MainLayout>
      <PageHeader
        title="Catalouge"
        fullPath={[
          { id: 1, name: "homes", url: "/" },
          { id: 2, name: "Catalouges", url: "/Catalouges" },
        ]}
        image="/assets/img/exports.jpg"
      />
      <Catalouge />
    </MainLayout>
  );
};

export default CatalougeDetails;
