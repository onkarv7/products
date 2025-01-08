export const generateStructuredData = (products) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.title,
        image: product.image,
        description: product.description,
        brand: "ShopEasy",
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: product.price,
        },
      },
    })),
  };
};
