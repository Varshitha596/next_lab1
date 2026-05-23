import Link from "next/link"
export default function HOME(){
    return ( 
    <div>
        <h1 >
            hi.. varsha
        </h1>
        <Link href="/about">welcome to the about</Link><br/>
        <Link href="/service">welcome to the service</Link><br/>
        <Link href="/profile">welcome to the profile</Link><br/>
        <Link href="/contact">welcome to the contact</Link>
    </div>
)
}