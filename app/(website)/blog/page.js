import Archive from "./bibliothek";

import { getPaginatedPosts } from "@/lib/sanity/client";

const POSTS_PER_PAGE = 6;

export default async function ArchivePage() {
  const posts = await getPaginatedPosts(POSTS_PER_PAGE);
  return <Archive posts={posts} />;
}

// export const revalidate = 60;
