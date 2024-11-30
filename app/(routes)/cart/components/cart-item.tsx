import {Product} from "@/types/product";
import {useRouter} from "next/navigation";
import {useCart} from "@/hooks/use-cart";
import {formatPriceToMXN} from "@/lib/formatPrice";
import {X} from "lucide-react";
import {cn} from "@/lib/utils";

interface CartItemProps {
    product: Product
}

export default function CartItem(props: CartItemProps) {
    const  {product} = props
    const router = useRouter()
    const {removeItem} = useCart();

    return (
        <li className="flex py-6 border-b">
            <div className="cursor-pointer" onClick={() => router.push(`/product/${product.slug}`)}>
               <img
                   alt="Product"
                   className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"
                   src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}/>

            </div>
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-bold">{product.productName}</h2>
                    <p className="font-bold">{formatPriceToMXN(product.price)}</p>
                    <div className="flex items-center justify-between gap-3">
                        <p className="mt-2 px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">{product.origin}</p>
                    </div>
                </div>
                <div>
                    <button className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition")}>
                        <X size={20} onClick={() => removeItem(product.id) }/>
                    </button>
                </div>
            </div>
        </li>
    )
}
