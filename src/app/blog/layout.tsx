export default function blog_layout({children}:{children:React.ReactNode})
{
    return (
        <div>
            <h1>navbar</h1>
            {children}
        </div>
    )
}