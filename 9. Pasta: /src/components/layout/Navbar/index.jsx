import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  
  const isActive = (path) => {
    return router.pathname.startsWith(path);
  };
  
  return (
    <nav className="bg-black border-b-4 md:border-b-0 md:border-r-4 border-pastelGreen p-4 h-full">
      <div className="flex flex-col space-y-4">
        <Link href="/dashboard">
          <a className={`text-4xl font-black ${isActive('/dashboard') ? 'text-pastelGreen' : 'text-off-white'}`}>
            DASHBOARD
          </a>
        </Link>
        <Link href="/trades">
          <a className={`text-4xl font-black ${isActive('/trades') ? 'text-pastelGreen' : 'text-off-white'}`}>
            TRADES
          </a>
        </Link>
        <Link href="/reports">
          <a className={`text-4xl font-black ${isActive('/reports') ? 'text-pastelGreen' : 'text-off-white'}`}>
            REPORTS
          </a>
        </Link>
        <Link href="/settings">
          <a className={`text-4xl font-black ${isActive('/settings') ? 'text-pastelGreen' : 'text-off-white'}`}>
            SETTINGS
          </a>
        </Link>
      </div>
    </nav>
  );
}
