import React from 'react';
import './Switcher.scss'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Switcher({icon, name, progress}) {
  const score = progress;

  // function for calculating the color
  const calcColor = (percent, start, end) => {
    let a = percent / 100,
      b = (end - start) * a,
      c = b + start;

    // return an CSS hsl color string
    return 'hsl(' + c + ', 100%, 50%)';
  };

  return (
    <div className="switcherContainer">
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <div className="icon-box">
              <img src={icon} alt="" />
            </div>
            <p className='title'>{name}</p>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <div className='progress-bar'>
              <CircularProgressbar
                value={score}
                text={`${score} %`}
                circleRatio={0.7} /* Make the circle only 0.7 of the full diameter */
                styles={{
                  trail: {
                    strokeLinecap: 'butt',
                    transform: 'rotate(-126deg)',
                    transformOrigin: 'center center',
                  },
                  path: {
                    strokeLinecap: 'butt',
                    transform: 'rotate(-126deg)',
                    transformOrigin: 'center center',
                    stroke: calcColor(score, 0, 120),
                  },
                  text: {
                    fill: '#ddd',
                  },
                }}
                strokeWidth={10}
              />
            </div>
            <span className='chevron'>{'>'}</span>
        </div>
    </div>

  );
}

export default Switcher;