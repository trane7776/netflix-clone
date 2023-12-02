"use client";
import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: user, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      return router.push("/auth");
    }
  }, [status, router]);
  if (status === "authenticated") {
    return (
      <>
        <h1 className="text-3xl text-green-500 font-bold">Netflix Clone</h1>
        <p className="text-white">Logged in as: {user?.user?.email}</p>
        <button onClick={() => signOut()} className="h-10 w-full bg-white">
          Logout
        </button>
      </>
    );
  }
  return null;
}
