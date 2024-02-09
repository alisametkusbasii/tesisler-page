import React from 'react'
import TesisGecirilenSure25 from '../../../assets/icons/TesisGecirilenSure25'
import TesisGecirilenSure50 from '../../../assets/icons/TesisGecirilenSure50'
import TesisGecirilenSure75 from '../../../assets/icons/TesisGecirilenSure75'
import TesisGecirilenSure100 from '../../../assets/icons/TesisGecirilenSure100'
import ArrowDownTransparentBlackSvg from '../../../assets/icons/ArrowDownTransparentBlackSvg'
import CalendarBlackSvg from '../../../assets/icons/CalendarBlackSvg'

import './GecirilenSure.css'

const GecirilenSure = ({ lastDayCount, toggleDayModal, ortalamaSure }) => {
  const timeConvert = (num) => {
    const hours = Math.floor(num / 60)
    const minutes = Math.round((num / 60 - hours) * 60)

    if (hours === 0) {
      return `${minutes}dk`
    } else if (minutes === 0) {
      return `${hours}s`
    } else {
      return `${hours}s${minutes}dk`
    }
  }
  const renderSureBar = (value) => {
    if (value <= 60) {
      return <TesisGecirilenSure25 width={70} height={70} />
    } else if (value <= 120) {
      return <TesisGecirilenSure50 width={70} height={70} />
    } else if (value <= 180) {
      return <TesisGecirilenSure75 width={70} height={70} />
    } else if (value > 180) {
      return <TesisGecirilenSure100 width={70} height={70} />
    }
  }

  return (
    <>
      <div className='title' style={{ margin: '1rem 0 0 0' }}>
        {'Tesiste Geçirilen Ortalama Süre'}
      </div>
      <div className='sureContainer'>
        <div className='sureTextView'>
          <div className='sureBar'>
            <div>
              {renderSureBar(ortalamaSure[lastDayCount])}
              <div className='sure'>
                {timeConvert(ortalamaSure[lastDayCount])}
              </div>
            </div>
          </div>
          <div className='sureDescView'>
            <div className='sureTitle'>
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: '300',
                }}
              >
                Üyeler son <b>{`${lastDayCount}`} günde</b> bu tesiste ortalama{' '}
                <b>{`${timeConvert(ortalamaSure[lastDayCount])}`}</b> vakit
                geçirdiler.
              </div>
            </div>
          </div>
        </div>
        <div className='sureDesc' onClick={toggleDayModal}>
          <>
            <div style={{ marginTop: '-0.1rem' }}>
              <CalendarBlackSvg width={10} height={10} />
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: '300',
              }}
            >
              {`Son ${lastDayCount} Gün`}
            </div>
            <div style={{ marginTop: '-0.1rem' }}>
              <ArrowDownTransparentBlackSvg width={10} height={10} />
            </div>
          </>
        </div>
      </div>
    </>
  )
}

export default GecirilenSure
