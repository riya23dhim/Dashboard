import React from 'react'
import {SparklineComponent,SparklineTooltip,Inject} from '@syncfusion/ej2-react-charts';

const Sparkline = ({currentColor,id,height,width,data,color,type}) => {
  return (
    <SparklineComponent 
    id={id}
    height={height}
    width={width}
    lineWidth={1}
    fill={color}
    markerSettings={{visible:['All'],size:6,fill:"white",border:{color:"#03C9D7",width:2}}}
    dataSource={data}
    xName='x'
    yName='yval'
    type="Line"
    tooltipSettings={{visible:true,  format: '${x} : ${yval}', trackLineSettings:{visible:true}}}
    
   
     
    
  >
<Inject services={[SparklineTooltip]}/>
  </SparklineComponent>
  )
}

export default Sparkline