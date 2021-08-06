import React, { useState } from 'react';
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import Title from '../Components/Title';
import portfolios from '../Components/allPortfolios';

const allCategories = ['Todos', ...new Set(portfolios.map(item => item.category))];

function PortfoliosPage() {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(portfolios);

  const filter = (category) => {
    if(category === 'Todos'){
      setMenuItems(portfolios);
      return;
    }
    const filteredData = portfolios.filter((item) => {
      return item.category === category;
    })
    setMenuItems(filteredData);
  }

  return (
    <div className="PortfoliosPage">
      <div className="title">
        <Title title={"Projetos"} span={"Projetos"} />
      </div>
      <div className="portfolios-data">
        <Categories filter={filter} categories={categories} />
        <MenuItems menuItem={menuItems} />
      </div>
    </div>
  )
}

export default PortfoliosPage;
