import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const Statistics = () => {
  const data = useLoaderData();

  const [gadgets, setGadgets] = useState([]);
  
    useEffect(() => {
        if (data) {
          const allData = data.map(product => ({
            category: product.category,
            price: product.price,
        }));
          setGadgets(allData);
        }
      }, [data]);


      console.log(gadgets)

  return (
    <div>
      <div className="hero p-6 bg-[#9538E2] rounded-2xl">
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
      <h2 className="font-bold text-2xl mt-5 text-center">Statistics</h2>
      <div>
      {gadgets.length > 0 ? (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart width={600} height={400} data={gadgets}>
            <Bar dataKey="price" fill="#8884d8" />
            <XAxis dataKey="category"></XAxis>
            <YAxis dataKey="price"></YAxis>
            <Tooltip></Tooltip>
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p>Loading data...</p>
      )}
      </div>
    </div>
  );
};

export default Statistics;
