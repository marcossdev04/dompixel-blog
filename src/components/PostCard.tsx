"use client";
import { Card, Image, Text, ActionIcon, Group, Center } from "@mantine/core";
import { Heart, Share } from "lucide-react";
import Link from "next/link";

interface Props {
  title: string;
  content: string;
  image: string | null;
  date: string;
  id: string;
}

export function PostCard({ content, title, image, date, id }: Props) {
  const formattedDate = new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <Card withBorder radius="md" className="relative">
      <Card.Section>
        <Link href={`/post-details/${id}`}>
          <Image
            className="w-[300px] h-[150px]"
            src={image}
            alt="postImage"
            style={{ objectFit: "cover" }}
          />
        </Link>
      </Card.Section>
      <Link href={`/post-details/${id}`}>
        <Text className="block mt-3 mb-1.5" fw={500} component="a">
          {title}
        </Text>
      </Link>
      <Link href={`/post-details/${id}`}>
        <Text fz="sm" c="dimmed" lineClamp={4}>
          {content}
        </Text>
      </Link>
      <Link href={`/post-details/${id}`}>
        <Group justify="space-between" className="mt-3">
          <Center>
            <Text fz="sm" inline>
              {formattedDate}
            </Text>
          </Center>

          <Group gap={8} mr={0}>
            <ActionIcon className="dark:bg-neutral-700 dark:hover:bg-neutral-800 bg-neutral-100 hover:bg-neutral-200">
              <Heart size={16} className="text-red-800" />
            </ActionIcon>
            <ActionIcon className="dark:bg-neutral-700  dark:hover:bg-neutral-800 bg-neutral-100 hover:bg-neutral-200">
              <Share size={16} className="text-blue-400" />
            </ActionIcon>
          </Group>
        </Group>
      </Link>
    </Card>
  );
}
