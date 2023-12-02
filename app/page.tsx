"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
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
        <Navbar />
      </>
    );
  }
  return null;
}
