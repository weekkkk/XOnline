import { Product } from "../models";

export function ProductLi({ product = new Product() }) {
  const { name, tags, description } = product;
  return (
    <li className="flex">
      <figure></figure>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </li>
  );
}
