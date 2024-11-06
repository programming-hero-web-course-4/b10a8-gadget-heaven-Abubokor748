import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";
import { useLoaderData, useParams } from "react-router-dom";

const Gadgets = () => {
  const data = useLoaderData();

  const { category } = useParams();

  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    if(category === "All-product" || !category){
        setGadgets(data);
    }
    else{
        const filteredByCategory = [...data].filter(
            (gadget) => gadget.category === category
          );
          setGadgets(filteredByCategory);
    }
  }, [category, data]);

  return (
    <div className="mt-5 lg:col-span-9">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {gadgets.map((gadget) => (
          <Gadget gadget={gadget} key={gadget.product_id}></Gadget>
        ))}
      </div>
    </div>
  );
};

export default Gadgets;
