import React from 'react'
import Header from '../components/Header'
import {KanbanComponent ,ColumnsDirective,ColumnDirective, Inject} from '@syncfusion/ej2-react-kanban'
import { kanbanData,kanbanGrid } from '../data/dummy'

import { DragAndDrop } from '@syncfusion/ej2-react-schedule'

const Kanban = () => {
  const currentMode="Dark";
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-xl'>
      <Header category="page" title="Kanban"/>
      <KanbanComponent id="kanban"  dataSource={kanbanData} keyField="Status"
      cardSettings={{contentField:"Summary",headerField:"Id"} }  background={currentMode === 'Dark' ? '#33373E' : '#fff'} >
        <ColumnsDirective> 
        {kanbanGrid.map((item,index)=><ColumnDirective key={index} {...item}/>)}</ColumnsDirective>
      </KanbanComponent>
    
      </div>
  )
}

export default Kanban