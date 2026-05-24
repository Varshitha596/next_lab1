import './globals.css'
export default function RootLayout(
    {children}:{children:React.ReactNode})
{
    return (
    <html lang="en">
        <body>{children}

            <h1>*</h1>
        </body>
    </html>
)}