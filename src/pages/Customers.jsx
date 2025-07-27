import React from 'react'
import {GridComponent,ColumnDirective,ColumnsDirective,Resize,Inject,Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit,Selection,Toolbar} from '@syncfusion/ej2-react-grids';
import { contextMenuItems,customersGrid } from '../data/dummy';
import {Header} from  '../components/Indexcomp'
import { useLoaderData } from 'react-router';
const Orders = () => {
  const customersData=useLoaderData();
  console.log(customersData);
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Customers"/>
      {/* grid indode this 1gridcomp 2.columns 3 props and injecting */}
      <div>
        <GridComponent id="gridComp" dataSource={customersData.data} allowPaging allowSorting
        toolbar={["Delete"]}
        editSettings={{allowDeleting:true ,allowEditing:true}} >
          <ColumnsDirective>
          {customersGrid.map((item,index)=>(
            <ColumnDirective key={index} {...item}/>
          ))}
          </ColumnsDirective>
          <Inject services={[Page,Sort,Filter,Edit,Toolbar,Selection ]}/>
        </GridComponent>
      </div>
    </div>
  )
}

export default Orders