/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FoodTwoColumn } from "../../components/Food-Two-Column";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";

const FoodItems = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      {/* <WorkHeader
        title="Collections"
        // title = "text",
        // content="Architecture bibendum pharetra eleifend. Suspendisse vel volutpat purus, sit amet bibendum nisl. Cras mollis turpis a ipsum ultes, nec condimentum ipsum consequat. Mauris vitae consequat nibh, vitae interdum mi."
      /> */}
      <PageHeader
        title="Collections"
        fullPath={[
          { id: 1, name: "homes", url: "/" },
          { id: 2, name: "Food Items", url: "/FoodItems" },
        ]}
        image="/assets/img/patern.png"
      />
      <FoodTwoColumn/>
    </MainLayout>
  );
};

export default FoodItems;
