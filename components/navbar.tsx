"use client"

import {useRouter} from "next/navigation";
import {BaggageClaim, Heart, ShoppingCart, User} from "lucide-react";
import MenuList from "@/components/menu-list";
import ItemsMenuMobile from "@/components/items-menu-mobile";
import {ToggleTheme} from "@/components/toggle-theme";
import {useCart} from "@/hooks/use-cart";


function Navbar() {
    const router = useRouter();
    const cart = useCart();


    return (
       <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
            <h1 className="text-3xl" onClick={() => router.push("/")}>
                Ecommerc
                <span className="font-bold">Sara</span>
            </h1>
           <div className="items-center justify-between hidden sm:flex">
                <MenuList/>
           </div>
           <div className="flex sm:hidden">
               <ItemsMenuMobile/>
           </div>
           <div className="flex items-center justify-between gap-2 sm:gap-7">
               {cart.items.length === 0 ? (
                   <ShoppingCart strokeWidth="1" className="cursor-pointer" onClick={() => router.push("/cart")} />
               ):(
                  <div className="flex gap-1 " onClick={() => router.push("/cart")}>
                        <BaggageClaim strokeWidth={1} className="cursor-pointer"/>
                      <span>{cart.items.length}</span>
                  </div>
               )}

                <Heart strokeWidth="1" className="cursor-pointer" onClick={() => router.push("/love-products")} />
                <User strokeWidth="1" className="cursor-pointer"/>
                <ToggleTheme/>
           </div>
       </div>
    )
}

export default Navbar