import React from 'react'
import Modal from 'react-bootstrap/Modal'

import './DayCountModal.css'

const countData = [
  {
    id: 0,
    text: 'Son 7 Gün',
    value: 7,
  },
  {
    id: 1,
    text: 'Son 14 Gün',
    value: 14,
  },
  {
    id: 2,
    text: 'Son 28 Gün',
    value: 28,
  },
]

const DayCountModal = (props) => {
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
      <Modal.Body className='listBody'>
        <div className='modalBody'>
          {/* <div className='title'>{''}</div> */}
          {countData?.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                padding: '4px 8px',
                borderBottom: '1px solid #d4d4d4',
              }}
              onClick={() => {
                props.setLastDayCount(item.value)
                props.onHide()
              }}
            >
              <div className='item' key={item.id}>{`${item.text}`}</div>
            </div>
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

export default DayCountModal
