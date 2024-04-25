import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/index'
import './TesislerHomePage.css'
import SelectTesis from './SelectTesis'
import AzimMetre from './AzimMetre'
import MapMarker from './MapMarker'
import OptionsModal from './Modals/OptionsModal'
import DayCountModal from './Modals/DayCountModal'
import ProgressBar from './ProgressBar/ProgressBar'
import GecirilenSure from './GecirilenSure/GecirilenSure'
import Loading from '../../components/Loading/Loading'
import { useLocation, useNavigate } from 'react-router-dom'

const TesislerHomePage = () => {
  let location = useLocation()
  const data = location?.state?.selectedTesis
  const azim = location?.state?.selectedTesis.azim
  const location_lat = location?.state?.selectedTesis.location_lat
  const ortalamaSure = location?.state?.selectedTesis.ortalamaSure
  const doluluk = location?.state?.selectedTesis.doluluk
  const token = location.search.slice(7)
  const navigate = useNavigate()

  const [selectedTesis, setSelectedTesis] = useState(null)
  const [loading, setLoading] = useState(false)
  const [optionModalOpen, setOptionModalOpen] = useState(false)
  const [dayModalOpen, setDayModalOpen] = useState(false)
  const [lastDayCount, setLastDayCount] = useState(14)

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', JSON.stringify(token))
    }
    if (data) {
      console.log(data)
      setLoading(false)
    }
    setSelectedTesis(data)
  }, [token, data])

  const toggleModal = () => {
    setOptionModalOpen(!optionModalOpen)
  }

  const toggleDayModal = () => {
    setDayModalOpen(!dayModalOpen)
  }

  const handleBackButton = () => {
    navigate('/')
  }

  const user = selectedTesis?.user?.find(
    (item) => item.tesis_id === selectedTesis?.id
  )

  return !loading && selectedTesis ? (
    <>
      <div className='scrollDiv'>
        <div
          style={{
            backgroundColor: '#fff',
            position: 'sticky',
            top: 0,
            zIndex: 999,
          }}
        >
          <Header backButton onClick={handleBackButton} />
        </div>
        <div className='container'>
          <SelectTesis
            data={data}
            onSelect={setSelectedTesis}
            selectedItem={selectedTesis}
          />
          {azim && <AzimMetre azimMetreCount={user?.azimMetre} />}
          {location_lat && (
            <MapMarker
              selectedTesis={selectedTesis}
              setOptionModalOpen={setOptionModalOpen}
            />
          )}
          {doluluk >= 0 ? <ProgressBar doluluk={doluluk} /> : null}
          {ortalamaSure && (
            <GecirilenSure
              ortalamaSure={ortalamaSure}
              lastDayCount={lastDayCount}
              toggleDayModal={toggleDayModal}
            />
          )}
        </div>
      </div>
      <OptionsModal
        show={optionModalOpen}
        onHide={toggleModal}
        data={selectedTesis}
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
