import prismadb from "@/lib/prismadb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
const handler = async (req: Request) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      throw new Error("Not logged in");
    }
    const movieCount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * movieCount);
    const randomMovies = await prismadb.movide.findMany({
      take: 1,
      skip: randomIndex,
    });
  } catch (error) {}
};
export { handler as GET };
