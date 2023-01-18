import React from 'react'
import './Switches.css';


function Disabled() {
  return (
    <div>
      <h2 className="label">Disabled</h2>
      <span className='switch'>
        <input disabled className='hidden' id='switch-disabled' type="checkbox" />
        <label className='block w-[50px] h-[20px] p-[3px] rounded-2xl border-2 border-solid border-[#7e8382]' htmlFor="switch-disabled">{}</label>
      </span>
    </div>
  )
}

export default Disabled