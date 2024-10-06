"use client";
import { Image, Text } from "@mantine/core";
import { Post } from "./Content";

interface Props {
  data: Post | undefined;
}

export function PostDetailsComponent({ data }: Props) {
  const imageSrc = data?.image ? data.image : "";
  const dateFormatted = data?.date !== undefined ? data.date : "";
  const formattedDate = new Date(dateFormatted).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return (
    <div className="max-w-[1200px] py-5 laptop:max-w-[900px] mx-auto">
      <div className="flex flex-col">
        <div className="w-full h-[50vh]">
          <Image
            className="w-full h-full"
            src={imageSrc}
            alt="postImage"
            style={{ objectFit: "cover" }}
          />
        </div>
        <Text
          className="block mt-3 mb-1.5 text-2xl"
          fw={600}
          component="animate"
        >
          {data?.title}
        </Text>
        <Text fz="h3">{data?.content}</Text>
        <Text fz="h5" className="opacity-80">
          {formattedDate}
        </Text>
      </div>
    </div>
  );
}
