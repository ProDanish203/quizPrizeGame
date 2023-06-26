import { prizeData } from "../Assets/data";

export const PriceBar = ({ questionNo, name }) => {

  return (
    <>
    <div className='min-h-[100vh] max-w-[300px] w-full flex flex-col-reverse justify-start bg-blue-950 shadow-2xl'>
        {prizeData.map((prize, index) => (
                <p key={index} className={`text-md flex items-center gap-14 my-2 mx-5 text-white ${questionNo === (index) ? "bg-green-600" : ""}  rounded-md px-2 py-1`}>
                    <span className={`${questionNo === (index) ? "text-[#333]" : "text-[#999]"}  font-semibold`}>{index+1})</span>
                    <span className='font-bold'>${prize}</span>
                </p>
            ))
        }

        <h2 className="text-white font-semibold p-5">Name: {name}</h2>
    </div>
    </>
  )
}
