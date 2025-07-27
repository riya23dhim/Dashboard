import React, { useState } from 'react'
import {GridComponent,ColumnDirective,ColumnsDirective,Resize,Inject,Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit} from '@syncfusion/ej2-react-grids';
import {contextMenuItems,ordersGrid } from '../data/dummy';
import {Header} from  '../components/Indexcomp'
import { api } from '../api';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router';

const Orders = () => {
//no need to set state as we are using loaders
  const ordersData=useLoaderData()

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      
      <Header category="Page" title="Orders"/>
      {/* grid indode this 1gridcomp 2.columns 3 props and injecting */}
      <div>
        <GridComponent id="gridComp" dataSource={ordersData.data} allowPaging allowSorting >
          <ColumnsDirective>
          {ordersGrid.map((item,index)=>(
            <ColumnDirective key={index} {...item}/>
          ))}
          </ColumnsDirective>
          <Inject services={[Page,Sort,Resize,ContextMenu,Filter,ExcelExport,PdfExport,Edit ]}/>
        </GridComponent>
      </div>
    </div>
  )
}

export default Orders