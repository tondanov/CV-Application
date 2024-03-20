import React from 'react';
import { useState } from 'react';
import "./workInfo.css"

function WorkInfo({ workInfo, handleWorkInfoChange, addWork, setWorkInfo, work, deleteItem, setWork}) {
  
  const [isOpen,setIsOpen] = useState(false)

  function handleSubmit(e) {
    e.preventDefault();
    if (WorkInfo === "") return 
    
    const isAnyFieldEmpty = Object.values(workInfo).some(value => value.trim() === "");

    if (isAnyFieldEmpty) {
        alert('Prosím vyplňte všechny pole v sekci "Zaměstnaní"');
        return;
    } else {
      addWork();
      setWorkInfo({
      workName: "",
      workCity: "",
      startDate: "",
      endDate: ""
    });
    }
  }

  return (
    <div>
      {isOpen ? 
        <fieldset className='eduInfo-container'>
          <div className='eduInfo-header'>
            <h3>Zaměstnání</h3>
            <button onClick={() => setIsOpen(false)} className='eduInfo-icon'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>
          <form onSubmit={handleSubmit} >
            <div className='eduInfo_dates'>
              <label htmlFor="workName">Zaměstanvatel: </label>
              <input
                type="text"
                id="workName"
                value={workInfo.workName}
                onChange={handleWorkInfoChange}
              />

              <label htmlFor="workCity">Město: </label>
              <input
                type="text"
                id="workCity"
                value={workInfo.workCity}
                onChange={handleWorkInfoChange}
              />
            </div>
            <div className='eduInfo_dates'> 
              <label htmlFor="startDate">Datum Zahájení: </label>
              <input
                  type="date"
                  id="startDate"
                  value={workInfo.startDate}
                  onChange={handleWorkInfoChange}
                />

              <label htmlFor="endDate">Datum Zahájení: </label>
              <input
                  type="date"
                  id="endDate"
                  value={workInfo.endDate}
                  onChange={handleWorkInfoChange}
                />
            </div>
            <button className='eduInfo_button btn'>Hotovo</button>
          </form>
          <div>
              {work.map(work => (
                      <div className="roww" key={work.id}>
                        <h3>{work.workName}</h3>
                        <button onClick={() => deleteItem(work, setWork, work.id)} className='cv_displayCV-body-icon'>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                  </svg>
                        </button>
                      </div>
                  ))}
            </div>
        </fieldset>
      : 
      <fieldset className='eduInfo-container-false'>
        <h3>Zaměstnání</h3>
        <button onClick={() => setIsOpen(true)} className='eduInfo-icon'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        </button>
      </fieldset>

      }
    </div>
  );
}

export default WorkInfo;
