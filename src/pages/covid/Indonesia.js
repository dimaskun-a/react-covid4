import { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import Hero from "../../components/Hero";
import Images from "../../components/Images";
import axios from 'axios';


function CovidIndonesia(){
    //url
    const url = `https://covid19.mathdro.id/api/countries/indonesia`;
    
    const [covids, setCovids] = useState([])
    //membuat state covid

    useEffect(()=>{
        getCovidsIndonesia();
    },[])
    
    async function getCovidsIndonesia(){
        const response = await axios(url)

        let covids = [
            response.data.confirmed,
            response.data.recovered,
            response.data.deaths,
        ]
        setCovids(covids)
    }

    return(
        <>
            <Hero />
            <Cards title="Indonesia" tagline="Data Covid Berdasarkan Indonesia" covids={covids}  />
            <Images src="https://covid19.mathdro.id/api/countries/indonesia/og" title="Indonesia" />
        </>
    )
}

export default CovidIndonesia;