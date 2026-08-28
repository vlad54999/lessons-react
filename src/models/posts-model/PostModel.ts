export interface PostModel {
    "id": number,
    "title": string,
    "body": string
    "tags": string[],
    "reactions": {
        "likes": number,
        "dislikes": number,
    },
    "views": number,
    "userId": number
}

    // "total": 251,
    // "skip": 0,
    // "limit": 30