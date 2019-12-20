import React from 'react';
import './Form.css';

const Form = (props) => {
  return (
    <div >
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={props.getWeather}>
        <input
          style={{
            width: '80vw',
            height: '7vh',
            backgroundColor: 'rgba(7, 238, 242, 0.3)',
            border: 'none',
            textAlign: 'center',
            fontFamily: 'Amatic SC, cursive',
            fontSize: 24,
            fontWeight: 600,
            borderRadius: 10,
            marginTop: '1vh',
            color: 'black'
          }}
          type='text'
          placeholder='Enter City'
          name='city'
        />
        {/* <button
          style={{ backgroundColor: 'blue' }}
        >Submit</button> */}
        <button className="btn"><span>Submit</span></button>
      </form>
    </div>
  )
}

export default Form;