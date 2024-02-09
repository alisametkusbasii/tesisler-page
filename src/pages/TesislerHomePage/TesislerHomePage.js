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

const TesislerHomePage = () => {
  let location = useLocation()
  const token = location.search.slice(7)

  const [selectedTesis, setSelectedTesis] = useState(null)
  const [loading, setLoading] = useState(false)
  const [optionModalOpen, setOptionModalOpen] = useState(false)
  const [dayModalOpen, setDayModalOpen] = useState(false)
  const [lastDayCount, setLastDayCount] = useState(14)
  const [data, setData] = useState(null)

  const getData = async () => {
    setLoading(true)
    await axios
      .get(process.env.REACT_APP_BASE_URL + '/api/tesisler', {
        headers: {
          Authorization:
            typeof localStorage.getItem('token') === 'string'
              ? localStorage.getItem('token')
              : JSON.parse(localStorage.getItem('token')),
        },
      })
      .then((res) => {
        setLoading(false)
        setData(res.data.tesisler)
        setSelectedTesis(res.data.tesisler[0])
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

  return !loading && selectedTesis ? (
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
    <Loading text='Yükleniyor...' />
  )
}
export default TesislerHomePage
