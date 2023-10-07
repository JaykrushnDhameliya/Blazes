import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import Exports from "../../components/Exports";

const ExportDetails = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <MainLayout>
      <PageHeader
        title="Exports"
        fullPath={[
          { id: 1, name: "homes", url: "/" },
          { id: 2, name: "Exports", url: "/exports" },
        ]}
        image="/assets/img/exports.jpg"
      />
      <Exports />
    </MainLayout>
  );
};

export default ExportDetails;
