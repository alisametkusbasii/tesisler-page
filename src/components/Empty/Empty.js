import React from 'react'
import Lottie from 'react-lottie'
import { CardBody } from 'reactstrap'
import * as animationData from '../assets/icerik_bulunamadi.json'
import SorrySvg from '../assets/icons/SorrySvg'
import './Empty.css'

const Empty = ({ tubitak = false, theatre = false }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <div className='emptyCard' style={theatre ? { padding: '2rem 0' } : {}}>
      <CardBody>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            with: '100%',
            alignItems: 'center',
          }}
        >
          {tubitak ? (
            <div style={{ margin: '1rem' }}>
              <SorrySvg width={75} height={75} />
            </div>
          ) : (
            <Lottie options={defaultOptions} height={100} width={100} />
          )}

          {tubitak ? (
            <div
              style={{
                textAlign: 'center',
                paddingLeft: '15px',
                paddingRight: '15px',
              }}
            >
              <p
                style={{
                  textAlign: 'center',
                  fontSize: '0.8rem',
                  color: 'gray',
                  lineHeight: 1.6,
                }}
              >
                Uygulamaya kayıt olduğunuz hesap ile kayıtlarımızda eşleşen bir{' '}
                <b>öğrenci bilgisi </b> bulunamadı. Öğrencinin Karatay'da yer
                alan bir okulda kayıtlı olduğundan eminseniz okul müdürünüz ile
                irtibata geçiniz.
                <br />
                <br />
                Öğrencinin velisi iseniz yukarıda yer alan{' '}
                <b>"Başvuruyu Kim Yapıyor"</b> alanından <b>"Veli"</b>{' '}
                seçeneğini seçerek başvuruyu gerçekleştirebilirsiniz.
              </p>
            </div>
          ) : theatre ? (
            'Henüz bir bilet almadınız.'
          ) : (
            'Henüz yayınlanmış aktif bir başvuru bulunmamaktadır.'
          )}
        </div>
      </CardBody>
    </div>
  )
}

export default Empty
