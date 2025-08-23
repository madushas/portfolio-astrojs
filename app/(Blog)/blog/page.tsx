"use client";

import PostThumbnail from "@/components/Blog/BlogThumbnail";
import FeaturedBlog from "@/components/Blog/FeaturedBlog";
import Fallback from "@/components/Blog/PostFallBack";
import { urlForImage } from "@/sanity/lib/image";
import { Post, SanityPost } from "@/sanity/schema";
import { format } from "date-fns";
import { useSanityData } from "@/lib/hooks/useSanityData";
import { GetAllPostsSortByDate } from "@/sanity/queries";

const BlogPage = () => {
  const { data: postsData, error, isLoading } = useSanityData<SanityPost[]>(
    GetAllPostsSortByDate,
  );

  const blogs: Post[] = (postsData ?? []).map((post) => ({
    ...post,
    publishedAt: format(new Date(post.publishedAt), "MMMM dd, yyyy"),
    imageURL: urlForImage(post.mainImage),
    author: post.author?.name ?? "",
    slug: post.slug,
    categories: post.categories,
  }));

  if (error) console.error("Failed to fetch blog posts:", error);

  return (
    <main className="container mx-auto px-6 py-2">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-8">
        <h1 className="py-8 text-3xl font-normal sm:text-6xl sm:leading-tight md:py-8 lg:py-16">
          Blog Posts
        </h1>
        <FeaturedBlog blogs={blogs.slice(0, 3)} loading={isLoading} />
        <h2 className="mt-20 mb-4 text-base font-medium tracking-wider uppercase">
          Recent Posts
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-16 sm:grid-cols-2 xl:grid-cols-3">
          {blogs.length > 3 ? (
            blogs
              .slice(3)
              .map((blog, i) => (
                <PostThumbnail
                  type="normal"
                  key={blog.slug.current}
                  post={blog}
                  className="aspect-video rounded-lg"
                />
              ))
          ) : (
            <div className="bg-card/70 flex grow animate-pulse items-center justify-center rounded-lg px-4 py-16">
              <Fallback isLoading={isLoading} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
