
"use client";

import {useEffect, useState} from "react";

export function useGetFeaturedProducts() {
    const url =`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeatured][$eq]=true&populate=*`;

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url);
                const json = await res.json();
                setResult(json);
                setLoading(false)
            }catch(e: any){
                setError(e)
                setLoading(false);
            }
        })();
    }, [url]);

    return {loading, result, error}
}