import Image from "next/image";

const Auth = () => {
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image
            src="/images/logo.png"
            width={200}
            height={48}
            alt="Picture of the author"
          />
        </nav>
      </div>
    </div>
  );
};
export default Auth;
