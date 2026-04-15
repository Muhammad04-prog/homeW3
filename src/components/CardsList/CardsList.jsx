import ProductCard from "../CardItems/ProductCard";
import { LeftArrow, RightArrow } from "./SliderArrows";

export default function CardsList({ products }) {
  return (
    <div className="w-full shadow-lg py-10 px-6">
      <div className="flex items-center justify-between">
        <LeftArrow />

        <div className="flex gap-6 overflow-hidden">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        <RightArrow />
      </div>
    </div>
  );
}