import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-content";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: { slug: string };
}

function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function generateStaticParams(): PostPageProps["params"][] {
  return posts.map((post) => ({ slug: post.slug }));
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug);
  if (post == null) notFound();
  return (
    <article className=" container py-6 prose dark:prose-invert max-w-3xl mx-auto">
      <h1 className=" mb-2">{post.title}</h1>
      {post.description ? (
        <p className=" text-xl text-muted-foreground mt-0">
          {post.description}
        </p>
      ) : null}
      <hr className=" my-4" />
      <MDXContent code={post.body} />
    </article>
  );
}