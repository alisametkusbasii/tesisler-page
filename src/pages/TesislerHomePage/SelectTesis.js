import React from 'react'
import CircleRedSvg from '../../assets/icons/CircleRedSvg'
import CircleGreenSvg from '../../assets/icons/CircleGreenSvg'
// import LocationPinBlackSvg from '../../assets/icons/LocationPinBlackSvg'
// import ArrowDownSvg from '../../assets/icons/ArrowDownSvg'
// import Modal from 'react-bootstrap/Modal'

const SelectTesis = ({ data, onSelect, selectedItem }) => {
  // const [isSelectModalVisible, setIsSelectModalVisible] = useState(false)
  return (
    <>
      <div className='selectTesisTitle'>
        <div className='title'>{selectedItem?.title}</div>
        <div className='infoDiv'>
          <div className='infoWrapper'>
            <CircleGreenSvg width={10} height={10} />
            <div className='info'>{`Açılış ${selectedItem?.acilis_saati}`}</div>
          </div>
          <div className='infoWrapper'>
            <CircleRedSvg width={10} height={10} />
            <div className='info'>{`Kapanış ${selectedItem?.kapanis_saati}`}</div>
          </div>
        </div>
      </div>
      {/* <div className='select' onClick={() => setIsSelectModalVisible(true)}>
        <div className='selectIconTitle'>
          <div>
            <LocationPinBlackSvg width={18} height={18} />{' '}
          </div>
          <div>{selectedItem?.title}</div>
        </div>
        <div>
          <ArrowDownSvg width={18} height={18} stroke={'#b4b4b4'} />{' '}
        </div>
      </div> */}
      {/* <Modal
        show={isSelectModalVisible}
        onHide={() => setIsSelectModalVisible(false)}
        style={{
          userSelect: 'none',
        }}
        dialogClassName='backdropClassName'
        size='sm'
        //   backdrop='static'
        centered
      >
        <Modal.Body className='listBody'>
          {data?.map((item) => (
            <div
              className='listItem'
              key={item.id}
              onClick={() => {
                onSelect(item)
                setIsSelectModalVisible(false)
              }}
            >
              {item.tesis.title}
            </div>
          ))}
          <div
            style={{ position: 'absolute', top: '15px', right: '15px' }}
            onClick={() => setIsSelectModalVisible(false)}
          >
            X
          </div>
        </Modal.Body>
      </Modal> */}
    </>
  )
}

export default SelectTesis
