import React from 'react'
// ✅ in main.tsx or index.tsx — JS import style



import {ScheduleComponent,Day,Week,WorkWeek,Month,Agenda,Inject,Resize,DragAndDrop} from '@syncfusion/ej2-react-schedule';

import { scheduleData } from '../data/dummy';
import {Header} from  '../components/Indexcomp'
import { dataSourceModified } from '@syncfusion/ej2-react-grids';
const localcolor=localStorage.getItem("color");
document.documentElement.style.setProperty('--grid-search', localcolor);
const Calender = () => {
  // we will change this to them basesd pastel colors  using local storeage refer driyanjali chatgpt 
  const colorPalette = ['#D0E8FF', '#A0CFFF', '#74B9FF', '#4D9FFF'];
  const onEventRendered = (args) => {
   
    const index = new Date(args.data.StartTime).getDay(); // Get day of the week (0-6)
    const color = colorPalette[index % colorPalette.length]; // Pick a color based on the day
    args.element.style.setProperty('background-color', color, 'important');
    args.element.style.setProperty('color', '#fff', 'important');
  };
  
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-xl'>
      <Header category="page" title="Calender"/>
      <ScheduleComponent height="650px"

eventRendered={onEventRendered}
  // showQuickInfo={true}                // optional
  eventSettings={{dataSource:scheduleData}}
  selectedDate={new Date(2021,0,10)} // placeholder
>
       
        <Inject services={[Day,Week,WorkWeek,Month,Agenda,Resize,DragAndDrop]}/>
      </ScheduleComponent>
    </div>
  )
}
export default Calender