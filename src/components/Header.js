import React, { useState } from 'react';
const Header = () => {
  const [add,met]=useState(0);
  const [one,onem]=useState(8);
  const [two,twom]=useState(13);
  return (
    <div className="header">
      <div className="start red" id='start' onClick={()=>onem(one+1)}>
        <div className="number">{one}</div>
        <div className="title">Regular Students</div>
      </div>
      <div className="start purple" onClick={()=>twom(two+1)}>
        <div className="number">{two}</div>
        <div className="title">Remedial Students</div>
      </div>
      <div className="start green">
        <div className="number" onClick={()=>met(add+1)}>{add}</div>
        <div className="title">In Paid Clubs</div>
      </div>
    </div>
  )
}

export default Header
