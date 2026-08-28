import type { FC } from "react";

type ProductImagesProps = {
    images: string[]; title: string
};

export const ProductImages: FC<ProductImagesProps> = ({ images, title }) => {
    if (!images || images.length === 0) return null;
    return (
        <div>
            {images.map((url, index) => (
                <img key={index} src={url} alt={`${title} ${index + 1}`} />
            ))}
        </div>
    );
};