// DisplayCV.jsx
import React from 'react';
import "./displayCV.css"

function DisplayCV({ genInfo, eduInfo, education, work }) {
    
    function formatDateString(dateString) {
        // Parse the date string
        const date = new Date(dateString);
        // Extract day, month, and year
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();
        // Return formatted date string
        return `${day}.${month}.${year}`;
    }
    
    return (
        <div className='cv__displayCV-container'>
            <div className='cv_displayCV-header'>
                <div className='cv_displayCV-name'>
                    {genInfo ? <h2>{genInfo.firstName}</h2> : <h2>Životopis</h2>}
                    {genInfo.lastName && <h2>{genInfo.lastName}</h2>}
                </div>
                <div className='displayCV-underheader'>
                    {genInfo.email && 
                        (
                        <>
                            <i className='cv_displayCV-underheader-icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                </svg>
                            </i>
                            <p>{genInfo.email}</p>
                        </>
                    )}
                    {genInfo.tel && (
                        <>
                            <i className='cv_displayCV-underheader-icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                                    <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clipRule="evenodd" />
                                </svg>

                            </i>
                            <p>{genInfo.tel}</p>
                        </>
                    )}
                    
                    {genInfo.address && (
                        
                        <>
                            <i className='cv_displayCV-underheader-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                            </svg>

                            </i>
                            {genInfo.zip ? <p>{genInfo.address}, {genInfo.zip}</p> : <p>{genInfo.address}</p>}
                        </>
                    )}

                    {genInfo.city && (
                        
                        <>
                            <p>{genInfo.city}</p>
                        </>
                    )}
                </div>
            </div>
            <div className='cv_displayCV-body'>
                <div className='cv_displayCV-body_content'>
                    {Object.values(education).some(value => !!value) && <h3>Vzdělání</h3>}
                    {education.map(edu => (
                        <div className='cv_displayCV-body_content-education' key={edu.id}>
                            <p>{edu.schoolName}, {edu.schoolCity}</p>
                            <p>{formatDateString(edu.startDate)} - {formatDateString(edu.endDate)}</p>
                        </div>
                    ))}
                    {Object.values(work).some(value => !!value) && <h3>Zaměstnání</h3>}
                    {work.map(work => (
                        <div className='cv_displayCV-body_content-education' key={work.id}>
                            <p>{work.workName}, {work.workCity}</p>
                            <p>{formatDateString(work.startDate)} - {formatDateString(work.endDate)}</p>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    );
}

export default DisplayCV;
