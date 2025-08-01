import React from 'react';

import { pieChartData } from '../../data/dummy';
import  ChartsHeader from '../../components/ChartsHeader';
import  Pie  from '../../components/Charts/Pie'

const Pies = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Pie" title="Project Cost Breakdown" />
    <div className="w-full">
      <Pie id="chart-pie" data={pieChartData} legendVisiblity height="full" />
    </div>
  </div>
);

export default Pies;