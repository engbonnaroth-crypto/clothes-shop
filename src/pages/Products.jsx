import Cards from "../components/Cards";
import useGetAllProduct from "../hooks/useGetAllProduct";

function Products() {
  const { data, isLoading } = useGetAllProduct();
  return (
    <div className="my-10 max-w-[90%] lg:max-w-5xl mx-auto">
      <h1 className="text-center text-3xl uppercase">All Products</h1>

      {isLoading == true && (
        <div className="flex justify-center items-center my-10">
          <div className="flex items-center gap-1">
            <div className="border-gray-300 animate-spin h-8 w-8 rounded-full border-4 border-t-gray-400"></div>
          </div>
        </div>
      )}

      {isLoading == false && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 ">
          {data?.map((item) => (
            <Cards key={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
