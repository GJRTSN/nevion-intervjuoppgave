import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="bg-slate-600 w-full h-64 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-black">SpaceX</h2>
        <div className="flex w-full h-1/2 justify-center items-center">
          <Link href="/launches">
            <button className="border-2 border-purple-600 w-64 h-12 flex items-center justify-center hover:font-bold rounded-lg text-white p-4">
              LAUNCHES
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
