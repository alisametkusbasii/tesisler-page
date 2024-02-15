import React, { useState, useEffect } from 'react'
import Header from '../components/Header/index'
import { useLocation, useNavigate } from 'react-router-dom'
import './TesislerList.css'
import TubitakWarningModal from '../components/TubitakWarningModal'
import axios from 'axios'
import LoadingAbsolute from '../components/Loading/LoadingAbsolute'
import RegisterPaperSvg from '../assets/icons/RegisterPaperSvg'
import InfoCircleSvg from '../assets/icons/InfoCircleSvg'
import InfoModal from '../components/InfoModal'

const data = {
  user: {
    kayitli_tesisler: [
      // Kullanıcın kayıtlı olduğu tesislerin id listesi
      { tesis_id: 0, azimMetre: 5 },
      { tesis_id: 1, azimMetre: 2 },
      // { tesis_id: 2, azimMetre: 4 },
    ],
    onay_bekliyen_tesisler: [
      // Kullanıcın başvurduğu tesislerin id ve başvuru bilgileri (çocuğu içinde başvurabilir)
      {
        id: 0,
        tesis_id: 1,
        person: {
          name: 'Samet',
          surname: 'Kuşbaşı',
          address:
            'Beyhekim Mah. Ali Demirtaş Sok. Toki Konutları Bk.5 No.12 Selçuklu/Konya',
        },
      },
    ],
  },
  tesisler: [
    {
      id: 0,
      title: 'Ali Ulvi Kurucu Gençlik Merkezi',
      address: 'Erler Sk. No: 14 Karatay/KONYA',
      location_name: 'Ali Ulvi Kurucu Gençlik Merkezi',
      location_lat: '37.8756575',
      location_long: '32.6240873',
      img: 'ali-ulvi.png',
      options:
        '[\r\n  "Kütüphane",\r\n  "Spor Salonları",\r\n  "Atölyeler",\r\n  "Derslikler",\r\n  "Kafeterya",\r\n  "Konferans Salonu",\r\n  "E-Spor Merkezi",\r\n  "Oyun Odaları"\r\n]\r\n',
      created_at: '2023-10-20T12:11:48.498753Z',
      updated_at: null,
      durum: 'E',
      kisi_kapasitesi: '1500',
      tesis_tel_no: 4449332,
      acilis_saati: '08.00',
      kapanis_saati: '17.00',
      doluluk: 49,
      sure: 105,
      ortalamaSure: { 7: 44, 14: 56, 28: 98 },
    },
    {
      id: 1,
      title: 'Karatay Kültür ve Sanat Akademisi',
      address: 'Tünelboğazı Sk. No: 26 Karatay/KONYA',
      location_name: 'Karatay Kültür ve Sanat Akademisi',
      location_lat: '37.8756575',
      location_long: '32.6240873',
      img: 'ali-ulvi.png',
      options:
        '[\r\n  "Kütüphane",\r\n  "Spor Salonları",\r\n  "Atölyeler",\r\n  "Derslikler",\r\n  "Kafeterya",\r\n  "Konferans Salonu",\r\n  "E-Spor Merkezi",\r\n  "Oyun Odaları"\r\n]\r\n',
      created_at: '2023-10-20T12:11:48.498753Z',
      updated_at: null,
      durum: 'E',
      kisi_kapasitesi: '1500',
      tesis_tel_no: 4449332,
      acilis_saati: '08.00',
      kapanis_saati: '17.00',
      doluluk: 76,
      sure: 144,
      ortalamaSure: { 7: 44, 14: 56, 28: 98 },
    },
    {
      id: 2,
      title: 'Akabe Bilgi Evi',
      address: 'Erler Sk. No: 14 Karatay/KONYA',
      location_name: 'Ali Ulvi Kurucu Gençlik Merkezi',
      location_lat: '37.8756575',
      location_long: '32.6240873',
      img: 'ali-ulvi.png',
      options:
        '[\r\n  "Kütüphane",\r\n  "Spor Salonları",\r\n  "Atölyeler",\r\n  "Derslikler",\r\n  "Kafeterya",\r\n  "Konferans Salonu",\r\n  "E-Spor Merkezi",\r\n  "Oyun Odaları"\r\n]\r\n',
      created_at: '2023-10-20T12:11:48.498753Z',
      updated_at: null,
      durum: 'E',
      kisi_kapasitesi: '1500',
      tesis_tel_no: 4449332,
      acilis_saati: '08.00',
      kapanis_saati: '17.00',
      doluluk: 24,
      sure: 36,
      ortalamaSure: { 7: 44, 14: 56, 28: 98 },
    },
  ],
}

