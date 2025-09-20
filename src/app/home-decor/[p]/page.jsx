"use client";

import React from "react";
import ProductCategoryPage from "../../components/ProductCategoryPage";

export default function HomeDecorCategoryPage({ params }) {
  const resolvedParams = React.use(params);
  const category = resolvedParams.p;

  if (!category) return <p>Category not found</p>;

  const displayName = category
    .replace("-", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <ProductCategoryPage 
      category={category} 
      categoryName={displayName}
    />
  );
}
