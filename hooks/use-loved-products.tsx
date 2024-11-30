import {create} from "zustand";
import {persist, createJSONStorage} from "zustand/middleware";
import {Product} from "@/types/product";
import {toast} from "@/hooks/use-toast";

interface UseLovedProducts {
    lovedItems: Product[];
    addLovedItem: (data: Product) => void;
    removeLovedItem: (id: number) => void;
}

export const useLovedProducts = create(persist<UseLovedProducts>((set, get) => ({
    lovedItems: [],
    addLovedItem: (data: Product) => {
        const currentLovedItems = get().lovedItems
        const existingProduct = currentLovedItems.find((item) => item.id === data.id)

        if(existingProduct){
            return toast({
                title: "El producto ya esta en la lista!! 💔 ",
                variant: "destructive",
            })
        }

        set({
            lovedItems: [...get().lovedItems, data],
        })
        toast({
            title: "Producto agregado a la lista!! ❤️ ",
            variant: "default"
        })
    },
    removeLovedItem: (id: number) => {
        set({
            lovedItems: [...get().lovedItems.filter((item) => item.id !== id)]
        })
        toast({
            title: "Producto se a eliminado de la lista!! 💔 ",
            variant: "default"
        })
    }

}), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage)
}))

