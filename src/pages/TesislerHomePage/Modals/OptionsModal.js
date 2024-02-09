import React from 'react'
import Modal from 'react-bootstrap/Modal'

import './OptionsModal.css'

const OptionsModal = (props) => {
  const options = props.data?.options ? JSON.parse(props.data?.options) : []
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      style={{
        userSelect: 'none',
      }}
      size='sm'
      backdrop='static'
      centered
    >
      <Modal.Body className='listBody'>
        <div className='modalBody'>
          <div className='modalTitle'>Tesis Özellikleri</div>
          {options?.map((option, i) => (
            <div className='option' key={i}>{`* ${option}`}</div>
          ))}
          <div
            style={{
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              top: '-30px',
              right: '-25px',
              backgroundColor: '#D12F2F',
              padding: '2px 8px',
              borderRadius: '100px',
            }}
            onClick={props.onHide}
          >
            <div style={{ fontSize: 17, color: '#fff', textAlign: 'center' }}>
              X
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default OptionsModal
