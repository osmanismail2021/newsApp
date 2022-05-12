import React from 'react'
import "./style/footer.css"
import { Link } from "react-router-dom";
import { BsCloudSun } from "react-icons/bs";
import { GiBelgium } from "react-icons/gi";
import { BiWorld } from "react-icons/bi";
import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineSportsSoccer } from "react-icons/md"
import { GiTrafficLightsReadyToGo } from "react-icons/gi"


export default function Footer() {
  return (
    <div className='footer'>
   <div className='itemsContainer'>
        <Link className='icon' to="/belgiumnews">

          <span>Belgium News</span>
          <GiBelgium />

        </Link>
        <Link className='icon' to="/worldnews">

          <span>World News</span>
          <BiWorld />
        </Link>
        <Link className='icon' to="/weathernews">

          <span>Weather News</span>
          <BsCloudSun />

        </Link>
        <Link className='icon' to="/sportnews">

          <span>Sport News</span>
          <MdOutlineSportsSoccer />

        </Link>
        <Link className='icon' to="/trafficnews">

          <span>Traffic News</span>
          <GiTrafficLightsReadyToGo />

        </Link>
      </div>
        <h1>copyright © 2022 design and developed by Osman ISMAIL</h1>
    </div>
  )
}
