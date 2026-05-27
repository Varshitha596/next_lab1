"use client"
import { useState } from "react"
export default function Form() {
  const [users, setusers] = useState<any[]>([])
  const [nam, setname] = useState("")
  const [email, setemail] = useState("")
  const handleSubmit = (e:any) => {
    setusers([...users,
  { nam, email}])
  e.preventDefault()
  // alert(nam)
  setname("")
  setemail("")
  }
  return (
<div>
<form onSubmit={handleSubmit}>
<input  type="text" placeholder="Enter your name" value={nam}
 onChange={(e) => setname(e.target.value)} />
<br />
<input type="password" placeholder="Enter password" value={email} 
onChange={(e) => setemail(e.target.value)} />
<br />
<button type="submit"> Submit</button>
</form>
{
  users.map((i:any,index:number)=>
<div key={index}>
  <h1>{i.nam}</h1>
  <h2>{i.email}</h2>

</div>
  )
}

 </div>
  )
}