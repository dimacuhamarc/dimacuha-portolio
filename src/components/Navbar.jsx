import { AiFillHome } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { IoIosCodeWorking } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import Highlighted from "../template/Highlighted";

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="bg-slate-600 top-4 inset-x-0 mx-auto fixed rounded-xl w-8/12 ">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className=" max-md:hidden text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-100 sm:text-3xl">
              Hi, I'm Marc Dimacuha 👋
              <p className="mt-1.5 text-sm text-gray-10 rounded-2xl">
                <Highlighted>Frontend Web Developer 💻🎉</Highlighted>
              </p>
            </h1>
          </div>

          <div className="mt-4 flex flex-col max-md:flex-row gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <Link to="/">
              <button
                className={`inline-flex items-center justify-center gap-1.5 rounded-lg ${location.pathname === '/' ? 'bg-slate-400' : 'bg-indigo-500' } px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-400 focus:outline-none focus:ring`}
                type="button">
                <AiFillHome/> Home
              </button>
            </Link>
            <Link to="/projects">
            <button
              className={`inline-flex items-center justify-center gap-1.5 rounded-lg ${location.pathname === '/projects' ? 'bg-slate-400' : 'bg-indigo-500' } px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-400 focus:outline-none focus:ring`}
              type="button">
              <IoIosCodeWorking size={20}/> Projects
            </button>
            </Link>
            {/* <Link to="/career">
            <button
              className={`inline-flex items-center justify-center gap-1.5 rounded-lg ${location.pathname === '/career' ? 'bg-slate-400' : 'bg-indigo-500' } px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-400 focus:outline-none focus:ring`}
              type="button">
              <MdWork/> Career
            </button>
            </Link> */}
          </div>
        </div>
      </div>
    </header>
  );
}
