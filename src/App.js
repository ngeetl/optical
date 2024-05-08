import './App.css';
import { React, useState } from 'react';

function App() {
  const lines = []; // 선을 저장할 배열
  const degreesStep = 7.5; // 각도 단위
  const boldDegrees = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360]; // 볼드 처리할 각도들
  const [text, setText] = useState('')
  const [block, setBlock] = useState(false) 

  // 360도를 degreesStep 단위로 나누어 선 생성
  for (let angle = 0; angle < 360; angle += degreesStep) {
    const isBold = boldDegrees.includes(angle);
    const className = isBold ? 'line-bold' : 'line';
    lines.push(
      <div
        className={className}
        key={angle}
        style={{ transform: `rotate(${angle}deg)`, opacity: block && '1' }}
        onClick={() => setText(angle)}
      >
        <span
          style={{ transform: `rotate(calc(${angle}deg * -1))` }}
        >{angle}º</span>
      </div>
      
    );
  }

  const btnClick = () => {
    setBlock(prev=>!prev);
  }

  return (
    <div className="App">
      <div className='wrap'>
        <h1>편광 시표</h1>
        <div className="polarization-chart">
          {lines}
          <div className="center-circle">{text}º</div>
        </div>
        <button className='btn' onClick={btnClick}>add</button>
      </div>
    </div>
  );
}

export default App;
