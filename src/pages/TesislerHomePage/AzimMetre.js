import React from 'react'
import AzimEmoji1 from '../../assets/icons/AzimEmoji1Svg'
import AzimEmoji2 from '../../assets/icons/AzimEmoji2Svg'
import AzimEmoji3 from '../../assets/icons/AzimEmoji3Svg'
import AzimEmoji4 from '../../assets/icons/AzimEmoji4Svg'
import AzimRed from '../../assets/icons/AzimRedSvg'
import AzimWhite from '../../assets/icons/AzimWhiteSvg'

const AzimMetre = ({ azimMetreCount }) => {
  const renderdiv = () => {
    if (azimMetreCount <= 2) {
      return 'Yolun Başındasın'
    } else if (azimMetreCount <= 4) {
      return 'İyi Gidiyorsun'
    } else if (azimMetreCount <= 6) {
      return 'Biraz Daha Azmet'
    } else if (azimMetreCount >= 7) {
      return 'Tebrikler, Başardın'
    }
  }

  const renderIcon = () => {
    if (azimMetreCount <= 2) {
      return <AzimEmoji2 width={15} height={15} />
    } else if (azimMetreCount <= 4) {
      return <AzimEmoji3 width={15} height={15} />
    } else if (azimMetreCount <= 6) {
      return <AzimEmoji1 width={15} height={15} />
    } else if (azimMetreCount >= 7) {
      return <AzimEmoji4 width={15} height={15} />
    }
  }

  return (
    <div className='azimMetreDiv'>
      <div className='azimTitle'>
        <div className='azimTitleDiv'>
          Azim<div style={{ fontWeight: 'lighter' }}>Metre</div>
        </div>
        <div className='azimTitleMessage'>
          <div
            style={{
              fontSize: '10px',
              color: 'red',
            }}
          >
            {renderdiv()}
          </div>
          {renderIcon()}
        </div>
      </div>
      <div className='daysDiv'>
        {[1, 2, 3, 4, 5, 6, 7]?.map((_, i) => (
          <div className='days' key={i}>
            {i < azimMetreCount ? (
              <AzimRed width={30} height={30} />
            ) : (
              <AzimWhite width={30} height={30} />
            )}
            <div
              className='dayTextDiv'
              style={{
                backgroundColor: i < azimMetreCount ? '#E15226' : '#979797',
              }}
            >
              <div className='dayDiv'>{`${i + 1}. Gün`}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AzimMetre
