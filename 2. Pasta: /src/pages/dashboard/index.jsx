import Head from 'next/head';
import MainLayout from '../../components/layout/MainLayout';
import MetricCard from '../../components/dashboard/MetricCard';
import PerformanceChart from '../../components/dashboard/PerformanceChart';

export default function Dashboard() {
  return (
    <MainLayout>
      <Head>
        <title>Dashboard | Trade</title>
      </Head>
      
      <h1 className="text-off-white text-6xl font-black mb-8">TRADING</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <MetricCard title="TOTAL BALANCE" value="$23,450" />
        <MetricCard title="SUCCESS RATE" value="78%" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PerformanceChart />
        
        <div className="bg-pastelGreen border-4 border-black p-6">
          {/* Área para conteúdo adicional */}
        </div>
      </div>
    </MainLayout>
  );
}
