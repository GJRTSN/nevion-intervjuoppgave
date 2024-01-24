"use client";
import Breadcrumbs from "../components/Breadcrumbs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getLaunches } from "../api/launches";
import { Launch } from "../types/launch";
import { FaSearch } from "react-icons/fa";

export default function Launches() {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredLaunches, setFilteredLaunches] = useState<Launch[]>([]);
  const [displayLimit, setDisplayLimit] = useState(15);

  useEffect(() => {
    async function fetchLaunches() {
      const fetchedLaunches = await getLaunches();
      setLaunches(fetchedLaunches);
      setFilteredLaunches(fetchedLaunches);
    }

    fetchLaunches();
  }, []);

  useEffect(() => {
    const filtered = launches.filter(
      (launch) =>
        launch.mission_name.toLowerCase().indexOf(searchInput.toLowerCase()) !==
        -1
    );
    setFilteredLaunches(filtered);
  }, [searchInput, launches]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleShowMore = () => {
    setDisplayLimit((prevLimit) => prevLimit + 15);
  };

  const handleShowAll = () => {
    setDisplayLimit(launches.length);
  };

  return (
    <main className="flex h-full min-h-screen bg-gray-900 flex-col ">
      <section
        id="section-block"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
        className="bg-cover bg-center w-full h-full"
      >
        <div className="bg-gradient-to-t from-gray-900 to-slate-950/80  w-full h-64 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-black">SpaceX Launches</h2>
          <div className="flex w-full  h-1/3 justify-center items-center gap-4">
            <FaSearch />
            <input
              className="w-1/2 max-w-6xl h-12 bg-slate-800 rounded-lg text-white p-4 placeholder:italic"
              placeholder="Search by mission name"
              type="text"
              value={searchInput}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </section>
      <Breadcrumbs launchName="" bgColor="bg-gray-900" />
      <section
        id="launch-overview"
        className="bg-gray-900 h-full w-full flex justify-center"
      >
        <div className="w-full mx-4  max-w-6xl">
          <h1 className="text-4xl font-bold">Results</h1>
          {searchInput ? (
            ""
          ) : (
            <p className="text-slate-400 italic">
              (showing {displayLimit} of {launches?.length})
            </p>
          )}

          <table className="mt-4 w-full text-left">
            <thead>
              <tr className="text-slate-500 font-bold text-lg">
                <th className="text-left">Flight Number</th>
                <th>Mission Name</th>
                <th className="text-center">Year</th>
              </tr>
            </thead>
            <tbody className="min-h-64">
              {filteredLaunches.slice(0, displayLimit).map((launch: Launch) => (
                <tr
                  key={launch.index}
                  className="hover:shadow-outline-sky-500 hover:text-gray-400 rounded-md transition-all duration-100 ease-in-out  cursor-pointer"
                >
                  <td className="py-2 text-left">
                    <Link href={`/launches/${launch.flight_number}`}>
                      <p className="block w-full h-full ml-4">
                        {launch.flight_number}
                      </p>
                    </Link>
                  </td>
                  <td className="py-2 w-2/3 hover:font-bold ">
                    <Link href={`/launches/${launch.flight_number}`}>
                      <p className="block w-full h-full">
                        {launch.mission_name}
                      </p>
                    </Link>
                  </td>
                  <td className="py-2 text-center ">
                    <Link href={`/launches/${launch.flight_number}`}>
                      <p className="block w-full h-full">
                        {launch.launch_year}
                      </p>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center items-center h-24 ">
            {displayLimit < filteredLaunches.length ? (
              <>
                <button
                  onClick={handleShowMore}
                  className="bg-blue-500/50 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded m-2 transition-all duration-200 ease-in-out"
                >
                  Show more
                </button>
                <button
                  onClick={handleShowAll}
                  className="bg-pink-500/50 hover:bg-pink-700 text-white font-bold py-2 px-2 rounded m-2 transition-all duration-200 ease-in-out"
                >
                  Show all
                </button>
              </>
            ) : (
              <p className="italic text-slate-600">
                No more launches available
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
