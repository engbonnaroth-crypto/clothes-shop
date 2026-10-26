import { Link, useParams } from "react-router-dom";
import useGetOneProduct from "../hooks/useGetOneProduct";

function ProductDetial() {
  const route = useParams();
  const { data, isLoading } = useGetOneProduct(route.id);

  return (
    <>
      {isLoading == true && (
        <div className="flex justify-center items-center my-10">
          <div className="flex items-center gap-1">
            <div className="border-gray-300 animate-spin h-8 w-8 rounded-full border-4 border-t-gray-400"></div>
          </div>
        </div>
      )}

      {isLoading == false && (
        <div>
          <div className="bg-gray-100 w-full py-1 font-jost">
            <div className="max-w-[90%] lg:max-w-5xl mx-auto flex items-center gap-1 text-sm">
              <Link to="/">Home</Link>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>

              <Link to="/products">Products</Link>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>

              <span className="font-semibold truncate max-w-[200px]">
                {data.title || "Original Cosmetics"}
              </span>
            </div>
          </div>

          <div className="my-10 max-w-[90%] lg:max-w-5xl mx-auto font-jost items-start">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="p-4 border border-gray-300 flex items-center justify-center h-[350px] lg:h-[450px] bg-white">
                <img
                  className="max-h-full max-w-full object-contain"
                  src={data.image}
                  alt={data.title}
                />
              </div>

              <div>
                <h3 className="text-lg uppercase text-gray-400">
                  Original Cosmetics
                </h3>
                <h1 className="text-3xl font-bold mt-1">{data.title}</h1>
                <h1 className="text-2xl font-bold text-red-500 mt-2">
                  {data.price}$
                </h1>

                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 py-8">
                  <div className="border border-gray-300 w-32 py-2 flex justify-evenly items-center">
                    <button className="px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14"
                        />
                      </svg>
                    </button>
                    <span>1</span>
                    <button className="px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </button>
                  </div>

                  <button className="bg-primary px-8 py-2 text-white">
                    Add to cart
                  </button>
                  <button className="bg-yellow-600 px-8 py-2 text-white hover:text-yellow-500">
                    Pay now
                  </button>
                </div>

                <hr className="border border-gray-300" />

                <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                  {data.description || "Loading product details..."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetial;
