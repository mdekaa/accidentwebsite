"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/utils";
import { SignIn, useSignIn } from "@clerk/clerk-react";
import { SignInButton } from "@clerk/nextjs";
import { TimerContainer } from "./Timer/Timer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { isAuthenticated, isLoading } = useSession();
  const signIn = useSignIn();
  const targetDate = new Date("2024-08-03T10:00:00");

  return (
    <main className="">
      <section className="mt-24 flex flex-col items-center gap-8 pb-24">
        <Image
          src="/hero.jpeg"
          width="300"
          height="300"
          alt="hero banner"
          className="rounded-xl"
        />
        {!isLoading &&
          (isAuthenticated ? (
            <Button asChild>
              <Link href="/showdown">Vote</Link>
            </Button>
          ) : (
            <SignInButton>
              <Button>Sign In to Vote</Button>
            </SignInButton>
          ))}
        <TimerContainer targetDate={targetDate}/>

        <p className="text-center text-gray-700 dark:text-gray-300 text-xl max-w-lg mx-auto">
          Jab media karti hai, toh hum kyu na kare?
        </p>

        <p>
          <b className="text-red-500 text-xl">This is a virtual opinion poll to know about the mood of institute.
            <br />
            It doesn't resemble or influence actual elections in any direct or indirect way. Any connection are purely coincidental.</b>
        </p>
      </section>
    </main>
  );
}
