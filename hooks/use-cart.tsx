import {Product} from "@/types/product";
import {create} from "zustand";
import {persist, createJSONStorage } from "zustand/middleware";
import {toast} from "@/hooks/use-toast";
import {data} from "autoprefixer";


interface CartStore{
    items: Product[]
    addItem: (data: Product) => void
    removeItem: (id: number) => void
    removeAllItems: () => void
}

export const useCart = create(persist<CartStore>((set, get) => ({

    items: [],
    addItem: (data: Product) => {
        const currentItems = get().items
        const existingItem = currentItems.find((item) => item.id === data.id)
        if(existingItem){
            return toast({
                title: "El producto ya esta en el carrito ",
                variant: "destructive",
            })
        }
        set({
            items: [...get().items, data],
        });
        toast({
            title: "Producto Agregado 🟢!!",
            variant: "default",
        })
    },
    removeItem(id: number) {
        set({items: [...get().items.filter((item) => item.id !== id)]})
        toast({
            title: "Producto Eliminado del Carrito 🛒🔴!!",
        });
    },
    removeAllItems: () => set({items: []})
}),{
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage)

}))