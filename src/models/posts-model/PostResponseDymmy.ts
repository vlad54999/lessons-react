import type {PostModel} from "./PostModel.ts";

export  interface PostResponseDymmy {
    posts: PostModel[], skip: number, limit: number, total: number
}