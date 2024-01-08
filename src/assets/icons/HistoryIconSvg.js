import React from 'react'

const HistoryIconSvg = ({ width, height, focus }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 23.156 23.156'
    >
      <path
        id='history-svgrepo-com'
        d='M5.609,5.6A11.632,11.632,0,0,1,22.053,22.053a11.654,11.654,0,0,1-19.7-9.91.891.891,0,0,1,1.765.242,9.873,9.873,0,0,0,16.671,8.408A9.851,9.851,0,0,0,6.869,6.857l.888,0a.891.891,0,0,1-.009,1.781L4.725,8.627a.891.891,0,0,1-.886-.886L3.823,4.719A.891.891,0,1,1,5.6,4.71Zm8.219,2.59a.891.891,0,0,1,.891.891v4.381l2.708,2.708a.891.891,0,0,1-1.259,1.259l-3.23-3.23V9.078A.891.891,0,0,1,13.828,8.187Z'
        transform='translate(-2.25 -2.25)'
        fill={focus ? '#fff' : '#205c42'}
        fillRule='evenodd'
      />
    </svg>
  )
}

export default HistoryIconSvg
