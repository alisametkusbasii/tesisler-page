import React from 'react'
import './ProgressBar.css'

const ProgressBar = ({ doluluk }) => {
  const renderProgresBarWidth = (value) => {
    if (value <= 25) {
      return doluluk < 25 ? `${doluluk * 4}%` : 100
    } else if (value <= 50) {
      return doluluk <= 25 ? 0 : doluluk < 50 ? `${(doluluk - 25) * 4}%` : 85
    } else if (value <= 75) {
      return doluluk <= 50 ? 0 : doluluk < 75 ? `${(doluluk - 50) * 4}%` : 85
    } else if (value > 75) {
      return doluluk <= 75 ? 0 : doluluk < 100 ? `${(doluluk - 75) * 4}%` : 85
    }
  }

  const renderProgresBarTitle = (value) => {
    if (value <= 25) {
      return 'SAKİN'
    } else if (value <= 50) {
      return 'KISMEN SAKİN'
    } else if (value <= 75) {
      return 'YOĞUN'
    } else if (value > 75) {
      return 'ÇOK YOĞUN'
    }
  }

  const renderProgresBarDesc = (value) => {
    if (value <= 25) {
      return 'Tesis şu anda sakin.'
    } else if (value <= 50) {
      return 'Tesis şu anda kısmen sakin.'
    } else if (value <= 75) {
      return 'Tesis şu anda yoğun.'
    } else if (value > 75) {
      return 'Tesis şu anda çok yoğun.'
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: '1rem',
      }}
    >
      <div className='title' style={{ marginBottom: '0.5rem' }}>
        {'Tesisin Doluluk Durumu'}
      </div>
      <div className='dolulukContainer'>
        <div className='dolulukTextDiv'>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              margin: '-0.4rem 0 0 0',
            }}
          >
            <div
              style={{
                fontSize: '40px',
                margin: '0 1rem 0 0',
              }}
            >{`%${doluluk}`}</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  fontSize: '16px',
                  color: '#000',
                  lineHeight: '1.2rem',
                }}
              >
                {renderProgresBarTitle(doluluk)}
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: '#000',
                }}
              >
                {renderProgresBarDesc(doluluk)}
              </div>
            </div>
          </div>
        </div>
        <div className='progresbarDiv'>
          <div className='progresbarItem'>
            <div
              style={{
                width: renderProgresBarWidth(25),
                height: '100%',
                backgroundColor: '#5FA24B',
              }}
            ></div>
          </div>
          <div className='progresbarItem'>
            <div
              style={{
                width: renderProgresBarWidth(50),
                height: '100%',
                background: 'linear-gradient(to left, #FF8000, #5FA24B)',
              }}
            ></div>
          </div>
          <div className='progresbarItem'>
            <div
              style={{
                width: renderProgresBarWidth(75),
                height: '100%',
                background: 'linear-gradient(to left, #CC2D2D, #FF8000)',
              }}
            ></div>
          </div>
          <div className='progresbarItem'>
            <div
              style={{
                width: renderProgresBarWidth(100),
                height: '100%',
                backgroundColor: '#CC2D2D',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
