import React, { useState } from 'react'
import'./Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/Exploremenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
const Home = () => {
  const[category,setCategory]= useState("All")
  const [region, setRegion] = useState('All');
  
  return (
    <div>
      <Header/>
      <ExploreMenu region={region}
        setRegion={setRegion} category={category} setCategory={setCategory}/>
      <FoodDisplay   region={region} category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home