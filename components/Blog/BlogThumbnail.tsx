import { cn } from "@/lib/utils";
import { Post } from "@/sanity/schema";
import Link from "next/link";
import Image from "next/image";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface PostThumbnailProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  post: Post;
  type: "featured" | "highlighted" | "normal";
}

const AuthorAvatar = ({ name }: { name: string }) => (
  <div className="flex gap-2">
    <div className="text-sm">By {name}</div>
  </div>
);

export default function PostThumbnail({
  post,
  type,
  ...props
}: Readonly<PostThumbnailProps>) {
  return (
    <div {...props}>
      <div className={cn("rounded-lg")}>
        <Link className="block shrink" href={`/blog/${post.slug.current}`}>
          <div className="flex h-full items-center overflow-hidden rounded-lg">
            <Image
              alt="Post thumbnail"
              src={post.imageURL}
              width={800}
              height={450}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={cn(
                "aspect-video w-full rounded-lg object-cover transition-transform duration-600 ease-in hover:scale-[1.02]",
                type === "featured" && "lg:aspect-square",
              )}
              priority={type === "featured"}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        </Link>
        <div className="px-6 py-2">
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {post.categories.map((category, i) => (
              <span
                key={category.title}
                className="border-primary rounded-full border px-2.5 py-1.5 text-xs font-medium tracking-wide whitespace-nowrap uppercase"
              >
                {category.title}
              </span>
            ))}
          </div>
          <h2
            className={cn(
              "hover:text-primary mt-3 text-2xl leading-snug font-bold hover:underline",
              type === "featured" && "lg:text-5xl",
            )}
          >
            <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
          </h2>
          <p
            className={cn(
              "text-card-foreground mt-6",
              type === "highlighted" && "mt-2 text-sm",
            )}
          >
            {post.description}
          </p>
        </div>
        <div className="flex justify-between px-6 py-2">
          <AuthorAvatar name={post.author} />
          <div className="flex items-center text-sm">
            <span className="font-mono whitespace-nowrap">
              {post.publishedAt}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
