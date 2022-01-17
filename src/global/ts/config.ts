export const baseGQLUrl =
    process.env.NODE_ENV?.toLowerCase() === 'development'
        ? 'https://localhost:5001/graphql'
        : '';
