"use client";

import {useRouter} from "next/navigation";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";


export const dataCarouselTop = [
    {
        id: 1,
        title: "Envio con 24/28 hrs",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas neque eu nisi hendrerit, auctor blandit mauris vestibulum. ",
        link: "#"
    },
    {
        id: 2,
        title: "Consigue hasta un -25% en compras superiores de $999",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas neque eu nisi hendrerit, auctor blandit mauris vestibulum. ",
        link: "#"
    },{
        id: 3,
        title: "Devoluciones y entregas gratuitas",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas neque eu nisi hendrerit, auctor blandit mauris vestibulum. ",
        link: "#"
    },
    {
        id: 4,
        title: "Comprar Novedades",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas neque eu nisi hendrerit, auctor blandit mauris vestibulum. ",
        link: "#"
    }
]

export const CarouselTextBanner = () => {
    const router = useRouter()

    return (
        <div className="bg-gray-200 dark:bg-primary">
                <Carousel className="w-full max-w-4xl mx-auto"
                    plugins={[
                        Autoplay({
                            delay: 3000,
                        })
                    ]}
                >
                    <CarouselContent>
                        {dataCarouselTop.map((item) => (
                            <CarouselItem key={item.id} onClick={() => router.push(item.link)} className="cursor-pointer">
                                <div>
                                    <Card className="shadow-none border-none bg-transparent">
                                        <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                                            <p className="sm:text-xl text-wrap dark:text-secondary">{item.title}</p>
                                            <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{item.description}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
        </div>
    )
}
