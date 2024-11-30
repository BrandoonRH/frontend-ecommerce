"use client";
import {useCart} from "@/hooks/use-cart";
import {Product} from "@/types/product";
import {Separator} from "@/components/ui/separator";
import {formatPriceToMXN} from "@/lib/formatPrice";
import {Button} from "@/components/ui/button";
import CartItem from "@/app/(routes)/cart/components/cart-item";
import {loadStripe} from "@stripe/stripe-js";
import {makePaymentRequest} from "@/api/payment";

const stripePromise = loadStripe('pk_test_51QPPZrHq7YgOhS8ZUPEwKsVa1abNp6T95nuP08zoNIavegHeHp8cogGgtVliWpczXue7aC4yZOXC6m5RmK72uD8000TpgbHm06')

export default function Page() {
    const {items, removeAllItems} = useCart();

    const prices = items.map((item: Product) => item.price);
    const totalPrices = items.reduce((acc, item) => acc + item.price, 0);

    const buyStripe = async () => {
        try {

            const stripe = await stripePromise

            //Error Aquí
            const res = await makePaymentRequest.post("/api/orders", {
                products: items
            });
            //console.log(res);
            removeAllItems();
            await stripe?.redirectToCheckout({
                sessionId: res.data.stripeSession.id
            })


        }catch (error){
            console.error("Error en la compra:", error);
        }
    };



    return (
        <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <h1 className="mb-5 text-3xl font-bold">Shopping Cart</h1>
            <div className="grid sm:grid-cols-2 sm:gap-5">
                <div>
                    {items.length === 0 && (
                        <p>NO hay Productos en el carrito</p>
                    )}
                    <ul>
                        {items.map((product: Product) => (
                            <CartItem key={product.id} product={product} />
                        ))}
                    </ul>
                </div>
                <div className="max-w-xl">
                    <div className="p-6 rounded-lg bg-slate-100 ">
                        <p className="mb-3 text-lg font-semibold">Resumen de Pedido</p>
                        <Separator/>
                        <div className="flex justify-between gap-5 ">
                            <p>Total de la Orden</p>
                            <p>{formatPriceToMXN(totalPrices)}</p>
                        </div>
                        <div className="flex items-center justify-center w-full mt-3">
                            <Button className="w-full uppercase" onClick={buyStripe}>Comprar</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
