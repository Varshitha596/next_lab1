export default function BlogPost(
    {params}:{params:{id:string}})
    {
        return (
            <h1>{params.id}</h1>
        )
    }
