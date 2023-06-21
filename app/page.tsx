import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen bg-gradient-to-br from-45% from-navy via-sky-blue to-mint">
      <nav className="fixed w-full p-12 flex md:items-center md:justify-between  bg-transparent">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <Link href="/" className="flex mx-2">
              <Image
                width={200}
                height={200}
                alt=""
                src="/images/logo/prodominicana.png"
              />
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/" className="mx-2">
              <div className="w-32 text-center text-xl rounded-full border-2 border-white px-5 py-2 hover:shadow-button duration-500">
                Log in
              </div>
            </Link>
            <Link href="/" className="mx-2">
              <div className="w-32 text-center text-xl rounded-full border-2 border-white px-5 py-2 hover:shadow-button duration-500">
                Sign in
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <video
        autoPlay
        loop
        muted
        className="w-full h-screen fixed object-cover z-[-1]"
      >
        <source src="/videos/world.mp4" type="video/mp4"></source>
      </video>
    </main>
  );
}
