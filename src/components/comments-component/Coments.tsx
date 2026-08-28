import {useEffect, useState} from "react";
import type {ICommentModel} from "../../models/comment-models/comment-models.ts";
import {loadComments} from "../../servis/servis.url.ts";
import {Comment} from "../comment-component/Comment.tsx";

export const Comments = () => {

    const [comments, setComments] = useState<ICommentModel[]>([]);
    useEffect(() => {
        loadComments().then(value => setComments(value));
    },[]);

    return (
        <div>
            {
                comments.map((comment) => (<Comment key={comment.id} comment={comment} />))
            }
        </div>
    );
};