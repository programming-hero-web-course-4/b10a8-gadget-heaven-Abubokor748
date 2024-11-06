import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div>
      <div className="relative">
        <Banner></Banner>
        <h2 className="text-4xl font-bold text-center">
          Explore Cutting-Edge Gadgets
        </h2>

        <div className="lg:grid lg:grid-cols-12">
          <Categories categories={categories}></Categories>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
