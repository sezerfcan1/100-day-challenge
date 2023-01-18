import Disabled from "./components/switches/Disabled"
import Round from "./components/switches/Round"
import Square from "./components/switches/Square"

function App() {

  return (
    <div className=' w-[100vw] h-[100vh] flex justify-center items-center bg-slate-600 '>
      <div className="m-4">
        <Round />
      </div>
      <div className="m-4">
        <Square />
      </div>
      <div className="m-4">
        <Disabled />
      </div>
    </div>
  )
}

export default App
