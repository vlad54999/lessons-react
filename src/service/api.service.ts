import type {PostModel} from "../models/PostModel.ts";

const urlPosts = 'https://jsonplaceholder.typicode.com/posts';

const loadPosts = async ():Promise<PostModel> => {
    return await fetch(urlPosts)
        .then(res => res.json())
}

export {
    loadPosts
}