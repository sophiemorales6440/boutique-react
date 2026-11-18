import type { Product } from "../data/products";

type ProductCardProps = {
    product: Product;
};  


function ProductCard({ product }: ProductCardProps) {
    return (
        <article className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price.toFixed(2)} €</p>
        </article>
    );
}

export default ProductCard;