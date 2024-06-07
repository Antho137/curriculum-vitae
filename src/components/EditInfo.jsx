import React, { useState } from "react";

function EditInfo({ info, onUpdateInfo }) {
    const [name, setName] = useState(info.name);
    const [email, setEmail] = useState(info.email);
    const [phone, setPhone] = useState(info.phone);
    const [school, setSchool] = useState(info.school);
    const [title, setTitle] = useState(info.title);
    const [date, setDate] = useState(info.date);
    const [company, setCompany] = useState(info.company);
    const [position, setPosition] = useState(info.position);
    const [responsibility, setResponsibility] = useState(info.responsibility);
    const [dateFrom, setDateFrom] = useState(info.dateFrom);    
    const [dateTo, setDateTo] = useState(info.dateTo);
         
    const handleSubmit = (event) => {
        event.preventDefault();
        onUpdateInfo({ ...info, name, email, phone, school, title, date, company, position, responsibility, dateFrom, dateTo });
    };

    return (
        <div className="edit-info">
            <form onSubmit={handleSubmit}>
                <div className="general-info">
                    <h2>General Information</h2>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Tony Full"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            name="email"
                            placeholder="tonyfull3@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            placeholder="+1 833-729-1506"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>
                <div className="educational-exp">
                    <h2>Educational experience</h2>
                    <div>
                        <label htmlFor="school">School Name</label>
                        <input
                            type="text"
                            name="school"
                            placeholder="World People College"
                            value={school}
                            onChange={(e) => setSchool(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="title">Title of study</label>
                        <input 
                            type="text"
                            name="title"
                            placeholder="Software engineering"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="date">Date of study</label>
                        <input
                            type="text"
                            name="date"
                            placeholder="Set 2006 / Jul 2011"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="practical-exp">
                    <h2>Practical experience</h2>
                    <div>
                        <label htmlFor="company">Company Name</label>
                        <input
                            type="text"
                            name="company"
                            placeholder="Google..."
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="position">Position title</label>
                        <input 
                            type="text"
                            name="position"
                            placeholder="Software engineer"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="responsibility">Job responsibility</label>
                        <input
                            type="text"
                            name="responsibility"
                            placeholder="Senior team leader"
                            value={responsibility}
                            onChange={(e) => setResponsibility(e.target.value)}
                        />
                    </div>                
                    <div className="from-to">
                        <div className="date-from">
                            <label htmlFor="dateFrom">Date from</label>
                            <input
                                type="date"
                                name="dateFrom"
                                placeholder="Dec 2011"
                                value={dateFrom}
                                onChange={(e) => setDateFrom(e.target.value)}
                            />
                        </div>
                        <div className="date-to">
                            <label htmlFor="dateTo">Date to</label>
                            <input
                                type="date"
                                name="dateTo"
                                placeholder="Jan 2022"
                                value={dateTo}
                                onChange={(e) => setDateTo(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="button">
                    <button className="edit-btn" type="submit">Edit</button>
                </div>
            </form>
        </div>
    );
}

export default EditInfo;
