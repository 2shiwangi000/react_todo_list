import React, {useEffect} from "react";

import './App.css';
import ToDo from './ToDo';
import axios from 'axios';

function App() {
  // const getData=async()=>{
  //   const res = await axios.get('http://192.168.12.52:5000/trainees', {
  //     headers: {
  //       Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6ImFkbWluQDEyMyIsImlhdCI6MTY1NjMzMTc3MH0.ndjnosy8ZmftgiQqh9UFAyGw1G-LR_cUfic0tQciKJk"
  //     }
  //   });
  //   console.log(res);
  // }
  // useEffect(()=>{
  //   getData();
  // }, []);
  return (
    <div className="App">
      <ToDo/>
    </div>
  );
}

export default App;
