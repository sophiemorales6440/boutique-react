export type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
    sizes: string[];
    colors: string[];
    image: string;      
};

export const products: Product[] = [
    { id: 1, name: "T-shirt basique", price: 19.9, category: "Hauts", sizes: ["S", "M", "L"], colors: ["Blanc", "Noir"], image: "https://placehold.co/400x500?text=T-shirt" },
  { id: 2, name: "Pull en maille", price: 49.9, category: "Hauts", sizes: ["S", "M", "L", "XL"], colors: ["Beige", "Gris"], image: "https://placehold.co/400x500?text=Pull" },
  { id: 3, name: "Jean droit", price: 59.9, category: "Bas", sizes: ["36", "38", "40", "42"], colors: ["Bleu"], image: "https://placehold.co/400x500?text=Jean" },
  { id: 4, name: "Robe fleurie", price: 45, category: "Robes", sizes: ["S", "M", "L"], colors: ["Rose", "Bleu"], image: "https://placehold.co/400x500?text=Robe" },
];

