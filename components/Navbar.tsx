import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Limmybout
        </Link>
        <div className="space-x-4">
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/skills" className="hover:text-gray-300">Skills</Link>
          <Link href="/projects" className="hover:text-gray-300">Projects</Link>
          <Link href="/blog" className="hover:text-gray-300">Blog</Link>
          <Link href="/hobbies" className="hover:text-gray-300">Hobbies</Link>
        </div>
      </div>
    </nav>
  );
}