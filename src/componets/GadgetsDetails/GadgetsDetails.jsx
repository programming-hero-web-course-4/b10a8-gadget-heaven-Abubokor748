import { useLoaderData, useParams } from "react-router-dom";
import { FaCartPlus, FaRegHeart } from "react-icons/fa";
import { addToStoredCartList, addToStoredWishList } from "../../Utility/addToDB";

const GadgetsDetails = () => {
  const { product_id } = useParams();

  const data = useLoaderData();

  const gadget = data.find((gadget) => gadget.product_id === product_id);

  const {
    product_image,
    product_title,
    price,
    availability,
    description,
    Specification,
    rating,
  } = gadget;

  console.log(gadget);

  const handleCart = (id) => {
    addToStoredCartList(id);
  }
  
  const handleWish = (id) => {
    addToStoredWishList(id);
  }



  return (
    <div className="relative lg:my-3 bg-base-200">
      <div className="hero p-6 pb-24 bg-[#9538E2] rounded-2xl">
        <div className="hero-content text-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold">Product Details</h1>
            <p className="py-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-3xl relative transform -translate-y-20 left-[12%] w-3/4">
        <div className="hero">
          <div className="hero-content mb-3 flex flex-col lg:flex-row">
            <img
              src={product_image}
              className="rounded-lg shadow-2xl md:w-8/12 lg:w-6/12"
            />
            <div className="mx-3 my-3">
              <h1 className="text-5xl mb-2 font-bold">{product_title}</h1>
              <p className="mb-2">
                <span className="font-bold text-xl">Price: </span>${price}
              </p>
              <p className="text-green-500">{availability ? <span className="bg-base-200 p-1 px-4 rounded-3xl">In Stock</span>: ""}</p>
              <p className="mb-2">
                <span className="font-bold text-xl">Description:</span>{" "}
                {description}
              </p> 
              <h2 className="font-bold txt-xl">Specifications: </h2>
              <ul className="list-decimal list-inside ml-5">
                {Specification.map((spec, index) => (<li key={index}>{spec}</li>))}
              </ul>



              <p className="flex mb-2">
                <h1 className="font-bold text-xl">Rating: </h1>{" "}
                <img
                  src="https://i.ibb.co.com/phTtQ8q/star-glossy-yellow-colors-3d-cute-smooth-star-shape-realistic-vector-illustration-isolated-white-bac.jpg"
                  alt=""
                  className="w-5 h-4 mt-2 ml-2 bg-base-200"
                />
              </p>

              <p className="flex gap-3 mb-3">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-[#9538E2]"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-[#9538E2]"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-[#9538E2]"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-[#9538E2]"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-[#9538E2]"
                  />
                </div>
                <div>
                  <button className="bg-base-200 p-1 px-4 rounded-3xl">
                    {" "}
                    {rating}{" "}
                  </button>
                </div>
              </p>
              <div className="flex gap-3">
                <button onClick={() => handleCart(product_id)} className="btn rounded-3xl w-30 hover:bg-[#9538E2] hover:text-white text-[#9538E2] border-[#9538E2] bg-white">
                  Add To Cart <FaCartPlus></FaCartPlus>
                </button>
                <button onClick={() => handleWish(product_id)} className="btn rounded-3xl w-30 hover:bg-[#9538E2] hover:text-white text-[#9538E2] border-[#9538E2] bg-white">
                  <FaRegHeart></FaRegHeart>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetsDetails;
