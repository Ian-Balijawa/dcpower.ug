import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const nv = useNavigate()

    useEffect(() => {
        nv("/")
    }, [])

    return (
        < div className="wrap pad" >
            <h1>Page not found</h1>
            <a href="/products">Browse products</a>
        </div >
    )
}
