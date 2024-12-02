"use client";

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { ResponseType } from "@/types/response";
import {Product} from "@/types/product";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import { SkeletonShema } from "@/components/skeletonShema";
import { Card, CardContent } from "@/components/ui/card";
import { Expand, ShoppingCart } from "lucide-react";
import { IconButton } from "@/components/icon-button";
import { useRouter } from "next/navigation";
import {useCart} from "@/hooks/use-cart";

export default function FeatureProducts() {
    const { loading, result }: ResponseType = useGetFeaturedProducts();
    const router = useRouter();
    const {addItem} = useCart();



    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 text-3xl sm:pb-8">Productos Destacados</h3>

            <Carousel>
                <CarouselContent className="-ml-2 md:-ml-4">
                    {loading && <SkeletonShema grid={3} />}
                    {result !== null &&
                        result.data.map((product: Product) => {
                            const mainImageUrl = product.images.length > 0
                                ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`
                                : "/placeholder.jpg"; // URL de imagen predeterminada si no hay imágenes

                            return (
                                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 group">
                                    <div className="p-2">
                                        <Card className="border border-gray-200 shadow-none">
                                            <CardContent className="relative flex items-center justify-center px-6 py-4">
                                                <img
                                                    src={mainImageUrl}
                                                    alt={product.productName}
                                                    className="object-contain h-40 w-full mb-4"
                                                />
                                                <div className="absolute w-full transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                                                    <div className="flex justify-center gap-x-4">
                                                        <IconButton
                                                            onClick={() => router.push(`product/${product.slug}`)}
                                                            icon={<Expand size={20} />}
                                                            className="text-gray-600"
                                                        />
                                                        <IconButton
                                                            onClick={() => addItem(product)}
                                                            icon={<ShoppingCart size={20} />}
                                                            className="text-gray-600"
                                                        />
                                                    </div>
                                                </div>
                                            </CardContent>
                                            <div className="flex flex-col items-start p-4">
                                                <h3 className="text-lg font-bold text-black dark:text-gray-300">{product.productName}</h3>
                                                <div className="flex items-center gap-2 mt-2">

                                                    <span className="px-2 py-1 text-sm font-medium text-white bg-black rounded-full">
                                                        {product.origin}
                                                    </span>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            );
                        })}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext className="hidden sm:flex"/>
            </Carousel>
        </div>
    );
}
