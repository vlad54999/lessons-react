import type {ProductModel} from "../models/products-model/ProductModel.ts";
import type {ProductResponseDymmy} from "../models/products-model/ProductResponseDymmy.ts";

const endpointProducts = import.meta.env.VITE_API_BASE_URL + '/products';

const loadProducts = async () : Promise<ProductModel[]> => {
    const response:ProductResponseDymmy = await fetch(endpointProducts)
        .then(value => value.json())

    return response.products;
}
export {
    loadProducts
}
console.log(loadProducts)
