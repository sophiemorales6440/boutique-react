import type { Product } from "../data/products";

type ProductCardProps = {
    product: Product;
};  


function ProductCard({ product }: ProductCardProps) {
    return (
        <article className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}</p>
        </article>
    );
}

export default ProductCard;