"use client";

import Link from "next/link";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { Plus } from "lucide-react";
import { ColorSchemesSwitcher } from "./color-schemes-switcher";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

export function Header() {
  return (
    <div className="flex justify-between items-center mobile:gap-3 px-20 mobile:px-5 py-3 bg-zinc-200 dark:bg-neutral-700">
      <Link href={"/"}>
        <Image alt="Logo" className="w-[200px] desktop:w-[300px]" src={Logo} />
      </Link>
      <div className="flex items-center gap-3">
        <Link href={"/add-post"}>
          <Plus
            size={30}
            className="dark:text-white p-1 text-zinc-600 dark:bg-neutral-500 bg-neutral-100 rounded-full"
          />
        </Link>
        <ColorSchemesSwitcher />
        <SignedOut>
          <SignInButton>
            <button className="bg-sky-500 flex justify-center text-sm items-center text-white px-3 py-0.5 ">
              Entrar
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
