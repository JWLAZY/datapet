import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/electron-vite.animate.svg'
import axios from "axios";
import {BrowserWindow, app} from "electron";

import pie from "puppeteer-in-electron";
import puppeteer from "puppeteer-core";


import './App.css'
const baseURL = "https://api.bilibili.com/x/relation/stat?vmid=294148736";

function App({ version,aEvent }) {
  const [count, setCount] = useState(0)
  const [fanCount, setFanCount] = useState(1)

  useEffect(() => {
    // axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    // axios.get(baseURL,{withCredentials: false}).then((response) => {
    //   console.log(response);
    //   setFanCount(response.data.data);
    // });
  }, []);

  
  return (
    <>
      <div>
        <a href="https://electron-vite.github.io" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />

        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
          --
          
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR 是是是
        </p>
        data {fanCount.follower}
        <button onClick={aEvent}></button>
      </div>
      electron version : {version}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
