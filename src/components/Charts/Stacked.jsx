import React from 'react'
import { SeriesCollectionDirective,SeriesDirective,ChartComponent,Inject,Legend,Category,StackingColumnSeries,Tooltip} from '@syncfusion/ej2-react-charts'
//data
import { stackedCustomSeries,stackedPrimaryXAxis,stackedPrimaryYAxis } from '../../data/dummy'
const Stacked = ({width,height}) => {
  const palette = [ "#6FAAB0",'#A0CFFF'];
  return (
<ChartComponent
height={height}
width={width}
id="Charts"
primaryXAxis={stackedPrimaryXAxis}
primaryYAxis={stackedPrimaryYAxis}
palettes={palette}
  chartArea={{border:{width:0}}}
  tooltip={{enable:true}}
  legendSettings={{background:"white"}}
  >
  <Inject services={[Legend,StackingColumnSeries,Tooltip,Category]}/>
  <SeriesCollectionDirective>
    {stackedCustomSeries.map((item,index)=><SeriesDirective key={index} {...item}/>)}
  </SeriesCollectionDirective>

</ChartComponent>
  )
}

export default Stacked