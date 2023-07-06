import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Cards from "../components/Cards";
import Hero from "../components/Hero";
import Images from "../components/Images";


function Home() {
   //url
    const url = `https://covid19.mathdro.id/api`;
    
    const [covids, setCovids] = useState([])
    //membuat state covid

    useEffect(()=>{
        getCovidsGlobal();
    },[])
    
    async function getCovidsGlobal(){
        const response = await axios(url)

        
        let covids = [
          response.data.confirmed,
          response.data.recovered,
          response.data.deaths,
        ]

        setCovids(covids)
    }

  return (
      <div>
        <Hero />
        <Cards title="Global" tagline="Data Covid Berdasarkan Global" covids={covids}/>
        <Images src="https://covid19.mathdro.id/api/og" title="Global" />
      </div>
  )
}

export default Home;
