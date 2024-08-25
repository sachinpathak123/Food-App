import React, { useEffect, useState } from "react";
import RestoCard from "./RestoCard";
// import resList from "../utils/ResList";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Shimer from "./Shimer";
const Body = () => {
    const [list,setlist]= useState([]);
    const [filterlist,setfilterlist]=useState([]);
    const [valuetxt,setvaluetxt]=useState("");
    useEffect(()=>{
        console.log("UseEffect rendered");
        fetchList();
    },[]);

    const fetchList= async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.05650&lng=73.06560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const json = await data.json();
        setlist(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilterlist(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    console.log("Body rendered");

    if(list.length === 0){
        return <Shimer />
    }

    return (
        <div className="body">
            <div className="filter">
            <div className="search-btn">
                <input type="text" name="Search your restaurant" id="search" placeholder="Search your place" value={valuetxt}
                onChange={(e)=>{
                    setvaluetxt(e.target.value)
                    const filterlist=list.filter((x)=>{
                        return x.info.name.toLowerCase().includes(e.target.value.toLowerCase())
                    })
                    setfilterlist(filterlist)
                } }/>
                <button className="searchbtn" onClick={()=>{
                    const filterlist=list.filter((x)=>{
                        return x.info.name.toLowerCase().includes(valuetxt.toLowerCase())
                    })
                    setfilterlist(filterlist)
                }}>Search</button>
            </div>
            </div>
            <div className="res-container">
                {
                    filterlist.map((res) => (
                            <RestoCard key={res.info.id} resName={res} />
                ))}
            </div>
         </div>
    );
}
export default Body;