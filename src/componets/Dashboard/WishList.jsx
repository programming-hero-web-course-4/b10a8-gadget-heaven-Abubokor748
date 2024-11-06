import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishList } from "../../Utility/addToDB";

const WishList = () => {
  const data = useLoaderData();

  const [wishGadget, setWishGadget] = useState([]);

  useEffect(() => {
    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));

    console.log(data, wishGadget, storedWishList, storedWishListInt);

    const wishGadgetList = data.filter((gadget) =>
      storedWishListInt.includes(parseInt(gadget.product_id))
    );

    setWishGadget(wishGadgetList);
  }, [data]);

  console.log(data);

  return (
    <div>
      <h2 className="font-bold text-2xl mt-5">Wishlist</h2>
      <div className="mt-6 max-w-7xl mx-auto">
        {wishGadget.length > 0 ? (
          wishGadget.map(
            ({
              product_id,
              product_image,
              product_title,
              description,
              price,
            }) => (
              <div key={product_id} className="mb-8">
                <div className="hero bg-base-200">
                  <div className="hero-content flex-row">
                    <img
                      src={product_image}
                      alt={product_title}
                      className="max-w-sm w-1/5 rounded-lg shadow-2xl"
                    />
                    <div>
                      <h1 className="text-5xl font-bold">{product_title}</h1>
                      <p className="py-6">{description}</p>
                      <p className="font-bold">Price: ${price}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          )
        ) : (
          <p className="text-center text-lg">No items in Wishlist</p>
        )}
      </div>
    </div>
  );
};

export default WishList;
