import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-transparent  top-0 z-50 backdrop-blur-md">
      <div className="text-2xl font-bold text-white">My Portfolio</div>
      <div className="flex space-x-6 text-[#00ff9f] text-xl font-bold ">
        <Link href="/" className="hover:bg-red-400">Home</Link>
        <Link href="/about" legacyBehavior className='hover:text-red-400'><a className="">About</a></Link>
        <Link href="/projects" legacyBehavior><a className="hover:text-[#00ff9f] transition">Projects</a></Link>
        <Link href="/contributions" legacyBehavior><a className="hover:text-[#00ff9f] transition">Contributions</a></Link>
      </div>
    </nav>
  );
}
