import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { earningData,SparklineAreaData,pieChartData, trendPair2 } from '../data/dummy';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import BiaxialLineChart from './cardchart';
const cardData = [
  {
    id: 'aov',
    label: 'Avg Order Value',
    value: '$78.42',
    delta: '+6%',
    icon: '💳',
    color: 'bg-emerald-500/10 text-emerald-600',
  },
  {
    id: 'profit',
    label: 'Gross Profit',
    value: '$12.3K',
    delta: '+3.1%',
    icon: '💰',
    color: 'bg-indigo-500/10 text-indigo-600',
  },
  {
    id: 'conversion',
    label: 'Conversion Rate',
    value: '2.9%',
    delta: '-0.4%',
    icon: '📈',
    color: 'bg-orange-500/10 text-orange-600',
  },
  {
    id: 'tickets',
    label: 'Open Tickets',
    value: '58',
    delta: '+12',
    icon: '🎫',
    color: 'bg-rose-500/10 text-rose-600',
  },
];

export default function DashboardExtraCards() {
  // one‑time AOS init
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <div className="m-5 mt-5 flex  flex-wrap justify-center gap-10 ">
    {trendPair2.map((item, i) => (
      <div
        key={item.title}
        className="flex items-start  justify-between
                   bg-white drop-shadow-md backdrop-blur-lg
                   dark:bg-secondary-dark-bg rounded-2xl
                   p-6 md:h-70 md:w-108 drop-shadow-md hover:drop-shadow-2xl hover:scale-[1.01] hover:z-[200]"
        data-aos="fade-up"
        data-aos-delay={i * 40}
      >
        {/* LEFT: icon + numbers */}
        <div className="flex items-start flex-col gap-3">
          <button
            type="button"
            style={{ color: item.iconColor, backgroundColor: item.iconBg }}
            className="text-xl p-4 rounded-full hover:drop-shadow-xl"
          >
            {item.icon}
          </button>
  
          <p className="flex items-end gap-2">
            <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              {item.amount}
            </span>
            <span className={`text-sm ${item.pcColor}`}>{item.percentage}</span>
          </p>
  
          <p className="text-gray-400 text-sm">{item.title}</p>
        </div >
  
        {/* RIGHT: mini line chart */}
        
        <BiaxialLineChart
        className="w-[60%] h-[100%]"
          data={item.trend}
          stroke={item.percentage.startsWith('-') ? '#DC2626' : '#16A34A'}
        />
   
      </div>
    ))}
  </div>
  );
}
