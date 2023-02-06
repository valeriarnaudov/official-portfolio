import React from 'react'
import './arcSpinner.css'

function ArcSpinner() {
  return (
    <div className='arc-spinner'>
        <div className="center-body">
            <div className="loader-circle">
                <div className="arc"></div>
                <div className="arc"></div>
                <div className="arc"></div>
            </div>
        </div>
      
    </div>
  )
}

export default ArcSpinner
