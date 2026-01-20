
import BannerBiokap from "@/components/banner/BannerBiokap";
import HeaderBiokap from "@/components/header/HeaderBiokap";
import FeatureBiokap from "@/components/feature/FeatureBiokap";
import WeeklyBestSellingTwo from "@/components/product/WeeklyBestSellingTwo";
import MethodOne from "@/components/common/MethodOne";
import OfferAdd from "@/components/common/OfferAdd";
import DealOfDay from "@/components/product/DealOfDay";
import FeaturesGrid from "@/components/product/FeaturesGrid";
import BlogTwo from "@/components/blog/BlogTwo";
import FooterTwo from "@/components/footer/FooterTwo";
import CategoryBiokap from "@/components/category/CategoryBiokap";


export default function Home() {
  return (
    <div className="demo-one">
      <HeaderBiokap />
      <BannerBiokap />
      <CategoryBiokap />
      <FeatureBiokap />
      {/*<WeeklyBestSellingTwo />*/}
      <MethodOne />
      {/*<DealOfDay />*/}
      {/*<OfferAdd />*/}
      <FeaturesGrid />
      {/*<BlogTwo />*/}
      <FooterTwo />
    </div>
  );
}
