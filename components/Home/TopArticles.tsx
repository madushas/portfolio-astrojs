"use client";

import { HTMLProps } from "react";
import { format } from "date-fns";
import { useSanityData } from "@/lib/hooks/useSanityData";
import { GetTopPostsSortByDate } from "@/sanity/queries";
import { urlForImage } from "@/sanity/lib/image";
import { Post, SanityPost } from "@/sanity/schema";
import FeaturedBlog from "../Blog/FeaturedBlog";
import SectionContainer from "../shared/SectionContainer";

const TOP_ARTICLES_COUNT = 3;

export default function TopArticles(
  props: Readonly<HTMLProps<HTMLDivElement>>,
) {
  const { data: postsData, error, isLoading } = useSanityData<SanityPost[]>(
    GetTopPostsSortByDate,
  );

  const posts: Post[] = (postsData ?? []).slice(0, TOP_ARTICLES_COUNT).map(
    (post) => ({
      ...post,
      publishedAt: format(new Date(post.publishedAt), "MMMM dd, yyyy"),
      imageURL: urlForImage(post.mainImage),
      author: post.author?.name ?? "",
      slug: post.slug,
      categories: post.categories,
    }),
  );

  if (error) {
    console.error("Failed to fetch posts:", error);
  }

  return (
    <SectionContainer
      id="toparticles"
      title="Top Articles"
      subtitle="Check out some of my top articles"
    >
      <div className="container px-4">
        <FeaturedBlog blogs={posts} loading={isLoading} />
      </div>
    </SectionContainer>
  );
}
