import React from 'react';
import projects from '../assets/projects.json';
import designs from '../assets/designs.json';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';


const Card = ({ title, description, image, stack, url }) => {
  return (
    <div className="card w-full flex flex-row gap-6 max-lg:flex-col rounded-2xl bg-transparent hover:bg-slate-900 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl ga
    p-3">
      <img className="w-3/6 max-lg:w-full rounded-xl hover:brightness-125 hover:scale-105" src={image} alt={title} />
      <div className="w-full flex flex-col items-start justify-center gap-5">
        <h1 className="text-3xl font-bold underline decoration-indigo-500 underline-offset-4 decoration-4 hover:decoration-indigo-50">{title}</h1>
        <p className="text-sm">{description}</p>
        <p><span className='text-sm hover:text-indigo-500 w-full'>[{stack}]</span></p>
        <Link target='_blank' to={url}> <button className='bg-indigo-500 hover:bg-indigo-400 text-white text-sm py-1 px-2.5 font-medium rounded-full'>Live Demo</button> </Link>
      </div>
    </div>
  );
};

const WebProjectCards = () => {
  return (
    <div className='flex flex-col-reverse h-full w-full gap-6'>
      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          stack={project.technologies}
          url={project.url}
        />
      ))}
    </div>
  );
};

const DesignProjectCards = () => {
  return (
    <div className='flex flex-col h-full w-full gap-6'>
      {designs.map((designs, index) => (
        <Card
          key={index}
          title={designs.title}
          description={designs.description}
          image={designs.image}
          stack={designs.year}
          url={designs.url}
        />
      ))}
    </div>
  );
};

export { WebProjectCards, DesignProjectCards };
