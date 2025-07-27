import React from 'react'
import {HtmlEditor ,Image,Inject ,Link,QuickToolbar, RichTextEditorComponent,Toolbar} from '@syncfusion/ej2-react-richtexteditor'
import Header from '../components/Header'
import { EditorData } from '../data/dummy'
const Editor = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-xl'>
      <Header category="page" title="Kanban"/>
      <RichTextEditorComponent>
        <Inject services={[HtmlEditor ,Image,Link,QuickToolbar, Toolbar]}/>
        </RichTextEditorComponent></div>
  )
}

export default Editor