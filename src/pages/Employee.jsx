import React from 'react'
import {GridComponent,ColumnDirective,ColumnsDirective,Inject,Page,Toolbar,Search} from '@syncfusion/ej2-react-grids';
import {contextMenuItems,employeesGrid } from '../data/dummy';
import {Header} from  '../components/Indexcomp'
import { useLoaderData } from 'react-router';
const Employee = () => {
const  employeesData=useLoaderData()
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Employee"/>
      {/* grid indode this 1gridcomp 2.columns 3 props and injecting */}
      <div>
        <GridComponent id="gridComp" dataSource={employeesData.data} allowPaging allowSorting 
        toolbar={['Search']}
        width='auto'>
          <ColumnsDirective>
          {employeesGrid.map((item,index)=>(
            <ColumnDirective key={index} {...item}/>
          ))}
          </ColumnsDirective>
          <Inject services={[Page,Search,Toolbar ]}/>
        </GridComponent>
      </div>
    </div>
  )
}

export default Employee