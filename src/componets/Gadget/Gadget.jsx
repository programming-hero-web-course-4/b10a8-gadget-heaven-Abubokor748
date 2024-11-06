import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const { product_id, product_image, product_title, price } = gadget;

  // console.log(gadget)

  return (
    
    <div className="mt-6 mx-2">
      <div className="card bg-base-100 max-w-80 shadow-2xl">
        <figure className="pt-3">
          <img
            src={product_image}
            alt="404 Error, Gadget Picture not found"
            className="rounded-3xl w-60 p-3 h-[166px]"
          />
        </figure>
        <div className="card-body items-center px-3 text-center">
          <h2 className="card-title">{product_title}</h2>
          <p>${price}</p>
          <div className="card-actions">
            <Link to={`/gadgets/${product_id}`}>
              <button className="btn rounded-3xl hover:bg-[#9538E2] border-[#9538E2] hover:text-white bg-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
