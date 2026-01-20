
import BannerBiokap from "@/components/banner/BannerBiokap";
import HeaderBiokap from "@/components/header/HeaderBiokap";
import FeatureBiokap from "@/components/feature/FeatureBiokap";
import WeeklyBestSellingTwo from "@/components/product/WeeklyBestSellingTwo";
import Method from "@/components/common/MethodBiokap";
import OfferAdd from "@/components/common/OfferAdd";
import DealOfDay from "@/components/product/DealOfDay";
import FeaturesGrid from "@/components/product/FeaturesGridBiokap";
import BlogTwo from "@/components/blog/BlogTwo";
import Footer from "@/components/footer/FooterBiokap";
import CategoryBiokap from "@/components/category/CategoryBiokap";
import AboutBiokap from "@/components/about/AboutBiokap";


export default function Home() {
  return (
    <div className="demo-one">
      <HeaderBiokap />
      <BannerBiokap />
      <CategoryBiokap />
      <FeatureBiokap />
      {/*<WeeklyBestSellingTwo />*/}
      {/*<DealOfDay />*/}
      {/*<OfferAdd />*/}
      <FeaturesGrid />
      {/*<BlogTwo />*/}
        <AboutBiokap />
      <Method />
      <Footer />
    </div>
  );
}
