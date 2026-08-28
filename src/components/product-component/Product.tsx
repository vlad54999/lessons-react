import type {FC} from "react";
import type {ProductModel} from "../../models/products-model/ProductModel.ts";
import {ProductTags} from "../product-tags-component/ProductTags.tsx";
import {ProductImages} from "../product-Images-component/ProductImages.tsx";
import {ProductReviews} from "../product-reviews-component/ProductReviews.tsx";

type ProductProps = {
    product: ProductModel;
}



export const Product:FC<ProductProps> = ({ product }) => {

    const {
        id,
        title,
        description,
        category,
        price,
        discountPercentage,
        rating,
        stock,
        tags,
        brand,
        sku,
        weight,
        dimensions,
        warrantyInformation,
        shippingInformation,
        availabilityStatus,
        reviews,
        returnPolicy,
        minimumOrderQuantity,
        meta,
        images,
        thumbnail
    } = product;

    return (
        <div>
            <h2>{brand} - {title}</h2>
            <h3>ID: {id} | SKU: {sku}</h3>
            <section>Теги:<ProductTags tags={tags}/></section>
            <ProductImages images={images} title={title}/>
            <ol>
                <li>Опис: {description}</li>
                <li>Категорія: {category}</li>
                <li>Ціна: {price}</li>
                <li>Знижка: {discountPercentage}</li>
                <li>Рейтинг: {rating}</li>
                <li>Наявність: {stock}</li>
                <li>Вага: {weight}</li>
                <li>Розміри: {dimensions.width} x {dimensions.height} x {dimensions.depth}</li>
                <li>Гарантія: {warrantyInformation}</li>
                <li>Доставка: {shippingInformation}</li>
                <li>Статус доступу: {availabilityStatus}</li>
                <li>Мін. замовлення: {minimumOrderQuantity} шт.</li>
                <li>Повернення: {returnPolicy}</li>
                <ul>
                    <li>{meta.createdAt}</li>
                    <li>{meta.updatedAt}</li>
                    <li>{meta.barcode}</li>
                    <li>{meta.qrCode}</li>
                </ul>
                <li>{thumbnail}</li>
            </ol>

            <ProductReviews reviews={reviews}/>
        </div>
    );
};