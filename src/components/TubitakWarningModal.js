import React from 'react'
import Modal from 'react-bootstrap/Modal'
import WarningSvg from '../assets/icons/WarningSvg'
import { Button } from 'reactstrap'

const TubitakWarningModal = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      style={{
        userSelect: 'none',
      }}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      backdrop='static'
      centered
    >
      <Modal.Body>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <WarningSvg width={'4rem'} heigth={'4rem'} />
          {props.state === 'noSuccess' ? (
            <>
              <div className='warningTitle'>Öğrenci Bilgisi Bulunamadı</div>
              <div className='warningDesc'>
                Kayıtlarımızda, girmiş olduğunuz T.C. Kimlik numarasına{' '}
                <b>{`(${props.studendttc})`}</b> ait öğrenci bilgisine
                ulaşılamadı. Bir hata olduğunu düşünüyorsanız okul müdürünüz ile
                irtibata geçiniz.
              </div>
            </>
          ) : props.state === 'success' ? (
            <>
              <div className='warningTitle'>Adresinizi Onaylıyor Musunuz?</div>
              <div className='warningDesc'>
                Yanlış adres beyanı yapmanız durumunda kargolarınız tarafınıza
                ulaşmayacak ve sonradan adres düzeltme imkanına sahip
                olamayacaksınız.
              </div>
              <div className='adressTitle'>Derginin Gönderileceği Adres</div>
              <div className='adressDiv'>{props.secondadress}</div>
            </>
          ) : props.state === 'checkbox' ? (
            <>
              {/* <div className='warningTitle'>Kullanım koşulları</div> */}
              <div
                className='warningDesc'
                style={{
                  marginBottom: '1rem',
                }}
              >
                Başvuruyu tamamlamak için kullanım koşullarını kabul etmeniz
                gerekmektedir.
              </div>
            </>
          ) : props.state === 'selectList' ? (
            <>
              {/* <div className='warningTitle'>Kullanım koşulları</div> */}
              <div
                className='warningDesc'
                style={{
                  marginBottom: '1rem',
                }}
              >
                Bir tesis seçmeniz gerekmektedir.
              </div>
            </>
          ) : props.state === 'childLimit' ? (
            <>
              {/* <div className='warningTitle'>Kullanım koşulları</div> */}
              <div
                className='warningDesc'
                style={{
                  marginBottom: '1rem',
                }}
              >
                En fazla 5 çocuk ekleyebilirsiniz.
              </div>
            </>
          ) : (
            props.state === 'section' && (
              <>
                {/* <div className='warningTitle'>Kullanım koşulları</div> */}
                <div
                  className='warningDesc'
                  style={{
                    marginBottom: '1rem',
                  }}
                >
                  Başvuruyu tamamlamak için lütfen bölümünüzü seçiniz.
                </div>
              </>
            )
          )}
        </div>
        {props.state === 'noSuccess' ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '1rem',
              marginBottom: '1rem',
            }}
          >
            <Button
              block
              className='tubitakTamamla'
              onClick={props.onHide}
              style={{
                backgroundColor: '#285843',
                borderRadius: '20px',
                padding: '0.6rem 0',
              }}
            >
              Yeniden Sorgula
            </Button>
          </div>
        ) : props.state === 'success' ? (
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '1rem',
                marginBottom: '1rem',
              }}
            >
              <Button
                block
                className='tubitakTamamla'
                onClick={props.ogrenciBasvuruOnClick}
                style={{
                  backgroundColor: '#285843',
                  borderRadius: '20px',
                  padding: '0.6rem 0',
                }}
              >
                Başvuruyu Tamamla
              </Button>
            </div>
            <div
              onClick={props.onHide}
              style={{
                textAlign: 'center',
                textDecoration: 'underline',
              }}
            >
              Bilgilerimi Düzenle
            </div>
          </>
        ) : props.state === 'checkbox' ? (
          <>
            <div
              onClick={props.onHide}
              style={{
                textAlign: 'center',
                textDecoration: 'underline',
              }}
            >
              Başvuruya Geri Dön
            </div>
          </>
        ) : props.state === 'selectList' ? (
          <>
            <div
              onClick={props.onHide}
              style={{
                textAlign: 'center',
                textDecoration: 'underline',
              }}
            >
              Başvuruya Geri Dön
            </div>
          </>
        ) : props.state === 'childLimit' ? (
          <>
            <div
              onClick={props.onHide}
              style={{
                textAlign: 'center',
                textDecoration: 'underline',
              }}
            >
              Başvuruya Geri Dön
            </div>
          </>
        ) : (
          props.state === 'section' && (
            <>
              <div
                onClick={props.onHide}
                style={{
                  textAlign: 'center',
                  textDecoration: 'underline',
                }}
              >
                Başvuruya Geri Dön
              </div>
            </>
          )
        )}
        {props.state === 'age' && (
          <>
            <div
              className='warningDesc'
              style={{
                marginBottom: '1rem',
              }}
            >
              {props.message}
            </div>
            <div
              onClick={props.onHide}
              style={{
                textAlign: 'center',
                textDecoration: 'underline',
              }}
            >
              Tamam
            </div>
          </>
        )}
        {props.state === 'responseMessage' ? (
          <>
            <div
              className='warningDesc'
              style={{
                marginBottom: '1rem',
              }}
            >
              {props.message}
            </div>
            <div
              onClick={props.onHide}
              style={{
                textAlign: 'center',
                textDecoration: 'underline',
              }}
            >
              Tamam
            </div>
          </>
        ) : (
          props.state === 'files' && (
            <>
              <div
                className='warningDesc'
                style={{
                  marginBottom: '1rem',
                }}
              >
                {props.message}
              </div>
              <div
                onClick={props.onHide}
                style={{
                  textAlign: 'center',
                  textDecoration: 'underline',
                }}
              >
                Başvuruya Geri Dön
              </div>
            </>
          )
        )}
      </Modal.Body>
    </Modal>
  )
}

export default TubitakWarningModal
