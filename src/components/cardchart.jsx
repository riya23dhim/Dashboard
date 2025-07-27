import * as React from 'react';
import { ChartContainer } from '@mui/x-charts/ChartContainer';

import {
  LinePlot,
  MarkPlot,
  lineElementClasses,
  markElementClasses,
} from '@mui/x-charts/LineChart';


const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function BiaxialLineChart({data}) {
  return (
    <div className='p-4 bg-gray-50 h-[99%] backdrop-blur-3xl rounded-xl drop-shadow-xl '>
        <div className=' h-[99%] bg-white/80 backdrop-blur-3xl drop-shadow-xl rounded-3xl'>
    <ChartContainer
     height={200}
     width={240}
      series={[{ type: 'line', data: data}]}
      xAxis={[{ scaleType: 'point', data: xLabels, position: 'none' }]}
      yAxis={[{ position: 'none' }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          stroke: '#03C9D7',
          strokeWidth: 1,
        },
        [`& .${markElementClasses.root}`]: {
          stroke: '#03C9D7',
          r: 3, // Modify the circle radius
          fill: '#fff',
          strokeWidth: 2,
        },
      }}
      disableAxisListener
    >
      <LinePlot />
      <MarkPlot />
    </ChartContainer>
    </div>
    </div>
  );
}
