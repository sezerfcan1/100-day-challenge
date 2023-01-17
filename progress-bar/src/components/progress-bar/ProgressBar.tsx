import { useState } from "react"

export default function ProgressBar() {


    const [progressStatus, setProgressStatus] = useState(Array<boolean>(10).fill(false))


    const next = () => {
        let lastTrue = progressStatus.indexOf(false)
        if (lastTrue != 10) {
            progressStatus[lastTrue] = true
            setProgressStatus(Array.from(progressStatus))
        }
    }

    const prev = () => {
        let firtFalse = progressStatus.indexOf(false)
        if (firtFalse != 0) {
            progressStatus[firtFalse - 1] = false
        }
        if(firtFalse == -1){
            progressStatus[9] = false
        }
        setProgressStatus(Array.from(progressStatus)) 
    }


    return (
        <div className="flex flex-col">
            <div className="flex min-w-[340px] sm:w-80 xl:w-[20vw] h-3 bg-slate-50 rounded-lg border-2 border-violet-400 z-20">

                <div className={`flex sm:w-8 h-3 bg-gray-700 z-10 transition-all duration-500 rounded-l-lg ${progressStatus[0] ? 'w-[10%]' : 'w-[0%]'}`}></div>
                <div className={`flex sm:w-8 h-3 bg-gray-700 transition-all duration-500 z-10 ${progressStatus[1] ? 'w-[10%]' : 'w-[0%]'}`}></div>
                <div className={`flex sm:w-8 h-3 bg-gray-700 transition-all duration-500 z-10 ${progressStatus[2] ? 'w-[10%]' : 'w-[0%]'}`}></div>
                <div className={`flex sm:w-8 h-3 bg-gray-700 transition-all duration-500 z-10 ${progressStatus[3] ? 'w-[10%]' : 'w-[0%]'}`}></div>
                <div className={`flex sm:w-8 h-3 bg-gray-700 transition-all duration-500 z-10 ${progressStatus[4] ? 'w-[10%]' : 'w-[0%]'}`}></div>
                <div className={`flex sm:w-8 h-3 bg-gray-700 transition-all duration-500 z-10 ${progressStatus[5] ? 'w-[10%]' : 'w-[0%]'}`}></div>
                <div className={`flex sm:w-8 h-3 bg-gray-700 transition-all duration-500 z-10 ${progressStatus[6] ? 'w-[10%]' : 'w-[0%]'}`}></div>
                <div className={`flex sm:w-8 h-3 bg-gray-700 transition-all duration-500 z-10 ${progressStatus[7] ? 'w-[10%]' : 'w-[0%]'}`}></div>
                <div className={`flex sm:w-8 h-3 bg-gray-700 transition-all duration-500 z-10 ${progressStatus[8] ? 'w-[10%]' : 'w-[0%]'}`}></div>
                <div className={`flex sm:w-8 h-3 bg-gray-700 transition-all duration-500 z-10 rounded-r-lg ${progressStatus[9] ? 'w-[10%]' : 'w-[0%]'}`}></div>

            </div>


            <div className="flex justify-around relative top-10">
                <button onClick={prev} className="px-5 border-2 border-violet-400 rounded-lg bg-gray-700 text-gray-200 text-xs leading-tight shadow-md hover:shadow-lg active:bg-gray-800 active:border-violet-700  active:shadow-lg transition duration-150 ease-in-out"> Prev </button>
                <button onClick={next} className="px-5 border-2 border-violet-400 rounded-lg bg-gray-700 text-gray-200 text-xs leading-tight shadow-md hover:shadow-lg active:bg-gray-800 active:border-violet-700  active:shadow-lg transition duration-150 ease-in-out"> Next </button>

            </div>



        </div>

    )
}
