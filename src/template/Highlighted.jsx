export default function Highlighted({children}) {
  return (
    <span className="underline decoration-indigo-500 underline-offset-4 decoration-2 hover:px-1.5 hover:mx-1.5 hover:py-1.5 hover:rounded-full hover:bg-indigo-500">
      {children}
    </span>
  );
}