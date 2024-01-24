import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const buttonStyle =
    "w-64 h-auto border-2 text-white px-6 py-4 transition-all duration-100  text-xl hover:font-bold";
  return (
    <main
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1467685790346-20bfe73a81f0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      }}
      className="bg-cover bg-center bg-opacity-50"
    >
      <div className="bg-slate-950 bg-opacity-80 flex min-h-screen items-center justify-center">
        <div className=" w-96 h-96 flex flex-col justify-center items-center gap-4">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/SpaceX_logo_black.svg/512px-SpaceX_logo_black.svg.png"
            width={250}
            height={200}
            alt="SpaceX Logo"
            className="invert mb-8"
          />
          <Link href="https://www.spacex.com/">
            <button
              className={`${buttonStyle} border-purple-700/50 rounded-lg hover:shadow-uniform2 hover:shadow-purple-500/40 hover:text-shadow-lg`}
            >
              OFFICIAL SITE
            </button>
          </Link>
          <Link href="/launches">
            <button
              className={`${buttonStyle} border-pink-600/50 rounded-lg hover:shadow-uniform2 hover:shadow-pink-500/40 hover:text-shadow-lg`}
            >
              LAUNCHES
            </button>
          </Link>
          <Link href="https://www.youtube.com/spacex/">
            <button
              className={`${buttonStyle} border-red-700/50 rounded-lg hover:shadow-uniform2 hover:shadow-red-500/40 hover:text-shadow-lg`}
            >
              YOUTUBE
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
