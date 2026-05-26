"use client"
import { useState } from "react"
export default function HOME(){
    const [count,funcount]=useState(0)
    const [nam,setname]=useState('')
    const [email,setemail]=useState('')
     const handleSubmit = (e:any) => {
     e.preventDefault()
    alert(nam)
  }
    return (
        <div>
            <form  onSubmit={handleSubmit}>
            <h1>{count}</h1>
<button onClick={()=>funcount(count+1)}>in</button>
<button onClick={()=>funcount(count-1)}>de</button></form></div>
)}