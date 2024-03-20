// App.jsx
import React, { useEffect, useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import DisplayCV from "./components/displayCV/DisplayCV";
import GenInfo from './components/fieldsetInputs/GenInfo';
import EduInfo from './components/eduInfo/EduInfo';
import WorkInfo from "./components/workInfo/WorkInfo";
import './App.css';


function App() {
  
  const cvRef = useRef(null);

  const handleDownloadImage = () => {
    html2canvas(cvRef.current).then(canvas => {
      const link = document.createElement('a');
      link.download = 'cv_image.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  };
  
  const [genInfo, setGenInfo] = useState(() => {
    const storedGenInfo = localStorage.getItem('genInfo');
    return storedGenInfo ? JSON.parse(storedGenInfo) : {
      firstName: "",
      lastName: "",
      email: "",
      tel: "",
      address: "",
      zip: "",
      city: "",
    };
  });

  
  const[eduInfo, setEduInfo] = useState({
    schoolName: "",
    schoolCity: "",
    startDate: "",
    endDate: "",
  })

  const[workInfo, setWorkInfo] = useState({
    workName: "",
    workCity: "",
    startDate: "",
    endDate: "",
  })

  const [education, setEducation] = useState(() => {
    const localValue = localStorage.getItem("EDUCATION_ITEMS");
    return localValue ? JSON.parse(localValue) : [];
  });
  
  const [work, setWork] = useState(() => {
    const localValue = localStorage.getItem("WORK_ITEMS");
    return localValue ? JSON.parse(localValue) : [];
  });
  
  useEffect(() => {
    localStorage.setItem("EDUCATION_ITEMS", JSON.stringify(education));
  }, [education]);
  
  useEffect(() => {
    localStorage.setItem("WORK_ITEMS", JSON.stringify(work));
  }, [work]);

  useEffect(() => {
    localStorage.setItem('genInfo', JSON.stringify(genInfo));
  }, [genInfo]);

  

  function handleInputChange(e) {
    const updatedInfo = {
      ...genInfo,
      [e.target.id]: e.target.value,
    };
    setGenInfo(updatedInfo);
  }

  function handleEduInfoChange(e) {
    const updatedInfo = {
      ...eduInfo,
      [e.target.id]: e.target.value,
    };
    setEduInfo(updatedInfo);
  }

  function handleWorkInfoChange(e) {
    const updatedInfo = {
      ...workInfo,
      [e.target.id]: e.target.value,
    };
    setWorkInfo(updatedInfo);
  }

  function addEducation() {
    setEducation(currentEducation => {
      return [
        ...currentEducation,
        { id: crypto.randomUUID(), schoolName: eduInfo.schoolName, schoolCity: eduInfo.schoolCity, startDate: eduInfo.startDate, endDate: eduInfo.endDate  }
      ]
    });
  }

  function deleteItem(array, setArray, id) {
    setArray(currentArray => {
      return currentArray.filter(item => item.id !== id);
    });
  }

  function addWork() {
    setWork(currentWork => {
      return [
        ...currentWork,
        { id: crypto.randomUUID(), workName: workInfo.workName, workCity: workInfo.workCity, startDate: workInfo.startDate, endDate: workInfo.endDate  }
      ]
    });
  }

  return (
    <>
      <div className='row'>
        <div className='left-column'>
          <GenInfo genInfo={genInfo} handleInputChange={handleInputChange} />
          <EduInfo eduInfo={eduInfo} handleEduInfoChange={handleEduInfoChange} addEducation={addEducation} setEduInfo={setEduInfo} education={education} deleteItem={deleteItem} setEducation={setEducation}/>
          <WorkInfo workInfo={workInfo} handleWorkInfoChange={handleWorkInfoChange} addWork={addWork} setWorkInfo={setWorkInfo} work={work} deleteItem={deleteItem} setWork={setWork} />
          <button onClick={handleDownloadImage} className='btn cv_app-download-button' >Download CV Image</button>
        </div>
        <div className='right-column' ref={cvRef}>
          <DisplayCV genInfo={genInfo} eduInfo={eduInfo} education={education} work={work}/>
        </div>
      </div>
    </>
  );
}

export default App;
