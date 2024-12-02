"use client";

import Link from "next/link";
import {useGetCategories} from "@/api/useGetProducts";
import {ResponseType} from "@/types/response";
import {CategoryType} from "@/types/category";



export const ChooseCategory = () => {
    const {result, loading, error}: ResponseType = useGetCategories();

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 pb-4 text-3xl sm:pb-8">Elige tu Línea de Cabello Favorita</h3>
            <div className="grid gap-5 sm:grid-cols-4 ">
                {!loading && result !== null && (
                    result.map((category: CategoryType) => (
                        <Link
                            key={category.id}
                            href={`/category/${category.slug}`}
                            className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-xl"
                        >
                            <img
                                src={
                                    category.mainImage?.formats?.small?.url
                                        ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${category.mainImage.formats.thumbnail.url}`
                                        : '' // Ruta de una imagen de respaldo
                                }
                                alt={category.categoryName || 'Category image'}
                                className="max-w-[270px] transition duration-300 ease-in-out rounded-lg hover:scale-110 mx-auto"
                            />
                            <p className="absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg">{category.categoryName}</p>
                        </Link>
                    ))
                )}
            </div>
        </div>
    )
}
