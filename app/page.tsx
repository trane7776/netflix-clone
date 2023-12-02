"use client";
import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function Home() {
  const session = useSession();
  useEffect(() => {
    if (session?.status === "unauthenticated") {
      return redirect("/auth");
    }
  }, [session?.status]);
  if (session?.status === "authenticated") {
    return (
      <>
        <h1 className="text-3xl text-green-500 font-bold">Netflix Clone</h1>
        <button onClick={() => signOut()} className="h-10 w-full bg-white">
          Logout
        </button>
      </>
    );
  }
  return null;
}
