// Centralized Sanity queries (GROQ)
export const GetTopPostsSortByDate = `*[_type == "post"]{_id, title, description, publishedAt, author -> { name }, slug, categories[] -> { title }, mainImage}| order(publishedAt desc)`;

export const GetAllPostsSortByDate = `*[_type == "post"]{_id, title, description , publishedAt, author -> { name }, slug, categories[]->{title}, mainImage}| order(publishedAt desc)`;

export const GetPostBySlug = `*[_type == "post" && slug.current == $slug]{ _id, title, description, publishedAt, author->{name}, slug, categories[]->{title}, mainImage, body }`;
