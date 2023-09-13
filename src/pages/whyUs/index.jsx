import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import WhyUsPage from "../../components/WhyUs";

const WhyUs = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <MainLayout>
      <PageHeader
        title="WhyUs"
        fullPath={[
          { id: 1, name: "homes", url: "/" },
          { id: 2, name: "whyUs", url: "/whyUs" },
        ]}
        image="/assets/img/bgwhyus.jpg"
      />
      <WhyUsPage />
    </MainLayout>
  );
};

export default WhyUs;
