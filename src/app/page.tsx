import { Content } from "@/components/Content";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="bg-zinc-50 dark:bg-neutral-900">
      <Header />
      <Content />
    </div>
  );
}
