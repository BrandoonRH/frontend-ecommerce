import Link from 'next/link';
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Menu} from "lucide-react";


export default function ItemsMenuMobile() {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu/>
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/categories/cleaning" className="block">Limpieza</Link>
                <Link href="/categories/care-conditioning" className="block">Cuidado y Acondicionamiento</Link>
                <Link href="/categories/special-treatments" className="block">Tratamientos Especiales</Link>
                <Link href="/categories/stylized" className="block">Estilizado</Link>
            </PopoverContent>
        </Popover>
    )
}
