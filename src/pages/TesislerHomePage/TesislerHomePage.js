import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'

import './TesislerHomePage.css'
import SelectTesis from './SelectTesis'
import AzimMetre from './AzimMetre'
import MapMarker from './MapMarker'
import OptionsModal from './Modals/OptionsModal'
import DayCountModal from './Modals/DayCountModal'
import ProgressBar from './ProgressBar/ProgressBar'
import GecirilenSure from './GecirilenSure/GecirilenSure'
import Loading from '../../components/Loading/Loading'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import Lottie from 'react-lottie'
import * as animationData from '../../assets/76705-error-animation.json'

const TesislerHomePage = () => {
  let location = useLocation()
  const token = location.search.slice(7)

  const [selectedTesis, setSelectedTesis] = useState(null)
  const [loading, setLoading] = useState(false)
  const [optionModalOpen, setOptionModalOpen] = useState(false)
  const [dayModalOpen, setDayModalOpen] = useState(false)
  const [lastDayCount, setLastDayCount] = useState(14)
  const [data, setData] = useState(null)
  const [warning, setWarning] = useState({ title: '', type: '' })

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const getData = async () => {
    setLoading(true)
    await axios
      .get(process.env.REACT_APP_BASE_URL + '/api/tesisler', {
        headers: {
          Authorization: JSON.parse(localStorage.getItem('token')),
        },
      })
      .then((res) => {
        setLoading(false)
        setData(res.data.tesisler)
        setSelectedTesis(res.data.tesisler[0])
      })
      .catch((err) => {
        setLoading(false)
        setWarning({title: 'Uyarı', type: 'geçersiz_token'})
        console.log('error: ', err)
      })
  }

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', JSON.stringify(token))
    }
    getData()
  }, [token])

  const toggleModal = () => {
    setOptionModalOpen(!optionModalOpen)
  }

  const toggleDayModal = () => {
    setDayModalOpen(!dayModalOpen)
  }

  const handleBackButton = () => {
    var win = window.open('about:blank', '_self')
    win.close()
  }

  const warningText = (errorMessage = '') => {
    if (warning.type === 'geçersiz_token') {
      return <p>Herhangi bir tesise başvurunuz bulunmamaktadır.</p>
    }

    if (warning.type === 'server_error') {
      return <p>{errorMessage}</p>
    }
  }

  return !loading ? (
    data?.length > 0 ? (
      <>
        <div className='container'>
          <div className='scrollDiv'>
            <div className=''>
              <Header backButton={true} onClick={handleBackButton} />
            </div>
            <SelectTesis
              data={data}
              onSelect={setSelectedTesis}
              selectedItem={selectedTesis?.tesis}
            />
            <AzimMetre azimMetreCount={selectedTesis?.user.azimMetre} />
            <MapMarker
              selectedTesis={selectedTesis?.tesis}
              setOptionModalOpen={setOptionModalOpen}
            />
            <ProgressBar doluluk={selectedTesis?.doluluk} />
            <GecirilenSure
              ortalamaSure={selectedTesis?.ortalamaSure}
              lastDayCount={lastDayCount}
              toggleDayModal={toggleDayModal}
            />
          </div>
        </div>
        <OptionsModal
          show={optionModalOpen}
          onHide={toggleModal}
          data={selectedTesis?.tesis}
        />
        <DayCountModal
          show={dayModalOpen}
          onHide={toggleDayModal}
          setLastDayCount={setLastDayCount}
        />
      </>
    ) : (
      <div
        style={{
          display: 'flex',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <div
          style={{ with: '100%', marginBottom: '1rem', marginTop: '0.5rem' }}
        >
          <Lottie options={defaultOptions} height={75} width={75} />
        </div>
        <p
          style={{
            fontWeight: 'bolder',
            fontSize: 25,
          }}
        >
          {warning.title ?? 'Uyarı'}
        </p>
        <div style={{ textAlign: 'center' }}>{warningText()}</div>
      </div>
    )
  ) : (
    <Loading text='Yükleniyor...' />
  )
}
export default TesislerHomePage
