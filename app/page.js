import Home from "./components/Home";
import { generateStructuredData } from "./utils/seoHelpers";

export default async function HomePage() {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Invalid response format. Expected JSON.");
    }

    const products = await response.json();

    const structuredData = generateStructuredData(products);

    return (
      <>
        <Home products={products} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </>
    );
  } catch (error) {
    console.error("Error fetching products:", error.message);
    return <p>Error loading products. Please try again later.</p>;
  }
}

