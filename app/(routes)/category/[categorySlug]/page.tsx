"use client";

import {ResponseType} from "@/types/response";
import {useGetProductsByCategory} from "@/api/getProductsByCategory";
import {useParams, useRouter} from "next/navigation";
import {Separator} from "@/components/ui/separator";
import {FiltersControlsCategory} from "@/app/(routes)/category/components/filters-controls-category";
import {SkeletonShema} from "@/components/skeletonShema";
import ProductCart from "@/app/(routes)/category/components/product-cart";
import {Product} from "@/types/product";

export default function Page(){
    const params = useParams();
    const {categorySlug} = params;
    const router = useRouter();

    const {result, loading}: ResponseType = useGetProductsByCategory(categorySlug)


    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {result !== null && !loading && (
                <h1
                    className="text-3xl font-medium"
                >
                    {result[0].origin}
                </h1>
            )}
            <Separator/>
            <div className="sm:flex sm:justify-between">
                {/**<FiltersControlsCategory/>*/}

                <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
                    {loading && (
                        <SkeletonShema grid={3}/>
                    )}
                    {result !== null && !loading && (
                       result.map((product: Product) => (
                           <ProductCart key={product.id} product={product}/>
                       ))
                    )}
                </div>
            </div>
        </div>
    )
}