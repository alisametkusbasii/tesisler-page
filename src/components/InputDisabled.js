import React from 'react'
import './InputDisabled.css'
import LockSvg from '../assets/icons/LockSvg'

const InputDisabled = ({
  label,
  value,
  textArea = false,
  half = false,
  style = {},
}) => {
  return (
    <div
      className='inputDiv'
      style={style ? { ...style } : { width: half ? '48.5%' : '100%' }}
    >
      <div className='label'>{label}</div>
      <div className={textArea ? 'textArea' : 'input'}>
        <div className='value'>{value}</div>
        <div>
          <LockSvg width={'1.1rem'} height={'1.1rem'} />
        </div>
      </div>
    </div>
  )
}

export default InputDisabled
