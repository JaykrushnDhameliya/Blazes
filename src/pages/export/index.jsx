import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import ExportPage from "../../components/Export";

const Export = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <MainLayout>
      <PageHeader
        title="Export"
        fullPath={[
          { id: 1, name: "homes", url: "/" },
          { id: 2, name: "Export", url: "/export" },
        ]}
        image="/assets/img/exports.jpg"
      />
      <ExportPage />
    </MainLayout>
  );
};

export default Export;
