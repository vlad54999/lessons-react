import type {PostModel} from "../../models/PostModel.ts";
import type {FC} from "react";

type PostProps = {
    post: PostModel;
}

export const Post:FC<PostProps> = ({post: {title, userId, id, body}}) => {
    return(
        <div>
            <h2>{title}</h2>
            <h3>{id}</h3>
            <h3>{userId}</h3>
            <p>{body}</p>
        </div>
    );
};