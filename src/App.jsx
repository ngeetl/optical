import './App.css';
import React, { useEffect, useState } from 'react';
import Modal from './components/Modal/Modal';

function App() {
  const [text, setText] = useState('')
  const [block, setBlock] = useState(false)
  const [modalOn, setModalOn] = useState(true)
  const thinLines = [];
  const boldLines = [];

  for (let angle = 22.3; angle < 360; angle += 30) {
    thinLines.push(angle);
  }
  for (let angle = 7.8; angle < 360; angle += 30) {
    thinLines.push(angle);
  }
  for (let angle = 15; angle <= 360; angle += 15) {
    boldLines.push(angle);
  }

  useEffect(() => {
    setTimeout(() => setModalOn(false), 3000);
  }, []);

  const btnClick = () => {
    setBlock(prev => !prev);
  }
  return (
    <div className="App">
      <Modal modalOn={modalOn} setModalOn={setModalOn}/>
      <div className='wrap'>
        <div className="polarization-chart">
          {boldLines.map(angle => {
            const angleValue = angle > 180 ? angle - 180 : angle;
            return (
              <>
                <div
                  className='line line-bold'
                  key={angle}
                  style={{ transform: `rotate(${angle + 90}deg)` }}
                  onClick={() => setText(angleValue)}
                >
                  <span
                    style={{ transform: `rotate(calc(${angle + 90}deg * -1))` }}
                  >{angleValue}º</span>
                </div>
              </>
            )
          })}
          {thinLines.map(angle => {
            const angleValue = angle > 180 ? angle - 180 : angle;
            return (
              <>
                <div
                  className='line'
                  key={angle}
                  style={{ transform: `rotate(${angle + 90}deg)`, opacity: block ? '1' : '0' }}
                  onClick={() => setText(angleValue.toFixed(1))}
                >
                  <span
                    style={{ transform: `rotate(calc(${angle + 90}deg * -1))` }}
                  >{angleValue.toFixed(1)}º</span>
                </div>
              </>
            )
          })}
          <div className="center-circle">{text}º</div>
        </div>
        <button className='btn' onClick={btnClick}>전체보기</button>
      </div>
    </div>
  )
}

export default App;
