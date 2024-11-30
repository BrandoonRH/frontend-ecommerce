import {Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext} from "@/components/ui/carousel";
import {Image, Product} from "@/types/product";

interface CarouselProductProps {
     images: Image[]
}
export default function CarouselProduct(props: CarouselProductProps){
    const {images} = props;

    return (
        <div className="sm:px-16">
            <Carousel>
                <CarouselContent>
                    {images.map((image) => (
                        <CarouselItem key={image.id}>
                                <img
                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                                    alt="Image"
                                    className="rounded-md"
                                />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
    )
}
