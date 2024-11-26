
import {CarouselTextBanner} from "@/components/carousel-text-banner";
import FeatureProducts from "@/components/feature-products";
import {BannerDiscount} from "@/components/banner-discount";
import {ChooseCategory} from "@/components/choose-category";
import {BannerProduct} from "@/components/banner-product";


export default function Home() {
  return (
     <main>
         <CarouselTextBanner/>
         <FeatureProducts/>
         <BannerDiscount/>
         <ChooseCategory/>
         <BannerProduct/>
     </main>
  );
}
