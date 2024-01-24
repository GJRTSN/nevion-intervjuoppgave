import { getLaunch } from "@/app/api/launches";
import ImageSlideshow from "@/app/components/ImageSlideshow";
import LaunchResult from "@/app/components/LaunchResult";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import Image from "next/image";

export const revalidate = 3600;

export default async function selectedLaunch({
  params,
}: {
  params: { id: number };
}) {
  const launchData = await getLaunch(params.id);

  const date = new Date(launchData.launch_date_utc);
  const formattedDate = `${date.getUTCDate().toString().padStart(2, "0")}.${(
    date.getUTCMonth() + 1
  )
    .toString()
    .padStart(2, "0")}.${date.getUTCFullYear()}`;

  return (
    <>
      <main className="flex min-h-screen flex-col">
        <section
          id="section-block"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1467685790346-20bfe73a81f0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          }}
          className="bg-cover bg-center"
        >
          <div
            id="section-container"
            className="bg-gradient-to-t from-slate-950 to-transparent w-full h-64 flex justify-center"
          >
            <div
              id="section-content"
              className="text-white text-center py-10 w-full p-4 max-w-6xl flex justify-between items-center"
            >
              <div className="flex flex-col justify-center items-start text-left">
                <h1 className="text-5xl font-bold mb-4 text-shadow-lg shadow-gray-300/30">
                  {launchData.mission_name}
                </h1>
                <LaunchResult isSuccess={launchData.launch_success} />
              </div>
              <Image
                src={launchData.links.mission_patch_small}
                alt="Mission Patch Image"
                width={144}
                height={144}
              />
            </div>
          </div>
        </section>
        <Breadcrumbs
          launchName={launchData.mission_name}
          bgColor="bg-slate-950"
        />
        <section id="section-block" className="bg-slate-950 w-full pb-24">
          <div id="section-container" className="w-full flex justify-center">
            <div
              id="section-content"
              className="text-white w-full p-4 flex flex-col justify-center rounded-lg"
            >
              <article
                id="launch-details"
                className="bg-slate-950 min-h-screen w-full flex justify-center"
              >
                <div className="w-full max-w-6xl space-y-6">
                  <h3 className="text-2xl font-bold mb-4">Information</h3>

                  <div className="bg-gray-900 border border-gray-600 p-4 rounded-lg flex flex-wrap">
                    <div className="flex-1 min-w-1/2">
                      <p>
                        <span className="font-bold">Launch Date:</span>{" "}
                        {formattedDate}
                      </p>
                      <p>
                        <span className="font-bold">Launch site:</span>{" "}
                        {launchData.launch_site.site_name}
                      </p>
                      <p>
                        <span className="font-bold">Site name:</span>{" "}
                        {launchData.launch_site.site_name_long}
                      </p>
                    </div>
                    <div className="flex-1 min-w-1/2">
                      <p>
                        <span className="font-bold">Flight number:</span>{" "}
                        {launchData.flight_number}
                      </p>
                      <p>
                        <span className="font-bold">Rocket name:</span>{" "}
                        {launchData.rocket.rocket_name}
                      </p>
                      <p>
                        <span className="font-bold">Rocket type:</span>{" "}
                        {launchData.rocket.rocket_type}
                      </p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold my-4">Details</h3>
                  <div className="border border-slate-900 shadow-uniform shadow-slate-700 p-4 rounded-lg flex flex-wrap">
                    {launchData.details ? (
                      launchData.details
                    ) : (
                      <p className="italic text-slate-400">
                        No details available for this launch
                      </p>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Media</h3>
                  <div className="rounded-lg flex flex-col justify-center mx-auto gap-8 w-3/4 overflow-hidden">
                    {launchData.links.youtube_id ? (
                      <iframe
                        src={
                          "https://www.youtube.com/embed/" +
                          launchData.links.youtube_id
                        }
                        title="video_title"
                        className="w-full aspect-video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <p className="text-center italic mt-8 text-slate-500">
                        No video available
                      </p>
                    )}

                    {launchData.links.flickr_images.length > 0 ? (
                      <ImageSlideshow
                        launchImages={launchData.links.flickr_images}
                      />
                    ) : (
                      <p className="text-center italic mt-8 text-slate-500">
                        No images available
                      </p>
                    )}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
