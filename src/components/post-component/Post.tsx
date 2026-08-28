import type {FC} from "react";
import type {PostModel} from "../../models/posts-model/PostModel.ts";

type PostProps = {
    post: PostModel;
}
export const Post:FC<PostProps> = ({post: {id, title, body,}}) => {
    return (
        <div>
            <h2>{title}</h2>
            <h3>{id}</h3>
            <p>{body}</p>
        </div>
    );
};