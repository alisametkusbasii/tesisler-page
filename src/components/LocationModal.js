import React from 'react'
import Modal from 'react-bootstrap/Modal'
import GoogleMapReact from 'google-map-react'
import Marker from '../assets/png/marker.png'
import { Button } from 'reactstrap'

const MarkerIcon = () => (
  <div>
    <img alt='' src={Marker} width={30} height={30} />
  </div>
)

const LocationModal = (props) => {
  const openAddressOnMap = (e) => {
    e.preventDefault()
    window.location.href = `https://www.google.com/maps/search/?api=1&query=${props.location.lat},${props.location.lng}`
  }
  const defaultProps = {
    center: [Number(props.location.lat), Number(props.location.lng)],
    zoom: 16,
  }

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
        <div className='label' style={{ fontSize: '18px' }}>
          {props.location.name}
        </div>
        <div style={{ height: '300px', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyDzEzefsHqb1EbaN7DBemUAmMYQRrsdXH0',
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <MarkerIcon lat={props.location.lat} lng={props.location.lng} />
          </GoogleMapReact>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '1rem',
          }}
        >
          <Button
            block
            className='tubitakTamamla'
            onClick={openAddressOnMap}
            style={{
              marginLeft: '1rem',
              marginRight: '1rem',
              backgroundColor: '#285843',
              borderRadius: '20px',
              padding: '0.6rem 0',
            }}
          >
            Yol Tarifi Al
          </Button>
        </div>
        <div
          style={{ position: 'absolute', top: '15px', right: '15px' }}
          onClick={props.onHide}
        >
          X
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default LocationModal
