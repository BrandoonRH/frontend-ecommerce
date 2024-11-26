import {Product} from "@/types/product";
import Link from "next/link";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import {IconButton} from "@/components/icon-button";
import {Expand, ShoppingCart} from "lucide-react";
import {useRouter} from "next/navigation";
import {formatPriceToMXN} from "@/lib/formatPrice";
import {useCart} from "@/hooks/use-cart";

type ProductCartProps = {
    product: Product
}

export default function ProductCart(props: ProductCartProps) {
    const {product} = props
    const router = useRouter();
    const {addItem} = useCart();

    return (
        <Link
            className="relative p-2 transition-all duration-200 rounded hover:shadow-md"
            href={`/product/${product.slug}`}
        >
            <div className=" flex items-center justify-between gap-3 px-2 z-[1] top-4">
                <p className="px-2 py-1 text-xs text-white bg-black rounded-xl dark:bg-white dark:text-black w-fit">{product.productName}</p>
            </div>
            <Carousel
                opts={{
                    align: 'start'
                }}
            >
                <CarouselContent>
                    {product.images.map((image) => (
                        <CarouselItem key={image.id} className="group">
                            <img
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                                alt="Image"
                                className="rounded-md"
                            />
                            <div className="absolute w-full px-6 flex justify-between transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                                <IconButton
                                    onClick={() => router.push(`/products/${product.slug}`)}
                                    icon={<Expand size={20} className="text-gray-400"/>}
                                />
                                <IconButton
                                    onClick={() => addItem(product) }
                                    icon={<ShoppingCart size={20} className="text-gray-400"/>}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <p className="text-2xl font-bold text-center">{formatPriceToMXN(product.price)}</p>
        </Link>
    )
}
