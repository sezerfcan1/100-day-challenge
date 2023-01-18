
function Square() {
  return (
    <div>
      <h2 className="label">Square</h2>
      <span className='switch-square'>
        <input className='hidden' id='switch-square' type="checkbox" />
        <label className='block w-[50px] h-[20px] p-[3px] border-2 border-solid border-[#7e8382]' htmlFor="switch-square">{}</label>
      </span>
    </div>
  )
}

export default Square


