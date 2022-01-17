export const graphql = {
    getPostsQuery: `
        query {
            post {
                id
                heading
                body
                date
                likes
                dislikes
            }
        }
    `,
};
