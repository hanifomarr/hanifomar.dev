import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import QueryPagination from "@/components/query-pagination";
import { sortPosts } from "@/lib/utils";

interface BlogProps {
  searchParams: {
    page?: string;
  };
}

const POST_PER_PAGE = 5;

const Blog = ({ searchParams }: BlogProps) => {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const currentPage = Number(searchParams.page) || 1;
  const totalPage = Math.ceil(sortedPosts.length / POST_PER_PAGE);
  const displayposts = sortedPosts.slice(
    POST_PER_PAGE * (currentPage - 1),
    POST_PER_PAGE * currentPage
  );

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
        <p className=" text-center  text-lg text-muted-foreground p-10">
          No Posts Available
        </p>
      )}
      <QueryPagination totalPage={totalPage} className="mt-4" />
    </div>
  );
};

export default Blog;
