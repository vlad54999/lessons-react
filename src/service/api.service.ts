import type {PostModel} from "../models/posts-model/PostModel.ts";
import type {PostResponseDymmy} from "../models/posts-model/PostResponseDymmy.ts";

const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts';

const loadPosts = async () : Promise<PostModel[]> => {
    const response:PostResponseDymmy = await fetch(endpointPosts)
        .then(value => value.json())

    return response.posts;
}
export {
    loadPosts
}
console.log(loadPosts)
