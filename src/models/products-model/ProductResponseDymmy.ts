import type {ProductModel} from "./ProductModel.ts";

export  interface ProductResponseDymmy {
    products: ProductModel[], skip: number, limit: number, total: number
}