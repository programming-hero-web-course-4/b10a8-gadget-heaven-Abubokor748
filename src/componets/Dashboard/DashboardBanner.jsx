import "react-tabs/style/react-tabs.css";
import { NavLink } from "react-router-dom";

const DashboardBanner = () => {
  return (
    <div className="bg-[#9538E2]">
      <div className="hero-content text-center rounded-2xl">
        <div className="max-w-md text-white">
          <h1 className="text-5xl font-bold">Dashboard</h1>
          <p className="py-6">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-5 pb-5 border-black">
        

        <NavLink
          to="/dashboard/cart"
          role="tab"
          className="flex justify-center"
        >
          {({ isActive }) => (
            <button
              className={`btn rounded-3xl w-[192px] items-center text-center md:px-5 bg-base-200 hover:bg-[#9538E2] px-6 border-[#9538E2] hover:text-white ${
                isActive
                  ? "bg-base-200 text-black"
                  : "bg-[#a13df3] text-white border-white"
              }`}
            >
              Cart
            </button>
          )}
        </NavLink>

        <NavLink
          to="/dashboard/wishlist"
          role="tab"
          className="flex justify-center"
        >
          {({ isActive }) => (
            <button
              className={`btn rounded-3xl w-[192px] items-center text-center md:px-5 bg-base-200 hover:bg-[#9538E2] px-6 border-[#9538E2] hover:text-white ${
                isActive
                  ? "bg-base-200 text-black"
                  : "bg-[#a13df3] text-white border-white"
              }`}
            >
              Wishlist
            </button>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default DashboardBanner;
