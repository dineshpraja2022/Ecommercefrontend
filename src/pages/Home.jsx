import Banner from "../components/Banner";
import BestSeller from "../components/BestSeller";
import Category from "../components/Category";
import BrandBondingSection from "../components/BrandBondingSection";
import WhyChooseUs from "../components/WhyChooseUs";
import CustomerReviews from "../components/CustomerReviews";
import Sachin from "../components/Sachin";
import Carousel from "../components/Carousel";
const Home = () => {
  return (
    <div className="mt-0 bg-gradient-to-r from-blue-100 via-white to-blue-50">
      <Banner />
      <Sachin/>
    
      <BrandBondingSection/>
      <Category />
      <BestSeller />
      <WhyChooseUs />
      <CustomerReviews />
    <Carousel/>
    </div>
  );
};
export default Home;
