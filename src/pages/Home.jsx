import Baner from "../components/Baner";
import Customers from "../components/Customers";
import ExpectsChef from "../components/ExpectsChef";
import SpecialDishes from "../components/SpecialDishes";

const Home = () => {
  return (
    <div>
      <Baner />
      <SpecialDishes />
      <ExpectsChef />
      <Customers />
    </div>
  );
};

export default Home;
