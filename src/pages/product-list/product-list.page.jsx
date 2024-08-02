import { ProductLi, Product } from "@/entities";

const product = new Product(
  1,
  "Название",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi doloribus, amet inventore sunt doloremque fugit suscipit qui error magni ratione perferendis nostrum eaque culpa libero incidunt voluptates ad quisquam?"
);

export function ProductListPage() {
  return (
    <ul>
      <ProductLi product={product} />
    </ul>
  );
}
