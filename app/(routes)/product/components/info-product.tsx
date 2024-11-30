import React from 'react'
import {Product} from "@/types/product";
import {Separator} from "@/components/ui/separator";
import {formatPriceToMXN} from "@/lib/formatPrice";
import {Button} from "@/components/ui/button";
import {Heart} from "lucide-react";
import {useCart} from "@/hooks/use-cart";
import {useLovedProducts} from "@/hooks/use-loved-products";

interface InfoProductProps {
    product: Product
}

export default function InfoProduct(props: InfoProductProps) {
    const {product} = props
    const {addItem} = useCart();
    const {addLovedItem, lovedItems} = useLovedProducts();



    return (
        <div className="px-6">
            <div className="justify-between mb-3 sm:flex">
                <h1 className="text-2xl font-bold">{product.productName}</h1>
                <div className="flex items-center justify-between gap-3">
                    <p className="px-2 py-1 text-center text-sx text-white bg-black rounded-full dark:bg-white dark:text-black w-fit ">
                        {product.origin}
                    </p>
                </div>

            </div>
            <Separator className="my-4"/>
            <p className="text-justify">{product.description}</p>
            <Separator className="my-4"/>
            <p className="text-xl font-extrabold">{formatPriceToMXN(product.price)}</p>
            <div className="flex items-center gap-5 mt-5">
                <Button className="w-full"
                        onClick={() => addItem(product)}
                >Comprar</Button>
                <Heart width={30} strokeWidth={1} className="transition duration-300 cursor-pointer hover:fill-black" onClick={() => addLovedItem(product) }/>
            </div>
        </div>
    )
}
