/* eslint-disable no-unused-vars */
import { useState } from "react"
import { useLocalStorage } from "../Hook/UselocalStorage"
import { useToggle } from "./Hook/useToggle";


function App() {
   const [string , setString]=useState('')

   const [value, setValue]=useLocalStorage('name',[]);

   const [toggle, setToggle] = useToggle();
   console.log('~ toggle:', toggle);
  return (
    <>
     {/* <input type="text" onChange={(e)=>setString(e.target.value)}/>
     <button  onClick={()=>setValue(string)}></button> */}

     {toggle && <h1>i am invoked</h1>}

     <button onClick={() => setToggle(false)}>off</button>
     <button onClick={() => setToggle(true)}>on</button>
    </>
  );
}

export { App };