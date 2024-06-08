import React, { useState } from "react";

function Curriculum({ onSave }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [school, setSchool] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [responsibility, setResponsibility] = useState('');
    const [dateFrom, setDateFrom] = useState('');    
    const [dateTo, setDateTo] = useState('');
         
    const handleSubmit = (event) => {
        event.preventDefault();
        onSave({ name, email, phone, school, title, date, company, position, responsibility, dateFrom, dateTo });
        setName('');
        setEmail('');
        setPhone('');
        setSchool('');
        setTitle('');
        setDate('');
        setCompany('');
        setPosition('');
        setResponsibility('');
        setDateFrom('');
        setDateTo('');
    };

    return (
        <div className="curriculum">
            <form onSubmit={handleSubmit} autoComplete="off">
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
                    <button className="save-btn" type="submit">Save</button>
                </div>
            </form>
        </div>
    );
}

export default Curriculum;
