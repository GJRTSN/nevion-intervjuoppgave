import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Launch } from "../types/launch";

const Breadcrumbs = ({
  launchName,
  bgColor,
}: {
  launchName: string;
  bgColor: string;
}) => {
  return (
    <section className={`${bgColor} w-full flex justify-center`}>
      <div
        id="breadcrumbs"
        className="flex py-4 ml-2 w-full max-w-6xl text-gray-400 text-sm transition duration-300 ease-in-out"
      >
        <Link href="/">
          <div className="flex items-center hover:text-purple-500 ">
            <AiOutlineArrowLeft size={12} />
            <p className="mx-1">Home</p>
          </div>
        </Link>
        <p>/</p>
        <Link href="/launches">
          <div className="flex items-center hover:text-purple-500 ">
            <p className="mx-1">Launches</p>
          </div>
        </Link>
        <p>/</p>
        <p className="mx-1 font-bold">{launchName}</p>
      </div>
    </section>
  );
};

export default Breadcrumbs;
