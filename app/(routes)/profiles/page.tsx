"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const Profiles = () => {
  const { data: user, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      return router.push("/auth");
    }
  }, [status, router]);
  if (status === "authenticated") {
    return (
      <div>
        <p className="text-white text-2xl">Profiles</p>
      </div>
    );
  }
  return null;
};

export default Profiles;
