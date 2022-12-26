import { dishes } from "../constants";

const DishCard = () => {
  return (
    <>
      {dishes.map((dish) => (
        <div
          key={dish.slug}
          className="relative flex flex-col justify-end px-5 py-12 mt-24 w-[265px] h-[309px] border-2 border-white rounded-tl-[50px] rounded-tr-xl rounded-br-[50px] rounded-bl-xl hover:bg-white cursor-pointer">
          <div className="absolute bg-[#101A24] rounded-full top-[-60px] right-6 z-10">
            <p className="text-white font-bold px-3 py-[13px] ">
              ${dish.price}
            </p>
          </div>
          <img src={dish.img} alt={dish.img} className="absolute top-[-30%]" />
          <h3 className="text-center pb-5 font-david font-bold text-xl">
            {dish.title}
          </h3>
          <p className="text-center">{dish.descr}</p>
        </div>
      ))}
    </>
  );
};

export default DishCard;
