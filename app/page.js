import Home from "./components/Home";
import { generateStructuredData } from "./utils/seoHelpers";

export default async function HomePage() {
  const response = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  const products = await response.json();

  const structuredData = generateStructuredData(products);

  return (
    <>
      <Home products={products} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />{" "}
    </>
  );
}
