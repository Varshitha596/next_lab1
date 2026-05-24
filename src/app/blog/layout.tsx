import styles from "./blog.module.css"
import Navbar from "../components/navbar"
export default function blog_layout({children}:{children:React.ReactNode})
{
    return (
        <div>
            <Navbar/>
            <h1 className={styles.h1q}>layput

            </h1>
            {children}
        </div>
    )
}