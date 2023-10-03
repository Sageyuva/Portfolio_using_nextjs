import React from 'react'
const SkillCard = (props) => {
  return (
    <>
    <div className="w-[200px] rounded-2xl overflow-hidden bg-[#f4f4f4]">
      <center>
        <img className='w-[100%] h-[150px] rounded-none'  src={`${props.img}`} alt="" />
      </center>
      <div className='w-[100%] bg-black flex items-start justify-start rounded-2xl h-[10px]'>
        <div style={{width:`${props.per}`,height:"10px" ,background:"green",borderRadius:"1rem"}}></div>
      </div>
    </div>
    </>
  )
}

export default SkillCard