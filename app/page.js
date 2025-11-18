import ProductCard from "../components/ProductCard";

async function getProducts() {
  // In a real app, I call an external API here.
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function HomePage() {
  const products = await getProducts();

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
