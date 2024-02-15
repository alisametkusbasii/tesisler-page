import React from 'react'

const IconButton = ({ icon, onClick, text, backgroundColor }) => {
  return (
    <button
      style={{
        width: '49%',
        borderRadius: '5px',
        backgroundColor: backgroundColor,
        color: '#fff',
        fontSize: '14px',
        border: 'none',
      }}
      onClick={onClick}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '10px',
          padding: '0.4rem 1rem',
        }}
      >
        <div style={{ marginBottom: '0.2rem' }}>{icon}</div>
        <div>{text}</div>
      </div>
    </button>
  )
}

export default IconButton
