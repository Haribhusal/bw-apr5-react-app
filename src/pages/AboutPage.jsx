import React from "react";
import ImageBanner from "./../components/ImageBanner";
import ProductComponent from "../components/ProductComponent";

const AboutPage = () => {
  const product = {
    id: 1,
    title: "Frooti Mango Drink(200ml) - Parle Agro (Pack of 5)",
    image:
      "https://static-01.daraz.com.np/p/b2e13071421fc33e8c7328b8f409c081.jpg_720x720.jpg_.webp",
    price: 89,
  };
  return (
    <>
      <ImageBanner />
      <ProductComponent product={product} />
    </>
  );
};

export default AboutPage;
