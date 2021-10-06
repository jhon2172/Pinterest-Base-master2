import React, { useState } from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUpload} from '@fortawesome/free-solid-svg-icons';
import '../App.css';
const PinCard = (props) => {
const [inHover, setHover] = useState(false);


  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ ..._stylesPinCard.pin_card, ..._stylesPinCard[props.size],position:'relative' }}>
      
      {inHover &&
      <div className='btn-hov'  style={{display:'flex', position:'absolute', zIndex:'1', justifyContent: 'space-between', padding:'10px', boxSizing: 'border-box' ,flexDirection:'column', height:'100%', width:'100%' ,alignItems:'flex-end'}}>
        
        
        <button className='btn-guardar' style={{ display:'flex',alignItems:'center',backgroundColor:'red',border:'transparent',borderRadius:'100px',fontSize:'15px',height:'40px',color:'white',fontWeight:'bold',cursor:'pointer'}}>Guardar</button>
        <h3 style={{ display:'flex',position:'absolute',left:'30px',top:'-5px',color:'white'}}>illustratio...▼ </h3>
        <div style={{display:'flex'}}>
          <FontAwesomeIcon className='bell' icon={faUpload} style={{backgroundColor:'white',fontSize:'20px',border:'transparent',borderRadius:'150px',padding:'5px',margin:'10px',cursor:'pointer'}}/>
          <button className="btn-puntos"style={{display:'flex',alignItems:'flex-start',backgroundColor:'white',border:'transparent',borderRadius:'100px',fontSize:'20px',height:'30px',margin:'10px',cursor:'pointer'}}>...</button>
        </div>
      </div>
      }
      <img id='dd'src={props.image} alt='img'  className={ ` ${inHover ? "img-onHover" : ""} `}  style={{ ..._stylesPinCard.pin_card.image,width:'100%',height:'100%',borderRadius:'16px',zIndex:'0' }} />
      
  </div>

  );
};



const _stylesPinCard = {
  pin_card: {
    margin: '15px 10px',
    padding: 0,
    borderRadius: '16px',
    backgroundColor: 'black',
    top: '100px',
  },
  small: {
    gridRowEnd: 'span 26',
  },
  medium: {
    gridRowEnd: 'span 33',
  },
  large: {
    gridRowEnd: 'span 45',
  },
 
};


export default PinCard;
