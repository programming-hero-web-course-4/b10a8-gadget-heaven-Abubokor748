import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="lg:col-span-3 flex justify-center mt-5">
      <div
        role="tablist"
        className="tabs tabs-boxed justify-items-center flex flex-col gap-y-8 mt-5 bg-white "
      >
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category}`}
            role="tab"
            key={category.category}
            className="flex justify-center"
          >
            {({ isActive }) => (
              <button
                className={`btn rounded-3xl w-[192px] items-center text-center md:px-5 bg-base-200 hover:bg-[#9538E2] px-6 border-[#9538E2] hover:text-white ${
                  isActive
                    ? "bg-[#a54bee] text-white"
                    : "bg-base-200 text-black"
                }`}
              >
                {category.name}
              </button>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
