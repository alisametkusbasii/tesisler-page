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

const data = [
  {
    id: 0,
    name: 'Ali Ulvi Kurucu Gençlik Merkezi',
    openTime: '09:00',
    closeTime: '21:00',
    doluluk: 49,
    sure: 105,
    ortalamaSure: { 7: 44, 14: 56, 28: 98 },
    options: [
      'Kütüphane',
      'Spor Salonları',
      'Atölyeler',
      ' Derslikler',
      ' Kafeterya',
      ' Konferans Salonu',
      ' E-Spor Merkezi',
      ' Oyun Odaları',
    ],
    location: {
      lat: 37.86724637308083,
      lng: 32.50220010118041,
    },
    telNo: '4449332',
    user: {
      azimMetre: 4,
    },
  },
  {
    id: 1,
    name: 'TEST1',
    openTime: '06:00',
    closeTime: '18:00',
    doluluk: 24,
    sure: 105,
    ortalamaSure: { 7: 44, 14: 56, 28: 98 },
    options: [
      'Kütüphane',
      'Spor Salonları',
      'Atölyeler',
      ' Derslikler',
      ' Kafeterya',
      ' Konferans Salonu',
      ' E-Spor Merkezi',
      ' Oyun Odaları',
    ],
    location: {
      lat: 37.86724637308083,
      lng: 32.50220010118041,
    },
    telNo: '4449332',
    user: {
      azimMetre: 1,
    },
  },
  {
    id: 2,
    name: 'TEST2',
    openTime: '07:00',
    closeTime: '19:00',
    doluluk: 74,
    sure: 105,
    ortalamaSure: { 7: 44, 14: 56, 28: 98 },
    options: [' Oyun Odaları'],
    location: {
      lat: 32.50220010118041,
      lng: 37.86724637308083,
    },
    telNo: '4449332',
    user: {
      azimMetre: 2,
    },
  },
  {
    id: 3,
    name: 'TEST3',
    openTime: '08:00',
    closeTime: '20:00',
    doluluk: 100,
    sure: 105,
    ortalamaSure: { 7: 44, 14: 56, 28: 98 },
    options: [
      'Kütüphane',
      'Spor Salonları',
      'Atölyeler',
      ' Derslikler',
      ' Kafeterya',
      ' Konferans Salonu',
      ' E-Spor Merkezi',
      ' Oyun Odaları',
    ],
    location: {
      lat: 37.86724637308083,
      lng: 32.50220010118041,
    },
    telNo: '4449332',
    user: {
      azimMetre: 3,
    },
  },
  {
    id: 4,
    name: 'TEST4',
    openTime: '09:00',
    closeTime: '21:00',
    doluluk: 76,
    sure: 105,
    ortalamaSure: { 7: 44, 14: 56, 28: 98 },
    options: [
      'Kütüphane',
      'Spor Salonları',
      'Atölyeler',
      ' Derslikler',
      ' Kafeterya',
      ' Konferans Salonu',
      ' E-Spor Merkezi',
      ' Oyun Odaları',
    ],
    location: {
      lat: 37.86724637308083,
      lng: 32.50220010118041,
    },
    telNo: '4449332',
    user: {
      azimMetre: 0,
    },
  },
]

const TesislerHomePage = () => {
  const [selectedTesis, setSelectedTesis] = useState(null)
  // const [loading, setLoading] = useState(false)
  const [optionModalOpen, setOptionModalOpen] = useState(false)
  const [dayModalOpen, setDayModalOpen] = useState(false)
  const [lastDayCount, setLastDayCount] = useState(14)

  useEffect(() => {
    setSelectedTesis({
      id: 0,
      name: 'Ali Ulvi Kurucu Gençlik Merkezi',
      openTime: '09:00',
      closeTime: '21:00',
      doluluk: 90, // yüzdelik değer (90%)
      sure: 220, // Dakika cinsinde (105dk)
      ortalamaSure: { 7: 44, 14: 56, 28: 98 }, // 7 günlük, 14 günlük ve 28 günlük geçirilen süre dk cinsinde (7(günlük): 44(dk))
      options: [
        'Kütüphane',
        'Spor Salonları',
        'Atölyeler',
        'Derslikler',
        'Kafeterya',
        'Konferans Salonu',
        'E-Spor Merkezi',
        'Oyun Odaları',
      ],
      location: {
        lat: 37.86724637308083,
        lng: 32.50220010118041,
      },
      telNo: '4449332',
      user: {
        azimMetre: 4,
      },
    })
  }, [])

  const toggleModal = () => {
    setOptionModalOpen(!optionModalOpen)
  }

  const toggleDayModal = () => {
    setDayModalOpen(!dayModalOpen)
  }

  const handleBackButton = () => {
    window.close();
    return true
  }

  return selectedTesis ? (
    <>
      <div className='container' /**style={{ marginTop: '2rem' }} */>
        <div className='scrollDiv'>
          <div className=''>
            <Header backButton={true} onClick={handleBackButton} />
          </div>
          <SelectTesis
            data={data}
            onSelect={setSelectedTesis}
            selectedItem={selectedTesis}
          />
          <AzimMetre azimMetreCount={selectedTesis?.user.azimMetre} />
          <MapMarker
            selectedTesis={selectedTesis}
            setOptionModalOpen={setOptionModalOpen}
          />
          <ProgressBar doluluk={selectedTesis?.doluluk} />
          <GecirilenSure
            ortalamaSure={selectedTesis?.ortalamaSure}
            sure={selectedTesis?.sure}
            lastDayCount={lastDayCount}
            toggleDayModal={toggleDayModal}
          />
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
