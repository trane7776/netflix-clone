import serverAuth from "@/lib/serverAuth";
import { NextApiRequest } from "next";

export default async function GET(req: NextApiRequest) {
  try {
    const { currentUser } = await serverAuth(req);
    return new Response(JSON.stringify(currentUser), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to get current user", {
      status: 400,
    });
  }
}
