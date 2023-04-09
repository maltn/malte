import Link from "next/link";

const Navbar = () => (
  <div className="w-full h-16 text-center flex items-center justify-center">
    <a>
      <Link
        href="https://www.github.com/maltn/malte"
        target="_blank"
        className="text-4xl italic"
      >
        Malte
      </Link>
    </a>
  </div>
);

export default Navbar;
