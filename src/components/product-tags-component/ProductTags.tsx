import type {FC} from "react";

type ProductTagsProps = {
    tags: string[];
};

export const ProductTags:FC<ProductTagsProps> = ({tags}) => {
    if (!tags || tags.length === 0) return null;

    return (
        <ol>
            {
                tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))
            }
        </ol>
    );
};