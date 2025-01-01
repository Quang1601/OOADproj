import React, { useState } from 'react'
import'./Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/Exploremenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import FillingBudget from '../../components/FillingBudget/fillingBudget'


const Home = () => {
  const [category,setCategory]= useState("All")
  const [region,setRegion] = useState('All');
  const [price,setPrice] = useState(10000000000);



  return (
    <div>
      <Header/>
      <FillingBudget budget={price} setBudget={setPrice}/>
      <ExploreMenu region={region}
        setRegion={setRegion} category={category} setCategory={setCategory}/>
      <FoodDisplay   region={region} category={category} price={price}/>
           
    </div>
  )
}

export default Home
