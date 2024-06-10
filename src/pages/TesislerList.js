import React, { useState, useEffect } from 'react'
import Header from '../components/Header/index'
import { useLocation, useNavigate } from 'react-router-dom'
import './TesislerList.css'
import TubitakWarningModal from '../components/TubitakWarningModal'
import axios from 'axios'
import LoadingAbsolute from '../components/Loading/LoadingAbsolute'
import RegisterPaperSvg from '../assets/icons/RegisterPaperSvg'
import EyeSvg from '../assets/icons/EyeSvg'
import InfoCircleSvg from '../assets/icons/InfoCircleSvg'
import InfoModal from '../components/InfoModal'

const TesislerList = (props) => {
  let location = useLocation()
  const token = location.search.slice(7)
  const navigate = useNavigate()
  const [data, setData] = useState(null)
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
          setData(res.data.data)
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

  const kayitliIds = data?.user.kayitli_tesisler?.reduce((acc, curr) => {
    if (!acc.includes(curr.tesis_id)) {
      acc.push(curr.tesis_id)
    }
    return acc
  }, [])

  const onayBekleyenlerIds = data?.user.onay_bekliyen_tesisler?.reduce(
    (acc, curr) => {
      if (!acc.includes(curr.tesis_id)) {
        acc.push(curr.tesis_id)
      }
      return acc
    },
    []
  )

  const checkTesisler = () => {
    const tesisler = data?.user.onay_bekliyen_tesisler?.reduce((acc, curr) => {
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
                kayitliIds?.includes(item.id) && (
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
                        justifyContent: 'space-between',
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
                            e.stopPropagation()
                            console.log(' item', item)
                            navigate('/home', {
                              state: {
                                selectedTesis: {
                                  ...item,
                                  user: data?.user.kayitli_tesisler,
                                  azim: kayitliIds?.includes(item.id),
                                },
                              },
                            })
                          }}
                        >
                          <EyeSvg />
                          <div style={{ margin: '0 0 0 0.4rem' }}>
                            Görüntüle
                          </div>
                        </button>
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
              <div
                key={item.id}
                className='list-item'
                onClick={() =>
                  navigate('/home', {
                    state: {
                      selectedTesis: {
                        ...item,
                        user: data?.user.kayitli_tesisler,
                        azim: kayitliIds?.includes(item.id),
                      },
                    },
                  })
                }
              >
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
                    margin: '0 0 0 0.5rem',
                    width: '100%',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      width: '100%',
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
                        marginRight: '.5rem',
                        justifyContent: 'space-between',
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
              </div>
            ))}
          </div>
        )}

        {checkTesisler()?.length > 0 && (
          <>
            <div className='' style={{ margin: '0 1rem', color: '#205c42' }}>
              <div className=''>{'Kayıt Olabileceğiniz Tesisler'}</div>
              {checkTesisler().map((item) => (
                <div
                  key={item.id}
                  className='list-item'
                  onClick={() =>
                    navigate('/home', {
                      state: {
                        selectedTesis: {
                          ...item,
                          user: data?.user.kayitli_tesisler,
                          azim: kayitliIds?.includes(item.id),
                        },
                      },
                    })
                  }
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
                          e.stopPropagation()
                          window.open(
                            `${process.env.REACT_APP_ADDITIONAL_URL}/?token=${token}`,
                            '_self'
                          )
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
