import React from 'react';
import { useState } from 'react';
import "./genInfo.css"

function GenInfo({ genInfo, handleInputChange }) {
  
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    
    <>
      {isOpen ? <fieldset className='genInfo-container'>
        <div className='eduInfo-header'>
            <h3>Osobní informace</h3>
            <button onClick={() => setIsOpen(false)} className='eduInfo-icon'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
        </div>
        <label htmlFor="firstName">Jméno: </label>
        <input
          type="text"
          id="firstName"
          value={genInfo.firstName}
          onChange={handleInputChange}
        />

        <label htmlFor="lastName">Příjmení: </label>
        <input
          type="text"
          id="lastName"
          value={genInfo.lastName}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={genInfo.email}
          onChange={handleInputChange}
        />

        <label htmlFor="tel">Telefonní číslo: </label>
        <input
          type="tel"
          id="tel"
          value={genInfo.tel}
          onChange={handleInputChange}
        />

        <label htmlFor="address">Adresa: </label>
        <input
          type="text"
          id="address"
          value={genInfo.address}
          onChange={handleInputChange}
        />

        <label htmlFor="zip">PSČ: </label>
        <input
          type="text"
          id="zip"
          value={genInfo.zip}
          onChange={handleInputChange}
        />

        <label htmlFor="city">Město: </label>
        <input
          type="text"
          id="city"
          value={genInfo.city}
          onChange={handleInputChange}
        />
      </fieldset>
      : 
      <fieldset className='eduInfo-container-false'>
        <h3>Osobní Informace</h3>
        <button onClick={() => setIsOpen(true)} className='eduInfo-icon'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        </button>
      </fieldset>}
      
    </>
  );
}

export default GenInfo;
