//import Link from "next/link"
//import Navbar from "./components/navbar"
//import Cart from "./components/card"
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
<button onClick={()=>funcount(count-1)}>de</button>
<input 
type="text"
placeholder="enter ur name"
value={nam}
onChange={(e) =>
   setname( e.target.value)
}
/>
<br/>
<input 
type="password"
placeholder="enter ur password"
value={email}
onChange={(e) =>
   setemail( e.target.value)
}
/>
<h1>{nam}</h1>
  <h2>
    {email}</h2> 
    
    
    
    <button type="submit"> Submit </button>
</form>
         </div>

    )
// const bloginfo=[
//     {
//         id:"1",
//         ti:"me",
//         di:"varsah"
//     },
//     {
//         id:"2",
//         ti:"me",
//         di:"varsah"
//     },
//     {
//         id:"3",
//         ti:"me",
//         di:"varsah"
//     }
// ]
//     return ( 
//     <div>
//         <Navbar/>
//         <h1 >
//             hi.. varsha
//         </h1>
//         <Link href="/about">welcome to the about</Link><br/>
//         <Link href="/service">welcome to the service</Link><br/>
//         <Link href="/profile">welcome to the profile</Link><br/>
//         <Link href="/contact">welcome to the contact</Link>

// { bloginfo.map((i,id) => (
// <Cart key={id} titale={i.ti} des={i.di} id={i.id} />))}  
//     </div>)

}