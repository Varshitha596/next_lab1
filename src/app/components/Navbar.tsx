import Link from 'next/link'
export default function Navbar(){
    return (
       <div>
        <Link href='/'>home</Link>
        <br/>
        <Link href='/about'>ABout</Link>
       </div>
    )
}