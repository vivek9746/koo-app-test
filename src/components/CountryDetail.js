import React from 'react'
import './CountryDetails.css';

const CountryDetail = (props) => {

    const { countryName,countryCode, name, flag, alpha2Code,callingCodes } = props;
  
    return (
      <div style={{display:'flex',flexDirection:'column'}} onClick={()=>{
          countryName(alpha2Code+" +"+callingCodes);
      }}>
      
        <div className='DetailDiv'>
          <img src={flag} alt={name} style={{ width: "20px", height: "20px" }} />
          <text>{name}</text>
          <text>{callingCodes[0]}</text>
          </div>

        
      </div>
    );
  };

export default CountryDetail; 