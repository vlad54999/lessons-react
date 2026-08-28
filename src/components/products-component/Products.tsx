import {useState, useEffect} from "react";
import type {ProductModel} from "../../models/products-model/ProductModel.ts";
import {loadProducts} from "../../service/api.service.ts";
import {Product} from "../product-component/Product.tsx";

export const Products = () => {
    const [products, setPosts] = useState<ProductModel[]>([]);

    useEffect(() => {
        async function fetchPosts() {
            const allPost = await loadProducts();
            setPosts(allPost);
        }

        fetchPosts();
    }, [])

    return (
        <div>
            {
                products.map((product: ProductModel) => (<Product product={product} key={product.id}/>))
            }
        </div>
    );
};