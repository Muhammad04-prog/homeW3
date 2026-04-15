import logo from "../../assets/images/Group 10 (1).png";

export default function ProductCard({ product }) {
  return (
    <div className="w-65 bg-white rounded-xl shadow-md p-4 flex flex-col items-center">
      <div className="w-full h-40 flex items-center justify-center mb-3">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain h-full"
        />
      </div>
      <div className="flex gap-1 mb-2">
        <span className="w-6 h-0.5 bg-gray-300"></span>
        <span className="w-6 h-0.5 bg-blue-500"></span>
        <span className="w-6 h-0.5 bg-gray-300"></span>
        <span className="w-6 h-0.5 bg-gray-300"></span>
      </div>
      <p className="text-xs text-gray-500 text-center mb-2 leading-tight">
        {product.title} <br />
        {product.desc}
      </p>
      <p className="text-xl font-bold text-blue-600 mb-4">
        {product.price}
      </p>
      <div className="flex items-center gap-2 mb-3">
        <button className="w-8 h-8 border flex items-center justify-center"> − </button>
        <span className="w-8 h-8 border flex items-center justify-center text-gray-500">1</span>
        <button className="w-8 h-8 border flex items-center justify-center"> + </button>
        <button className="w-10 bg-blue-600 text-white rounded-lg py-2 flex items-center justify-center hover:bg-blue-700 transition">
          <img src={logo} alt="cart" />
        </button>
      </div>
    </div>
  );
}