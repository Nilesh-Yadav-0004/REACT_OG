/* eslint-disable no-unused-vars */
import { useState } from "react"
import { useLocalStorage } from "../Hook/UselocalStorage"


function App() {
   const [string , setString]=useState('')

   const [value, setValue]=useLocalStorage('name',[])
  return (
    <>
     <input type="text" onChange={(e)=>setString(e.target.value)}/>
     <button  onClick={()=>setValue(string)}></button>
    </>
  )
}

export default App