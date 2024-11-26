import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";


export const BannerProduct = () => {
    return (
        <>
            <div className="mt-4 text-center">
                <p>Sumérete en una experiencia única</p>
                <h4 className="mt-2 text-5xl font-extrabold uppercase">Productos 100% Organicos</h4>
                <p className="my-2 text-lg">Cuida tu cabello con nosotros</p>
                <Link href="#" className={buttonVariants()}>Comprar</Link>
            </div>
            <div className="h-[350px] bg-cover md:h-[600px] rounded-xl bg-[url('/slider.webp')] bg-center mt-5 bg-no-repeat"/>


        </>
    )
}
