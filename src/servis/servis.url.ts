import type {ICommentModel} from "../models/comment-models/comment-models.ts";

const endpointComments: string = import.meta.env.VITE_API_BASE_URL + '/comments';

const loadComments = async (): Promise<ICommentModel[]> => {
    return fetch(endpointComments)
        .then(response => response.json())
}


export {loadComments};