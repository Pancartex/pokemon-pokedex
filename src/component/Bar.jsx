import React from 'react'
import '../style/Bar.css'

export default function Bar({value}) {
    const getColor = (value) => {
        let color;
        if (value < 20){
            color = 'rgb(226,80,81)' //Red
        } else if (value < 40) {
            color = 'rgb(246,163,46)' //Orange
        } else if (value < 60) {
            color = 'rgb(245,203,56)'
        } else {
            color = '#72AB56'
        }
        return color;
    }

  return (
      <div className='outer-bar'>
          <div className='inner-bar' style={{
              width: `${100/100 * value}%`,
              height: '100%',
              backgroundColor: getColor(value)
          }}></div>
      </div>
  )
}
