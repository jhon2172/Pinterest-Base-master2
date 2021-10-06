import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell,faComment,faChevronCircleDown,faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {faPinterest} from '@fortawesome/free-brands-svg-icons';

const HeaderLayout = () => {
  return <div className='headerL'>
    <div className='icon-pinterest' style={{fontSize:"40px",color:"red", display:"flex",cursor:'pointer' } }>
    <FontAwesomeIcon icon={faPinterest}  />
    </div>
    
      <h2 style={{cursor:'pointer'}} className='btn-inicio'>inicio</h2>
      <h2 style={{cursor:'pointer'}}className='btn-h'>Hoy</h2>
      <div style={{cursor:'pointer'}}className='dv-input'>
      <input className='inputHeader' placeholder=' 🔎 Buscar'></input>   


      <div className='icon-bell' style={{display:"flex" ,color:"gray",fontSize:"25px"}}>
        
          <FontAwesomeIcon className='bell' icon={faBell} style={{padding:'5px',cursor:'pointer'}}/>
        
          <FontAwesomeIcon className='comment' icon={faComment} style={{padding:'5px',cursor:'pointer'}} />

          <FontAwesomeIcon className='comment' icon={faUserCircle} style={{padding:'5px',cursor:'pointer'}} />

          <FontAwesomeIcon className='comment' icon={faChevronCircleDown} style={{padding:'5px',cursor:'pointer'}} />
          
      </div>
      
        
        
      

      
      
    </div>
  </div>;
  
};


 


export default HeaderLayout;
