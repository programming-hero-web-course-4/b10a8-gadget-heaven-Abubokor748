import BannerImg from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div>
      {/* banner text starts */}

      <div className="hero p-6 pb-24 bg-[#9538E2] rounded-b-2xl">
        <div className="hero-content text-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="btn bg-white rounded-3xl text-[#9538E2]">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* banner text starts */}

      {/* banner Pic starts */}

      <div>
        <img
          src={BannerImg}
          alt="404 Error"
          className="relative transform -translate-y-20 left-[20%]  w-3/5 rounded-2xl shadow-2xl border p-3"
        />
      </div>

      {/* banner Pic ends */}
    </div>
  );
};

export default Banner;
