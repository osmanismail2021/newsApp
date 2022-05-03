import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Layout/Navbar";
import Home from "./components/Home"
import Footer from "./components/Layout/Footer";
import './App.css';
import Belgiumnews from "./components/Belgiumnews";
import Worldnews from "./components/Worldnews";
import Weathernews from "./components/Weathernews";
import Sportnews from "./components/Sportnews";
import Trafficnews from "./components/Trafficnews";
import SearchPage from "./components/SearchPage";
import { Database } from './components/context/index';
import { React, useState, useEffect } from 'react';





export default function App() {
  
  const [articles, setArticles] = useState([])
  const express = require('express');
  const { createProxyMiddleware } = require('http-proxy-middleware');

  // proxy middleware options
/** @type {import('http-proxy-middleware/dist/types').Options} */
const options = {
  target: 'http://osmani.netlify.app', // target host
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  pathRewrite: {
    '^/api/old-path': '/api/new-path', // rewrite path
    '^/api/remove/path': '/path', // remove base path
  },
  router: {
    // when request.headers.host == 'dev.localhost:3000',
    // override target 'http://www.example.org' to 'http://localhost:8000'
    'dev.localhost:3000': 'http://localhost:8000',
  },
};

// create the proxy (without context)
const exampleProxy = createProxyMiddleware(options);

// mount `exampleProxy` in web server
const app = express();
app.use('/api', exampleProxy);
app.listen(3000);
  


  useEffect(() => {
   const fetchIt = async ()=>{
    await fetch('/v2/everything?q=news&apiKey=a85abafdd40249398d40a7794a9506a1')
      .then(res => res.json())
      .then(data => {
        setArticles(data.articles)

      })
   }
   

   

   fetchIt()
  }, [])
  return (
    <Database.Provider value={articles}>
      <BrowserRouter>
        
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/belgiumnews" element={<Belgiumnews />} />
            <Route path="/worldnews" element={<Worldnews />} />
            <Route path="/weathernews" element={<Weathernews />} />
            <Route path="/sportnews" element={<Sportnews />} />
            <Route path="/trafficnews" element={<Trafficnews />} />
            <Route path="/searchpage" element={<SearchPage />} />

          </Routes>
          <Footer />

      </BrowserRouter>
    </Database.Provider>


  );
}


