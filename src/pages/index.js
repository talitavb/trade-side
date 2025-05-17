import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <Head>
        <title>Trade Site Redesign</title>
      </Head>
      
      <h1 className="text-white text-6xl font-bold mb-8">TRADE</h1>
      
      <div className="flex flex-col space-y-4">
        <Link href="/login">
          <a className="bg-green-300 text-black px-8 py-3 text-xl font-bold">Login</a>
        </Link>
      </div>
    </div>
  );
}
