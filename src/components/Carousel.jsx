import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { customers } from "../constants";

const Carousel = () => {
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    variableWidth: true,
  };
  return (
    <Slider {...settings}>
      {customers.map((customer) => (
        <div key={customer.id} className="h-[450px]" style={{ width: 600 }}>
          <div className="bg-white max-w-md relative mt-11 rounded-tl-[80px] rounded-tr-[30px] rounded-br-[80px] rounded-bl-[30px]">
            <img
              src={customer.img}
              alt={customer.img}
              className="absolute w-20 h-20 top-[-40px] left-[184px] z-[9999]"
            />
            <p className="max-w-xs text-center mx-auto pt-32">
              {customer.text}
            </p>
            <h3 className="font-david font-bold text-center mx-auto pt-10">
              {customer.name}
            </h3>
            <p className="text-center mx-auto pb-10">{customer.job}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
