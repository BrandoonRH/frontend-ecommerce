"use client";

import {useLovedProducts} from "@/hooks/use-loved-products";
import LovedItemProduct from "@/app/(routes)/love-products/components/loved-item-product";


export default function Page() {
    const {lovedItems} = useLovedProducts();

    return (
        <div className="max-w-4xl py-4 mx-auto sm:py-32 sm:px-24">
            <h1 className="sm:text-2xl">Productos que te gustan</h1>

            <div>
                <div>
                        {lovedItems.length === 0 && (
                            <p>No hay productos en la sección de me gusta</p>
                        )}
                    <ul>
                        {lovedItems.map((item) => (
                            <LovedItemProduct product={item} key={item.id}/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
