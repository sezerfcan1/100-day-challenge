import React from 'react'

function Round() {
  return (
    <div>
      <h2 className="label">Round</h2>
      <span className='switch'>
        <input className='hidden' id='switch-round' type="checkbox" />
        <label className='block w-[50px] h-[20px] p-[3px] rounded-2xl border-2 border-solid border-[#7e8382]' htmlFor="switch-round">{}</label>
      </span>
    </div>
  )
}

export default Round