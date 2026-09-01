function Link({
  children,
  href = "#",
  to = "",
  className = "",
  onClick = null,
}) {
  const destination = to || href;

  return (
    <a
      href={destination}
      onClick={onClick}
      className={`inline-flex items-center gap-2 text-slate-50 bg-amber-500 rounded-md px-3 py-2 text-xs sm:text-sm m-1 hover:bg-amber-400 transition hover:animate-bounce whitespace-nowrap ${className}`}
    >
      {children}
    </a>
  );
}

export default Link;
