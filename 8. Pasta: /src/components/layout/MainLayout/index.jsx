import Navbar from '../Navbar';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-black">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-64 md:min-h-screen">
          <Navbar />
        </div>
        <main className="flex-1 p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
