import { Link } from "react-router-dom";

function Cards({ data }) {
  // const {data} = props;
  return (
    <Link
      to={`/product/${data.id}`}
      className="border border-gray-400 group rounded-lg overflow-hidden bg-white shadow-sm"
    >
      <figure className="p-4 h-[160px] lg:h-[200px] overflow-hidden flex items-center justify-center bg-white">
        <img
          className="max-h-full max-w-full object-contain group-hover:scale-110 transition-all"
          src={data.image}
          alt={data.title}
        />
      </figure>
      <div className="px-3 py-2 border-t border-gray-100">
        <h3 className="line-clamp-1 text-sm font-medium">{data.title}</h3>
        <p className="text-yellow-600 font-bold mt-1">${data.price}</p>
      </div>
    </Link>
  );
}

export default Cards;
