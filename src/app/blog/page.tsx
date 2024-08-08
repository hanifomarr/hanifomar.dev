import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { sortPosts } from "@/lib/utils";

const Blog = () => {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const displayposts = sortedPosts;

  return (
    <div className=" container max-w-4xl py-6 lg:py-10">
      <div className=" flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className=" flex-1 space-y-4">
          <h1 className=" inline-block font-black text-4xl lg:text-5xl">
            Project
          </h1>
          <p className=" text-xl text-muted-foreground">description</p>
        </div>
      </div>
      <hr className=" mt-8" />
      {displayposts?.length > 0 ? (
        <ul className=" flex flex-col">
          {displayposts.map((post) => {
            return (
              <li key={post.slug}>
                <PostItem {...post} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No Post</p>
      )}
    </div>
  );
};

export default Blog;
