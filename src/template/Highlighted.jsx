export default function Highlighted({ children }) {
  return (
    <span className="relative hover:px-1.5 hover:mx-1.5 hover:py-1.5 hover:rounded-full hover:bg-indigo-500">
      {children}
      <span className="absolute h-1 bg-indigo-500 bottom-0 left-0 transform scale-x-0 transition-transform duration-200 ease-out hover:scale-x-100"></span>
    </span>
  );
}
