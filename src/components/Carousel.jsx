import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { customers } from "../constants";
import { star } from "../assets";

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
        <div key={customer.id} className="h-[450px] cursor-pointer">
          <div className="bg-white md:max-w-2xl max-w-xs relative mt-11 mr-20 rounded-tl-[80px] rounded-tr-[30px] rounded-br-[80px] rounded-bl-[30px]">
            <img
              src={customer.img}
              alt={customer.img}
              className="absolute w-20 h-20 top-[-40px] md:left-[232px] left-[120px]"
            />
            <div className="flex flex-row justify-center pt-16">
              {Array(customer.rate)
                .fill()
                .map((_, i) => (
                  <img key={i} src={star} alt={star} />
                ))}
            </div>
            <p className="max-w-sm text-center md:mx-20 mx-0 pt-8">
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
