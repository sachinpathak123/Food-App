import React, { useEffect, useState } from 'react';
import Shimer from './Shimer';
const ResMenu = () => {
  const [resinfo,setresinfo] = useState(null);
  useEffect(()=>{
    console.log('useEffect');
    fetchData();
  },[])

  const fetchData  = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.05650&lng=73.06560&restaurantId=28793&catalog_qa=undefined&submitAction=ENTER"
        )
        const json = await data.json();
        setresinfo(json.data);
        console.log(json);
  }

  return resinfo === null ? <Shimer /> :  (
    <div>
      <h1>{resinfo?.cards[2]?.card?.card?.info.name}</h1>
      <h2>Menu</h2>
      <ul>
        <li>Burgers</li>
        <li>Coke</li>
        <li>Biryani</li>
      </ul>
    </div>
  )
}

export default ResMenu
