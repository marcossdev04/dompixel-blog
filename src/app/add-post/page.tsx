"use client";
import { Header } from "@/components/Header";
import { FormComponent } from "@/components/ui/Form";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

export default function AddPost() {
  return (
    <div>
      <SignedIn>
        <Header />
        <FormComponent />
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}
