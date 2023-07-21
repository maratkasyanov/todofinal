import React from 'react';
import { useState, useEffect } from 'react';

const Timer = (props) => {

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [stopTime,setTimer] = useState(false)
  const [first,setFirst] = useState(true)
  let dateNow = new Date()
  const getTime = (fullstate) => {
    let date = new Date(new Date().getTime() + fullstate[0] * 60000 + fullstate[1] * 1000)
    let time = date - dateNow

    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };
  const onclickStop=()=>{
    setTimer(false)
    setFirst(false)
  }
  const onclickStart=()=>{
    setTimer(true)
    setFirst(false)
  }

  useEffect(() => {
    if (stopTime === false && first !== true) {
      const interval = setInterval(() => getTime([minutes,seconds]), 1000);

      return () => clearInterval(interval); 
    }
    else if(stopTime === false && first !== false){
      const interval = setInterval(() => getTime(props.fulldate), 1000);

      return () => clearInterval(interval); 
    }
    else{
      console.log(minutes,seconds)
      getTime([minutes,seconds])
    }
    
  }, [stopTime]);
  return (
    <div>
      <button onClick={onclickStart} className="icon icon-play min"></button>
      <button onClick={onclickStop} className="icon icon-play sec"></button>

      <div className="timer" role="timer">
        <p id="second">{seconds}</p>
        <p id="second">{minutes}:</p>

      </div>
    </div>
  );
};


export default Timer