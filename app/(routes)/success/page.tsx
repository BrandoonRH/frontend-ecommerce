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
                    <Image src="/success.webp" alt="success" width={250} height={500} className="rounded-lg" />
                </div>
                <div>
                    <h1 className="text-3xl">!Gracias por tu Compra!</h1>
                    <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in elit luctus, condimentum lacus sed, sodales eros. Etiam vitae lorem in ligula mattis consectetur sed et odio. Morbi mattis tellus ac felis tincidunt dictum. Mauris felis tellus, tristique sed ultrices eget, vulputate et odio. Fusce sodales interdum eros, nec luctus risus condimentum sit amet</p>
                    <p className="my-3 text-xl font-extrabold text-center">Que Disfrutes tu Producto 🙏❤️</p>

                    <Button onClick={() => router.push('/')}> Volver a la tienda</Button>
                </div>
            </div>
        </div>
    )
}
