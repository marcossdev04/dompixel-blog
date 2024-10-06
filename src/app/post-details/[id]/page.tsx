"use client";
import { Post } from "@/components/Content";
import { Header } from "@/components/Header";
import { PostDetailsComponent } from "@/components/PostDetails";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  params: { id: string };
}
export default function PostDetails({ params }: Props) {
  const [mounted, setMounted] = useState(false);
  const fetchPostDetails = async () => {
    const { data } = await axios.get(`/api/fakeData/${params.id}`);
    return data;
  };
  const { data } = useQuery<Post>({
    queryKey: ["postDetails"],
    queryFn: fetchPostDetails,
  });
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted ? (
    <div>
      <SignedIn>
        <Header />
        <PostDetailsComponent data={data} />
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  ) : (
    <div className="flex h-[100vh] justify-center items-center">
      <LoaderCircle className="animate-spin" fontWeight={0.75} size={120} />
    </div>
  );
}
