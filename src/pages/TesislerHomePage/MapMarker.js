import React from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from '../../assets/png/marker-red.png'
import IconButton from '../../components/IconButton'
import InfoCiecleSvg from '../../assets/icons/InfoCircleSvg'
import PhoneSvg from '../../assets/icons/PhoneSvg'

const MarkerIcon = () => (
  <div>
    <img alt='' src={Marker} width={30} height={30} />
  </div>
)

const MapMarker = (props) => {
  return (
    <div style={{ marginTop: '1rem' }}>
      <div className='title'> Tesisin Konumu</div>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '20vh',
          border: '1px solid #d4d4d4',
          padding: '5px',
          borderRadius: '5px',
          margin: '0.5rem 0 0 0',
          overflow: 'hidden',
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyDzEzefsHqb1EbaN7DBemUAmMYQRrsdXH0',
          }}
          defaultCenter={{
            lat: props.selectedTesis.location.lat,
            lng: props.selectedTesis.location.lng,
          }}
          defaultZoom={12}
        >
          <MarkerIcon
            lat={props.selectedTesis.location.lat}
            lng={props.selectedTesis.location.lng}
          />
        </GoogleMapReact>
      </div>
      <div className='buttonsDiv'>
        <IconButton
          backgroundColor={'#277151'}
          icon={<InfoCiecleSvg width={20} height={20} />}
          text={'Tesisin Özellikleri'}
          onClick={() => props.setOptionModalOpen(true)}
        />
        <IconButton
          backgroundColor={'#303030'}
          icon={<PhoneSvg width={18} height={18} />}
          text={'Tesise Ulaşın'}
          onClick={() => window.open(`tel:${props.selectedTesis.telNo}`)}
        />
      </div>
    </div>
  )
}

export default MapMarker
