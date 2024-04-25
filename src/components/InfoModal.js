import React from 'react'
import Modal from 'react-bootstrap/Modal'
import InputDisabled from './InputDisabled'
import InfoCircleRedSvg from '../assets/icons/InfoCircleRedSvg'

const InfoModal = (props) => {
  console.log('props: ', props.infos)
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      style={{
        userSelect: 'none',
      }}
      size='sm'
      //   backdrop='static'
      centered
    >
      <Modal.Body className=''>
        <div className='label' style={{ fontSize: '18px', color: '#205c42' }}>
          {props.title}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '1rem 0 1.5rem 0',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              // margin: '2rem 1.5rem 0 1.5rem',
              borderRadius: '10px',
              backgroundColor: '#E9C8C8',
              padding: '0.8rem 0.4rem',
            }}
          >
            <div style={{ padding: '0 1rem 0 0.5rem' }}>
              <InfoCircleRedSvg width={'1.2rem'} height={'1.2rem'} />
            </div>
            <div style={{ fontSize: '13px' }}>
              Kaydınızın gerçekleştirilmesi için başvuru yaptığınız tesise{' '}
              <b>3 iş günü</b> içerisinde giderek kayıt işleminizi tamamlamanız
              gerekmektedir. <br /> <br /> Belirtilen süre içerisinde
              tamamlanmayan başvurular otomatik olarak iptal edilmektedir.
            </div>
          </div>
        </div>
        <>
          <div className='userInfoDiv'>
            <div className='form-input-div'>
              <InputDisabled
                label={'Adınız'}
                value={props.infos.person.name.toUpperCase()}
              />
            </div>
            <div className='form-input-div'>
              <InputDisabled
                label={'Soyadınız'}
                value={props.infos.person.surname.toUpperCase()}
              />
            </div>
          </div>

          <div
            style={{
              width: '98%',
            }}
          >
            <InputDisabled
              label={'İkamet Adresiniz'}
              value={props.infos.person.address.toUpperCase()}
              textArea={true}
            />
          </div>
        </>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            backgroundColor: 'red',
            padding: '0 7px 2px 8px',
            color: '#fff',
            top: '-15px',
            right: '-5px',
            borderRadius: '50%',
          }}
          onClick={props.onHide}
        >
          X
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default InfoModal
