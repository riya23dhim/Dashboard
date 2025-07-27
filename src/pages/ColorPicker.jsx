import React from 'react'
import {ColorPickerComponent} from '@syncfusion/ej2-react-inputs';
import Header from '../components/Header';
const change=(args)=>{
  document.getElementById("preview").style.backgroundColor=args.currentValue.hex;
}
const ColorPicker = () => {

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-xl'>
      <Header category="page" title="Kanban"/>
      <div className='text-center'>
        <div id='preview'/>
        <div className='flex justify-center gap-60 items-center flex-wrap'>
          <div >
            <p>Inline Palette</p>

            <ColorPickerComponent id="inline-palette" mode='Palette' modeSwitcher={false} inline showButtons={false} change={change} >
            </ColorPickerComponent>
          </div>
          <div >
            <p>Inline Paicker</p>

            <ColorPickerComponent id="inline-picker" mode='Picker' modeSwitcher={false} inline showButtons={false} change={change} >
            </ColorPickerComponent>
          </div>
        </div>
      </div>
      </div>
 
  )
}

export default ColorPicker