function Link({ children, href = "#", to = "", className = "" }) {
  const destination = to || href;

  return (
    <a
      href={destination}
      className={`inline-flex items-center gap-2 text-slate-50 bg-amber-500 rounded-md p-2 text-sm m-1 hover:bg-amber-400 transition ${className} hover:animate-bounce`}
    >
      {children}
    </a>
  );
}

export default Link;
