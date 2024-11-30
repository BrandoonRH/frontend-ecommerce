import {Product} from "@/types/product";
import {useRouter} from "next/navigation";
import {useLovedProducts} from "@/hooks/use-loved-products";
import {useCart} from "@/hooks/use-cart";
import {formatPriceToMXN} from "@/lib/formatPrice";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {X} from "lucide-react";

interface LovedItemProductProps{
    product: Product
}

export default function LovedItemProduct(props: LovedItemProductProps) {
    const {product} = props;
    const router = useRouter();
    const {removeLovedItem} = useLovedProducts();
    const {addItem} = useCart()

    const addToCheckout = () => {
        addItem(product)
        removeLovedItem(product.id)
    }

    return (
       <li className="flex py-6 border-b">
           <div onClick={() => router.push(`/produts/${product.slug}`)}>
               <img
                   alt="Product"
                   className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"
                   src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}/>
           </div>
           <div className="flex justify-between flex-1 px-6">

                   <div>
                        <h2 className="text-lg font-bold">{product.productName}</h2>
                        <p>{formatPriceToMXN(product.price)}</p>
                       <div className="flex items-center justify-between gap-3">
                           <p className="mt-2 px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">{product.origin}</p>
                       </div>
                       <Button onClick={addToCheckout} className="mt-5 rounded-md">Añadir al Carrito</Button>
                   </div>
                   <div>
                       <button className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition")}>
                            <X size={20} onClick={() => removeLovedItem(product.id)}/>
                       </button>
                   </div>

           </div>
       </li>
    )
}
