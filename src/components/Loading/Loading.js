import React from 'react';
import { Spinner } from 'reactstrap';
import Lottie from 'react-lottie';
import * as animationData from '../../src/assets/middle-lottie-animation.json';
import './Loading.css';

const Loading = ({ text, formText, formLodading = false }) => {
  // let loadingValue = 0;

  // while (loadingValue < 100) {
  //   loadingValue += 5;
  // }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {formLodading ? (
        <>
          <div style={{ with: '100%', marginTop: '0.5rem', marginBottom: -40 }}>
            <Lottie options={defaultOptions} height={200} width={200} />
          </div>
        </>
      ) : (
        <Spinner className='loading' type='grow'></Spinner>
      )}

      <div
        style={{
          marginTop: '1rem',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        {formText ? formText : null}
        {formText ? <br /> : null}
        {text}
      </div>
      {/* {formText ? (
        <Progress color='success' value={50} style={{ zIndex: 998 }} />
      ) : null} */}
    </div>
  );
};

export default Loading;
