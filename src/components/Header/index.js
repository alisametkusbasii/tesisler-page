import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Row, Col, Container, Button } from 'reactstrap'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import LogoSvg from '../../assets/icons/LogoSvg'
import './Header.css'

const Header = ({ backButton = true, onClick }) => {
  const navigate = useNavigate()
  return (
    <Container>
      <Row style={{ minWidth: '100%', minHeight: '2.5rem' }} />
      <Row
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        {backButton ? (
          <Col>
            <Button
              onClick={onClick}
              style={{
                display: 'flex',
                justifyContent: 'center',
                border: 'none',
                backgroundColor: '#fff',
                margin: '0 0 0 -.5rem'
              }}
            >
              <FontAwesomeIcon
                style={{
                  backgroundColor: '#EFEFEF',
                  alignItems: 'center',
                  color: '#285843',
                  borderRadius: '50px',
                  padding: '0.7rem',
                  height: '0.7rem',
                  width: '0.7rem',
                }}
                icon={icon({ name: 'chevron-left', style: 'solid' })}
                size='sm'
              />
            </Button>
          </Col>
        ) : (
          <Col>
            <div style={{ width: '100%' }}></div>
          </Col>
        )}
        <Col
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '1rem',
          }}
        >
          <Button
            className='logo'
            onClick={(e) => {
              e.stopPropagation()
              navigate('/')
            }}
            style={{ backgroundColor: 'inherit', borderStyle: 'none' }}
          >
            <LogoSvg width={'7rem'} />
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

Header.propTypes = {
  backButton: PropTypes.bool,
}

export default Header
