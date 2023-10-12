import { Link } from 'react-router-dom';
import img from '../assets/img/hero_img.jpg';
import Highlighted from '../template/Highlighted';


export default function Hero() {
  return (
    <div className="flex lg:flex-row max-md:flex-col-reverse gap-12 items-center justify-center h-full w-max">
      <div className="flex flex-col gap-3 w-2/3">
        <h1 className="text-5xl text-white font-bold">
          Hi, I'm Marc Dimacuha 👋
        </h1>
        <p className="text-2xl text-white font-bold">
          Frontend Web Developer 💻🎉
        </p>
        <div className="flex flex-row w-full items-center justify-center gap-10">
          <Link to="/projects" className="w-1/3 rounded-full">
            <button className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 w-full rounded-full">
              My Projects 🚀
            </button>
          </Link>
          <Link
            target="_blank"
            to="https://github.com/dimacuhamarc"
            className="w-1/3 h-auto rounded-full"
          >
            <button className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 w-full rounded-full">
              Github 🖥
            </button>
          </Link>
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/mdimacuha/"
            className="w-1/3 h-auto rounded-full"
          >
            <button className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 w-full rounded-full">
              Linkedin 💼
            </button>
          </Link>
        </div>
        <div className="flex flex-row text-justify items-center justify-center gap-10 mt-5">
          <p>
            I am a former <Highlighted>Multimedia and Broadcast Designer</Highlighted> with <Highlighted>three years</Highlighted> of experience in leadership roles on various projects. I am currently pursuing <Highlighted>Full
            Stack Development Bootcamp</Highlighted> at <Highlighted>Avion School</Highlighted>. My keen passion for
            software development has been a driving force in my career. While at
            iACADEMY, I was nurtured to foster game-changing ideas through
            creativity and technology. I continually seek fresh challenges and
            opportunities to enhance my skills.
          </p>
        </div>
      </div>
      <div>
        <img
          className="rounded-full lg:h-96 w-auto max-md:h-64 object-cover shadow-2xl ring ring-indigo-400 hover:ring-indigo-100 ring-offset-4 ring-offset-slate-950"
          src={img}
          alt="Marc Dimacuha"
        />
      </div>
    </div>
  );
}
