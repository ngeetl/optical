import React from 'react'
import './Modal.css'

const Modal = ({ modalOn, setModalOn }) => {
  return (
    <div className='modal_bg' style={{ opacity: modalOn ? '1' : '0', zIndex: modalOn ? '99' : '0',}}>
      <div className='modal_wrap'>
          <div className='modal_contnet'>
          어디가 더 뚜렷하게 보이는지<br/> 
          편광시표의 선을 클릭해 주세요. 
          <h1 onClick={()=>setModalOn(false)}><span>Click </span>🥸</h1>
          </div>
      </div>
    </div>
  )
}

export default Modal
