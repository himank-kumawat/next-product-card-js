import ProductCard from "../components/ProductCard";
import { products as productsData } from "../lib/products";

function getProducts() {
 
  return productsData;
}

export default function HomePage() {
  const products = getProducts();

  return (
    <section
      className="w-full flex items-center justify-center"
      aria-label="Product list"
    >
      <div className="max-w-sm w-full">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
