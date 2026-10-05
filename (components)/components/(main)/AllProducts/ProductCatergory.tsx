import React from "react";

interface Product {
  title: string;
  description: string;
}

interface ProductCategoryCardProps {
  category: string;
  products: Product[];
}

const ProductCategoryCard = ({
  category,
  products,
}: ProductCategoryCardProps) => {
  return (
    <div className="border border-background-tertiory">
      <div className="px-10 py-7">
        <p className="mb-7 text-accent">
          {category}
        </p>
        <div className="flex flex-col gap-6">
          {products.map((product) => (
            <div key={product.title}>
              <p className="text-accent-light">
                {product.title}
              </p>

              <p className="mx-2 my-1 text-accent-light/70">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryCard;