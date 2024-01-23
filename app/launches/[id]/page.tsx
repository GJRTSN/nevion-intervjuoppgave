import { getLaunch } from "@/app/api/launches";
import { Launch } from "@/app/types/launch";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const revalidate = 3600;

export default async function selectedLaunch({
  params,
}: {
  params: { id: number };
}) {
  const launchData = await getLaunch(params.id);

  return (
    <>
      <main className="flex min-h-screen flex-col">
        <div className="bg-slate-600 w-full h-64 flex flex-col justify-center items-center">
          <h2 className="text-4xl">{launchData.mission_name}</h2>
        </div>
        <div
          id="breadcrumbs"
          className="mt-16 flex  mb-4  text-gray-400 transition duration-300 ease-in-out"
        >
          <Link href="/">
            <div className="flex items-center hover:text-rose-500 ">
              <AiOutlineArrowLeft className="" size={12} />
              <p className="mx-1">Home</p>
            </div>
          </Link>
          <p>/</p>
          <Link href="/launches">
            <div className="flex items-center hover:text-rose-500 ">
              <p className="mx-1">Launches</p>
            </div>
          </Link>
          <p>/</p>
          <p className="mx-1 font-bold">{launchData.mission_name}</p>
        </div>
        <section
          id="launch-details"
          className="bg-gray-800 min-h-screen w-full flex  justify-center"
        >
          <div className="w-full mx-4 max-w-6xl">
            <h3 className="text-4xl font-bold mb-4">Launch Details</h3>
            <p>Flight number: {launchData.flight_number}</p>
            <p>Rocket name: {launchData.rocket.rocket_name}</p>
            <p>Launch site: {launchData.launch_site.site_name}</p>
          </div>
        </section>
      </main>
    </>
  );
}
