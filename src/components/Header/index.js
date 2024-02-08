import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import LogoSvg from '../../assets/icons/LogoSvg'
import './Header.css'

const Header = ({ backButton = true, onClick }) => {
  const navigate = useNavigate()
  return (
    <div className='' style={{marginTop: '0.2rem'}}>
      <div style={{ minWidth: '100%', minHeight: '2.5rem' }} />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {backButton ? (
          <div>
            <button
              onClick={onClick}
              style={{
                display: 'flex',
                justifyContent: 'center',
                border: 'none',
                backgroundColor: '#fff',
              }}
            >
              <FontAwesomeIcon
                style={{
                  backgroundColor: '#F6F6F6',
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
            </button>
          </div>
        ) : (
          <div>
            <div
              style={{
                padding: '0.7rem',
                height: '0.7rem',
                width: '2.8rem',
              }}
            ></div>
          </div>
        )}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '1rem 0',
          }}
        >
          <button
            className='logo'
            onClick={(e) => {
              e.stopPropagation()
              navigate('/')
            }}
            style={{ backgroundColor: 'inherit', borderStyle: 'none' }}
          >
            <LogoSvg width={'7rem'} />
          </button>
        </div>
        <div style={{ width: '10vw' }}></div>
      </div>
    </div>
  )
}

Header.propTypes = {
  backButton: PropTypes.bool,
}

export default Header
