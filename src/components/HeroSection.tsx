// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import ImageOne from "../assets/One.jpg";
// import ImageTwo from "../assets/Two.jpg";
// import ImageThree from "../assets/Three.jpg";

// const discountSlides = [
//   {
//     id: 1,
//     title: "Summer Sale",
//     description: "Get up to 50% off on all Cycling items!",
//     image: ImageOne,
//   },
//   {
//     id: 2,
//     title: "Winter Clearance",
//     description: "Up to 65% off on Gym Items!",
//     image: ImageTwo,
//   },
//   {
//     id: 3,
//     title: "New Arrivals",
//     description: "Check out the latest trends in Sports.",
//     image: ImageThree,
//   },
// ];

// const HeroSection: React.FC = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <Slider {...settings}>
//         {discountSlides.map((slide) => (
//           <div key={slide.id} className="relative h-96">
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
//               <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
//               <p className="text-lg text-center">{slide.description}</p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default HeroSection;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageOne from "../assets/One.jpg";
import ImageTwo from "../assets/Two.jpg";
import ImageThree from "../assets/Three.jpg";

const discountSlides = [
  {
    id: 1,
    title: "Summer Sale",
    description: "Get up to 50% off on all Cycling items!",
    image: ImageOne,
  },
  {
    id: 2,
    title: "Winter Clearance",
    description: "Up to 65% off on Gym Items!",
    image: ImageTwo,
  },
  {
    id: 3,
    title: "New Arrivals",
    description: "Check out the latest trends in Sports.",
    image: ImageThree,
  },
];

const HeroSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto p-4">
      <Slider {...settings}>
        {discountSlides.map((slide) => (
          <div key={slide.id} className="relative h-96">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
              <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
              <p className="text-lg text-center">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
