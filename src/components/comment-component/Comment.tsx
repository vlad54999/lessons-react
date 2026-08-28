import type {FC} from "react";
import type {ICommentModel} from "../../models/comment-models/comment-models.ts";

type CommentType = {
    comment: ICommentModel;
}
export const Comment:FC<CommentType> = ({comment: {id, postId, name, email, body}}) => {
    return (
        <div>
            <h2>{name}</h2>
            <h3>{postId}           {id}</h3>
            <h3>{email}</h3>
            <p>{body}</p>
        </div>
    );
};