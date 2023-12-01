import { signOut } from "next-auth/react";

export default async function Home() {
  return (
    <>
      <h1 className="text-3xl text-green-500 font-bold">Netflix Clone</h1>
      <button className="h-10 w-full bg-white" onClick={() => signOut()}>
        Logout
      </button>
    </>
  );
}
