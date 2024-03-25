import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.Tenure}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row certifications">
          <div className="three columns header-col">
            <h1><span>Certifications</span></h1>
          </div>
          <div className="nine columns main-col">
            {
              resumeData.certifications && resumeData.certifications.map((item) => {
                return (
                  // <div className="row item">
                    <div className="certifications_list">
                      <img className="certifications_image" src={item.logo}/>
                      <small className='certifications_text'>{item.name}</small>
                    </div>
                  // </div>
                )
              })
            }
          </div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>
              {resumeData.skillsDescription}
            </p>
            <div className="bars">
              <div className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return (
                      <div className="skills_div">
                        {/* <span className={`bar-expand ${item.skillname.toLowerCase()}`}></span> */}
                        <small>{item.skillname}</small>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}