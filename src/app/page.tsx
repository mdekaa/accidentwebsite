"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/utils";
import { SignIn, useSignIn } from "@clerk/clerk-react";
import { SignInButton } from "@clerk/nextjs";
import { api } from "../../convex/_generated/api";
import { TimerContainer } from "./Timer/Timer";
import Image from "next/image";
import Link from "next/link";
import { db } from "@/util/firebase";
import { doc, setDoc, getDoc, onSnapshot } from "firebase/firestore";
import { useQuery } from "convex/react";
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import CandiCard from "@/components/candicard";

interface Data {
  gs: {
    hs: number;
    os: number;
  };
  gst: {
    hs: number;
    os: number;
  };
  gsc: {
    hs: number;
    os: number;
  };
  gss: {
    hs: number;
    os: number;
  };
}

function listenToData(id: string, callback: any) {
  const docRef = doc(db, "elections", id.toString()); // Ensure ID is a string
  return onSnapshot(
    docRef,
    (docSnap) => {
      if (docSnap.exists()) {
        callback(docSnap.data());
      } else {
        console.log("No such document!");
        callback(null);
      }
    },
    (error) => {
      console.error("Error getting document: ", error);
      callback(null);
    }
  );
}

export default function Home() {
  const { isAuthenticated, isLoading } = useSession();
  const signIn = useSignIn();
  const targetDate = new Date("2024-08-03T10:00:00");
  const [data, setData] = useState<Data | null>(null);
  useEffect(() => {
    const unsubscribe = listenToData("1", setData);
    return () => unsubscribe();
  }, []);

  return (
    <main className="">
      <section className="mt-24 flex flex-col items-center gap-8 pb-24">
        {/* <Image
          src="/hero.jpeg"
          width="300"
          height="300"
          alt="hero banner"
          className="rounded-xl"
        /> */}
        <div className="w-full lg:w-3/5">
          <CandiCard imagesrc="/tt2.jpg" />
        </div>
        <Button asChild>
          <Link href="/showdown">See Opinion Polls Result</Link>
        </Button>
        {/* <TimerContainer targetDate={targetDate}/> */}
        <div className="flex items-center bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
          <span className="w-2.5 h-2.5 bg-white rounded-full mr-2 animate-blink"></span>
          <span>Live</span>
        </div>
        {data ? (
          <div className="lg:w-1/2 w-full space-y-2">
            <span className="flex items-center justify-center text-2xl lg:text-4xl mb-4">
              General Secretary
            </span>
            <CandiCard imagesrc="/gs.jpg" />
            <span className="flex justify-between">
              <div>Ashutosh K.</div>
              <div>Shashank D.</div>
            </span>
            <span className="flex justify-between">
              <div>{data?.gs?.os} votes</div>
              <div>{data?.gs?.hs} votes</div>
            </span>
            <Progress
              value={(data?.gs?.os / (data?.gs?.hs + data?.gs?.os)) * 100}
              className="bg-amber-400 w-full mx-1"
            />
            <br />
            <br />
            <span className="flex items-center justify-center text-2xl lg:text-4xl mb-4">
              General Secretary Technical
            </span>
            <CandiCard imagesrc="/gst.jpg" />
            <span className="flex justify-between">
              <div>Abhishek R.</div>
              <div>Partha P.</div>
            </span>
            <span className="flex justify-between">
              <div>{data?.gst?.os} votes</div>
              <div>{data?.gst?.hs} votes</div>
            </span>
            <Progress
              value={(data?.gst?.os / (data?.gst?.hs + data?.gst?.os)) * 100}
              className="bg-amber-400 w-full mx-1"
            />

            <br />
            <br />
            <span className="flex items-center justify-center text-2xl lg:text-4xl mb-4">
              General Secretary Cultural
            </span>
            <CandiCard imagesrc="/gsc.jpg" />

            <span className="flex justify-between">
              <div>Lakshay P.</div>
              <div>Aryadeep G.</div>
            </span>

            <span className="flex justify-between">
              <div>{data?.gsc?.os} votes</div>
              <div>{data?.gsc?.hs} votes</div>
            </span>
            <Progress
              value={(data?.gsc?.os / (data?.gsc?.hs + data?.gsc?.os)) * 100}
              className="bg-amber-400 w-full mx-1"
            />

            <br />
            <br />
            <span className="flex items-center justify-center text-2xl lg:text-4xl mb-4">
              General Secretary Sports
            </span>
            <CandiCard imagesrc="/gss.jpg" />
            <span className="flex justify-between">
              <div>Md. Rebji A.</div>
              <div>M. Dhana N.</div>
            </span>
            <span className="flex justify-between">
              <div>{data?.gss?.os} votes</div>
              <div>{data?.gss?.hs} votes</div>
            </span>
            <Progress
              value={(data?.gss?.os / (data?.gss?.hs + data?.gss?.os)) * 100}
              className="bg-amber-400 w-full mx-1"
            />
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </section>
    </main>
  );
}