const TesislerList = (props) => {
  let location = useLocation()
  const token = location.search.slice(7)
  const navigate = useNavigate()
  //   const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [optionModalOpen, setOptionModalOpen] = useState(false)
  const [selectedTesisOptions, setSelectedTesisOptions] = useState(null)

  const [warningModalOpen, setWarningModalOpen] = useState({
    state: '',
    active: false,
    message: '',
  })

  const getData = async () => {
    setLoading(true)
    await axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/api/dijital_basvuru/sosyal-tesisleri-sorgula`,
        {
          params: {
            token: JSON.parse(localStorage.getItem('token')),
          },
        }
      )
      .then((res) => {
        setLoading(false)
        if (res.data.code === 200) {
          console.log(res.data)
          //   setData(res.data.tesisler)
        } else if (res.data.code === 400) {
          setWarningModalOpen({
            state: 'responseMessage',
            active: true,
            message: res.data.message,
          })
        }
      })
  }

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', JSON.stringify(token))
    }
    getData()
  }, [token])

  const getItem = (tesisId) => {
    const image = data?.tesisler.find((tesis) => tesisId === tesis.id)
    return image
  }

  const kayitliIds = data.user.kayitli_tesisler?.reduce((acc, curr) => {
    if (!acc.includes(curr.tesis_id)) {
      acc.push(curr.tesis_id)
    }
    return acc
  }, [])

  const onayBekleyenlerIds = data.user.onay_bekliyen_tesisler?.reduce(
    (acc, curr) => {
      if (!acc.includes(curr.tesis_id)) {
        acc.push(curr.tesis_id)
      }
      return acc
    },
    []
  )

  const checkTesisler = () => {
    const tesisler = data.user.onay_bekliyen_tesisler?.reduce((acc, curr) => {
      data.tesisler?.map((tesis) => {
        if (
          !kayitliIds.includes(tesis.id) &&
          !onayBekleyenlerIds.includes(tesis.id) &&
          !acc.includes(tesis)
        ) {
          acc.push(tesis)
        }
        return acc
      })
      return acc
    }, [])
    return tesisler
  }

  return (
    <>
      {loading ? (
        <LoadingAbsolute
          formText={'Belgeleriniz yükleniyor,'}
          text={'Lütfen bekleyiniz...'}
          formLodading={true}
        />
      ) : null}
      <div className='hide-scrollbar'>
        <div
          style={{
            backgroundColor: '#fff',
            position: 'sticky',
            top: 0,
            zIndex: 999,
          }}
        >
          <Header onClick={() => navigate(-1)} />
        </div>
        {data?.user.kayitli_tesisler.length > 0 && (
          <div className='' style={{ margin: '0 1rem', color: '#205c42' }}>
            <div className=''>{'Kayıtlı Olduğunuz Tesisler'}</div>
            {data?.tesisler?.map(
              (item) =>
                kayitliIds.includes(item.id) && (
                  <div
                    key={item.id}
                    className='list-item'
                    onClick={() => {
                      console.log(' item', item)
                      navigate('/home', {
                        state: {
                          selectedTesis: {
                            ...item,
                            user: data.user.kayitli_tesisler,
                          },
                        },
                      })
                    }}
                  >
                    <div className='item-image'>
                      <img
                        alt=''
                        src={
                          'https://app.yanibasimdakaratay.com/uploads/dijital_basvurular/tesisler/' +
                          item.img
                        }
                      />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        margin: '0 0 0 0.5rem',
                      }}
                    >
                      <div>
                        <div className='item-title'>{item.title}</div>
                        <div className='item-adress'>{item.address}</div>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        )}
        {data?.user.onay_bekliyen_tesisler.length > 0 && (
          <div className='' style={{ margin: '0 1rem', color: '#205c42' }}>
            <div className=''>{'Onay Bekleyen Başvurularınız'}</div>
            {data?.user.onay_bekliyen_tesisler?.map((item) => (
              <div key={item.id} className='list-item'>
                <div className='item-image'>
                  <img
                    alt=''
                    src={
                      'https://app.yanibasimdakaratay.com/uploads/dijital_basvurular/tesisler/' +
                      getItem(item.tesis_id)?.img
                    }
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    margin: '0 0 0 0.5rem',
                  }}
                >
                  <div>
                    <div className='item-title'>
                      {getItem(item.tesis_id)?.title}
                    </div>
                    <div className='item-adress'>
                      {getItem(item.tesis_id)?.address}
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: '.5rem',
                    }}
                  >
                    <button
                      style={{ backgroundColor: '#0090FF' }}
                      className='ozellikBtn'
                      onClick={(e) => {
                        setSelectedTesisOptions(item)
                        setOptionModalOpen(true)
                        e.stopPropagation()
                      }}
                    >
                      <InfoCircleSvg />
                      <div style={{ margin: '0 0 0 0.4rem' }}>
                        Başvuru Bilgisi
                      </div>
                    </button>
                    <div className='beklemede' style={{ color: '#AAAAAA' }}>
                      Beklemede
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {checkTesisler()?.length > 0 && (
          <>
            <div className='' style={{ margin: '0 1rem', color: '#205c42' }}>
              <div className=''>{'Kayıt Olabileceğiniz Tesisler'}</div>
              {checkTesisler().map((item) => (
                <div key={item.id} className='list-item'>
                  <div className='item-image'>
                    <img
                      alt=''
                      src={
                        'https://app.yanibasimdakaratay.com/uploads/dijital_basvurular/tesisler/' +
                        item.img
                      }
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-evenly',
                      margin: '0 0 0 0.5rem',
                    }}
                  >
                    <div>
                      <div className='item-title'>{item.title}</div>
                      <div className='item-adress'>{item.address}</div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '.5rem',
                      }}
                    >
                      <button
                        style={{ backgroundColor: '#56A54D' }}
                        className='ozellikBtn'
                        onClick={(e) => {
                          window.open(
                            `${process.env.REACT_APP_ADDITIONAL_URL}/?token=${token}`,
                            '_self'
                          )
                          e.stopPropagation()
                        }}
                      >
                        <RegisterPaperSvg />
                        <div style={{ margin: '0 0 0 0.4rem' }}>Kayıt Ol</div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <TubitakWarningModal
        show={warningModalOpen.active}
        onHide={() => setWarningModalOpen({ state: '', active: false })}
        state={warningModalOpen.state}
        message={warningModalOpen.message}
      />
      {selectedTesisOptions && (
        <InfoModal
          show={optionModalOpen}
          onHide={() => setOptionModalOpen(false)}
          infos={selectedTesisOptions}
          title={'Başvuru Bilgileriniz'}
        />
      )}
    </>
  )
}

export default TesislerList
