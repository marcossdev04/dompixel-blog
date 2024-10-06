"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PostCard } from "./PostCard";
import { LoaderCircle } from "lucide-react";

export interface Post {
  id: string;
  title: string;
  content: string;
  image: string | null;
  date: string;
}

const fetchPosts = async () => {
  const { data } = await axios.get("/api/fakeData");
  return data;
};

export function Content() {
  const { data, error, isLoading } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return (
      <div className="flex h-[100vh] justify-center items-center">
        <LoaderCircle className="animate-spin" fontWeight={0.75} size={120} />
      </div>
    );
  }
  if (error) {
    return <div>Error loading posts</div>;
  }

  return (
    <div className="max-w-[1200px] py-5 laptop:max-w-[900px] mx-auto">
      <div className="grid grid-cols-4 gap-4 laptop:grid-cols-3 mobile:grid-cols-1">
        {data?.map((post) => (
          <PostCard
            id={post.id}
            date={post.date}
            image={post.image}
            key={post.id}
            title={post.title}
            content={post.content}
          />
        ))}
      </div>
    </div>
  );
}
