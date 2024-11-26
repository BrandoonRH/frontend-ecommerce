import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";


export const BannerDiscount = () => {
    return (
        <div className="p-5 sm:p-20 text-center">
            <h2 className="uppercase font-black text-3xl text-primary">
                Consigue hasta un -25%
            </h2>
            <h3 className="mt-3 font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec vehicula metus. Pellentesque luctus est odio, ut gravida libero vestibulum sed.
            </h3>
            <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
                <Link href="#" className={buttonVariants()}>Comprar</Link>
                <Link href="#" className={buttonVariants({variant: "outline"})}>Más Información</Link>
            </div>
        </div>
    )
}
