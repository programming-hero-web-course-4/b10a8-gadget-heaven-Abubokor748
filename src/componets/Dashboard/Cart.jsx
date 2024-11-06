import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCartList } from "../../Utility/addToDB";

const Cart = () => {
  const data = useLoaderData();

  const [cartGadget, setCartGadget] = useState([]);
  const [isDescending, setIsDescending] = useState([]);
  const [isTotalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const storedCartList = getStoredCartList();
    const storedCartListInt = storedCartList.map((id) => parseInt(id));

    console.log(data, cartGadget, storedCartList, storedCartListInt);

    const cartGadgetList = data.filter((gadget) =>
      storedCartListInt.includes(parseInt(gadget.product_id))
    );

    setCartGadget(cartGadgetList);

  }, [data]);


  const handleSort = () => {
    setIsDescending(!isDescending);

    const sortedCartGadget = [...cartGadget];
    sortedCartGadget.sort((a, b) => {
      if(isDescending) {
        return b.price - a.price;
      }

    });
    setCartGadget(sortedCartGadget);

    const newTotalCost = sortedCartGadget.reduce((number, product) => number + product.price, 0)

  };


  return (
    <div>
      <div className="mt-6 max-w-7xl mx-auto">
        <div className="flex flex-col justify-between mx-5">
          <div className="text-center">
            <h2 className="font-bold text-3xl">Cart</h2>
          </div>
          <div className="flex flex-row justify-center md:justify-around my-3 gap-12">
            <h2 className="font-bold">Total Cost:</h2>
            <div className="flex gap-5">
              <button onClick={handleSort} className="btn rounded-3xl w-30 hover:bg-[#9538E2] hover:text-white text-[#9538E2] border-[#9538E2] bg-white">
                Sort By Price
              </button>
              <button className="btn rounded-3xl w-30 hover:bg-[#9538E2] hover:text-white text-[#9538E2] border-[#9538E2] bg-white">
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 max-w-7xl mx-auto">
        {cartGadget.length > 0 ? (
          cartGadget.map(
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
                      className="max-w-sm rounded-lg w-1/5 shadow-2xl"
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
          <p className="text-center text-lg">No items in cart</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
