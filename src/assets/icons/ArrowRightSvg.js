import React from 'react'

const ArrowRightSvg = ({ width, height, focus }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 12.68 23.361'
    >
      <path
        id='Path_451'
        data-name='Path 451'
        d='M347.545,507.2l10.266,10.266L368.077,507.2'
        transform='translate(-505.782 369.492) rotate(-90)'
        fill='none'
        stroke={focus ? '#205c42' : '#535353'}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </svg>
  )
}

export default ArrowRightSvg
