"use client";
import { useForm, isNotEmpty } from "@mantine/form";
import { Button, FileInput, Group, TextInput } from "@mantine/core";
import { useRouter } from "next/navigation";

export function FormComponent() {
  const router = useRouter();
  function handlePushToHome() {
    router.push("/");
  }
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      title: "",
      content: "",
      imageUrl: "",
    },

    validate: {
      title: isNotEmpty("Title is required"),
      content: isNotEmpty("Content is required"),
      imageUrl: isNotEmpty("Image URL is required"),
    },
  });

  const handleSubmit = async (data: typeof form.values) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("content", data.content);

      const fileInput = document.querySelector(
        'input[type="file"]',
      ) as HTMLInputElement;
      if (fileInput?.files?.length) {
        formData.append("image", fileInput.files[0]);
      }

      const response = await fetch("/api/fakeData", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      const newPost = await response.json();
      console.log("Post created:", newPost);
      form.reset();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-[1200px] py-5 laptop:max-w-[900px] mx-auto">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Título"
          placeholder="Post Title"
          withAsterisk
          key={form.key("title")}
          {...form.getInputProps("title")}
        />
        <TextInput
          label="Conteudo"
          placeholder="Post Content"
          withAsterisk
          mt="md"
          key={form.key("content")}
          {...form.getInputProps("content")}
        />
        <FileInput
          mt="md"
          withAsterisk
          key={form.key("imageUrl")}
          {...form.getInputProps("imageUrl")}
          accept="image/png,image/jpeg"
          label="Imagem"
          placeholder="Upload files"
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit" onClick={handlePushToHome}>
            Publicar
          </Button>
        </Group>
      </form>
    </div>
  );
}
