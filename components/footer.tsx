export function Footer() {
  return (
    <footer className="bg-yellow-200 text-black border-t-4 border-black p-3 md:p-6 mt-8 md:mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-center md:text-left">
        <p className="text-xs md:text-sm font-semibold">
          © {new Date().getFullYear()} Dinger Tech Industries. All rights
          reserved.
        </p>
        <a
          href="mailto:hansopoku360@gmail.com"
          className="underline font-mono hover:text-red-500 transition-colors text-xs md:text-sm"
        >
          Contact: hansopoku360@gmail.com
        </a>
      </div>
    </footer>
  );
}
