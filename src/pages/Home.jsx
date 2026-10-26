import Cards from "../components/Cards";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://fakestoreapi.com/products?limit=8",
        );
        setData(res.data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="font-jost">
      <div className="bg-[url('./image.png')] bg-center bg-cover lg:bg-contain bg-no-repeat bg-gray-300 flex items-center h-screen px-4 lg:px-40">
        <div>
          <p className="text-xl font-bold">New Collection</p>
          <h1 className="text-6xl lg:text-7xl font-bold mb-2">
            Clothes Best for
            <br /> Every Gender
          </h1>
          <p>Soft, Good Quanlity, and fit body.</p>
          <button className="bg-primary text-white px-8 py-2 mt-4">
            View Collection
          </button>
        </div>
      </div>

      <div className="my-10 max-w-[90%] lg:max-w-5xl mx-auto">
        <h2 className="text-center text-3xl font-bold">Best seller</h2>
        <p className="text-center mb-6">Explore our best seller products</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.map((item) => (
            <Cards key={item.id} data={item} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-transparent px-8 py-2 border border-primary hover:bg-primary hover:text-white transition-all">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
