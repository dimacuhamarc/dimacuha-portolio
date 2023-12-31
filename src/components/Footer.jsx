import { SiSemanticuireact, SiTailwindcss } from 'react-icons/si';

export const Footer = () => {
  return (
    <footer className="h-fit">
      <div className="flex flex-col py-24 items-center justify-center gap-1 text-indigo-50">
        <p className="text-sm">Marc Dimacuha © 2023</p>
        <p className="text-xs">All rights reserved.</p>
        <p className="text-sm flex flex-row gap-2 items-center justify-center">Built with <span className='flex flex-row gap-1 items-center justify-center text-cyan-600'><SiSemanticuireact/> ReactJS</span> and <span className='flex flex-row gap-1 items-center justify-center text-cyan-300'><SiTailwindcss/> TailwindCSS</span></p>
      </div>
    </footer>
  );
}