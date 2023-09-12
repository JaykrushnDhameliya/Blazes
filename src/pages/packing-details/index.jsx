import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import PackingDetails from "../../components/Post-details";

const PackingDetail = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <MainLayout>
      <PageHeader
        title="packing details"
        fullPath={[
          { id: 1, name: "homes", url: "/" },
          { id: 3, name: "packing details", url: "/packing-details" }
        ]}
        image="/assets/img/Tiles.jpg"
      />
      <PackingDetails />
    </MainLayout>
  );
};

export default PackingDetail;
