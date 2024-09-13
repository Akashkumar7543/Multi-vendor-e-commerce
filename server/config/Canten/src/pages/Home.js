import React from 'react';
import Carousel from '../components/core/HomePage/Carousel';
import Featured from '../components/core/HomePage/Featured';
import Product from '../components/core/HomePage/Product';
import Banner from "../components/core/HomePage/Banner";
import Footer from "../components/common/Footer";
import Category from '../components/core/HomePage/Category';

const Home = () => {
  const banner1 = "./images/category_images/sale-banner.png";
  const banner2 = "./images/category_images/supper-sale-banner.png";
  
  return (
    <div className='mx-auto'>
      <Carousel />
      <Featured />
      <Product heading={"Last View Products"} />
      <Banner banner={banner1} />
      <Category />
      <Product heading={"Shopping Recommendation"} />
      <Product heading={"Winter Essential"} />
      <Banner banner={banner2} />
      {/* <Ourproduct /> */}
      <Footer />
    </div>
  );
}

export default Home;
