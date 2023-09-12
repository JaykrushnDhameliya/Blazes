import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import TilesCalculator from '../../components/Tiles-calculator'

const Calculator = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
    return (
      <MainLayout>
        <PageHeader
          title="Tiles Calculator"
          fullPath={[
            { id: 1, name: "homes", url: "/" },
            { id: 2, name: "tilesCalculator", url: "/tilesCalculator" },
          ]}
        image="/assets/img/TilesCalculator.jpg"
        />
        <TilesCalculator />
      </MainLayout>
    );
}

export default Calculator;