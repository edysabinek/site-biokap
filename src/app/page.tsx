
import BannerBiokap from "@/components/banner/BannerBiokap";
import HeaderBiokap from "@/components/header/HeaderBiokap";
import FeatureBiokap from "@/components/feature/FeatureBiokap";
import FeaturesGrid from "@/components/product/FeaturesGridBiokap";
import Footer from "@/components/footer/FooterBiokap";
import CategoryBiokap from "@/components/category/CategoryBiokap";
import BuyingProcessBiokap from "@/components/process/BuyingProcessBiokap";


export default function Home() {
  return (
    <div className="demo-one">
      <HeaderBiokap />
        <BuyingProcessBiokap />
      <BannerBiokap />
      <CategoryBiokap />
      <FeatureBiokap />
      <FeaturesGrid />
      {/*<BlogTwo />*/}
      {/*  <AboutBiokap />*/}

      <Footer />
    </div>
  );
}
