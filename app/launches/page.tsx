"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getLaunches } from "../api/launches";
import { Launch } from "../types/launch";

export default function Launches() {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredLaunches, setFilteredLaunches] = useState<Launch[]>([]);

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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="bg-slate-950 w-full h-64 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-black">SpaceX Launches</h2>
        <div className="flex w-full h-1/2 justify-center items-center gap-4">
          <input
            className="w-1/2 h-12 bg-slate-900 rounded-lg text-white p-4"
            type="text"
            value={searchInput}
            onChange={handleSearchChange}
          />
          <button className="bg-purple-900 text-center w-24 h-12 rounded-lg text-white p-4 hover:">
            Search
          </button>
        </div>
      </div>
      <section
        id="launch-overview"
        className="bg-gray-900 min-h-screen w-full flex  justify-center"
      >
        <div className="w-full mx-4 max-w-6xl">
          <h1 className="text-4xl font-bold my-4">Results</h1>
          <table className="mt-8 w-full text-left">
            <thead>
              <tr className="text-slate-500 font-bold text-lg">
                <th className="text-center">Flight Number</th>
                <th>Mission Name</th>
                <th className="text-center">Year</th>
              </tr>
            </thead>
            <tbody>
              {filteredLaunches.map((launch: Launch) => (
                <tr
                  key={launch.index}
                  className="hover:border hover:border-sky-500 rounded-md transition duration-100 ease-in-out  cursor-pointer"
                >
                  <td className="py-2 text-center">
                    <Link href={`/launches/${launch.flight_number}`}>
                      <p className="block w-full h-full">
                        {launch.flight_number}
                      </p>
                    </Link>
                  </td>
                  <td className="py-2">
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
        </div>
      </section>
    </main>
  );
}
