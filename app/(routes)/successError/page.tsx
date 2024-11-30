"use client"

import Image from "next/image";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";


export default function Page() {
    const router = useRouter();

    return (
        <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
            <div className="flex flex-col-reverse gap-2 sm:flex-row" >
                <div className="flex justify-center md:min-w-[400px]">
                    <Image src="/errorPago.webp" alt="success" width={250} height={500} className="rounded-lg" />
                </div>
                <div>
                    <h1 className="text-3xl">!Algo Salio Mal con su Pago 😓!</h1>

                    <p className="my-3 text-xl font-extrabold text-center">Si el problema persiste comuniquese con nosotros 🙏</p>

                    <Button onClick={() => router.push('/cart')}> Volver al Carrito 🛒 </Button>
                </div>
            </div>
        </div>
    )
}
