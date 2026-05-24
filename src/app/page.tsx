import Link from "next/link"
import Navbar from "./components/navbar"
import Cart from "./components/card"
export default function HOME(){
const bloginfo=[
    {
        id:"1",
        ti:"me",
        di:"varsah"
    },
    {
        id:"2",
        ti:"me",
        di:"varsah"
    },
    {
        id:"3",
        ti:"me",
        di:"varsah"
    }
]
    return ( 
    <div>
        <Navbar/>
        <h1 >
            hi.. varsha
        </h1>
        <Link href="/about">welcome to the about</Link><br/>
        <Link href="/service">welcome to the service</Link><br/>
        <Link href="/profile">welcome to the profile</Link><br/>
        <Link href="/contact">welcome to the contact</Link>

    {
bloginfo.map((i,id) => (
<Cart
key={id}
titale={i.ti}
des={i.di}
id={i.id}
/>
    ) ) }  
    </div>
)
}