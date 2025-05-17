export default function PerformanceChart() {
  // Em um projeto real, você usaria uma biblioteca como Chart.js ou Recharts
  return (
    <div className="bg-off-white border-4 border-black p-6">
      <h3 className="text-black text-2xl font-bold mb-4">WEEKLY PERFORMANCE</h3>
      
      <div className="relative h-64">
        {/* Simulação de um gráfico com CSS */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-black"></div>
        <div className="absolute left-0 bottom-0 h-full w-px bg-black"></div>
        
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polyline
            points="0,80 10,70 20,75 30,60 40,65 50,45 60,55 70,40 80,30 90,20 100,10"
            fill="none"
            stroke="black"
            strokeWidth="3"
          />
        </svg>
      </div>
    </div>
  );
}
