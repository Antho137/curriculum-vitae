import React from "react";

const CVData = ({ cvInfos, onUpdateInfo }) => {    

    return (
        <div className="cv-data">
            {cvInfos.map((info, index) => (
                <div key={index}>
                    <h3>General Information</h3>
                    <p><span>Name:</span> {info.name}</p>
                    <p><span>Email:</span> {info.email}</p>
                    <p><span>Phone:</span> {info.phone}</p>

                    <h3>Educational experience</h3>
                    <p><span>School:</span> {info.school}</p>
                    <p><span>Study:</span> {info.title}</p>
                    <p><span>Date:</span> {info.date}</p>

                    <h3>Practical experience</h3>
                    <p><span>Company:</span> {info.company}</p>
                    <p><span>Position:</span> {info.position}</p>
                    <p><span>Main job:</span> {info.responsibility}</p>
                    <p><span>From:</span> {info.dateFrom} <span>to:</span> {info.dateTo}</p>

                    <button className="edit-btn" onClick={() => onUpdateInfo(index, info)}>Edit</button>
                </div>
            ))}
        </div>           
    );
};

export default CVData;