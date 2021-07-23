import React from "react";

function Experience() {
  return (
    <div id="experiences" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Experiences</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2006-2009</h3>
            <h4>BACHELOR OF TOURISM AND HOSPITALITY (Student)</h4>
            <h4>Universidade Veiga de Almeida</h4>
            <p>
              {" "}
              This program helped to develop important skills to become the
              professional that I am today. Especially customer services
              talents, work in team collaboration, responsibility and attention
              to detail.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2011-2018</h3>
            <h4>Corporate Travel Sales Consultant</h4>
            <h4>Carlson Wagonlit Travel</h4>
            <p>
              {" "}
              This experience was important to build great customer service
              skills and adapt to any situation and fast solution thinking to
              solve problems to help our team and our clients. Due to
              high-quality services, I was promoted to the team of consultants
              for the executive board of Vale SA.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019-2021</h3>
            <h4>SOFTWARE ENGINEERING TECHNICIAN (Student)</h4>
            <h4>Centennial College</h4>
            <p>
              {" "}
              This program emphasizes object-oriented software design
              methodologies, user-oriented interface design, C#, Java, Oracle,
              HTML5/JavaScript, MEAN stack, software testing and QA. Though a
              combination of lectures followed by computer software labs, team
              work projects and hands-on exercises I was able to develop skills
              in the area of front-end responsive web design using HTML, CSS,
              JavaScript, Bootstrap, NodeJS, Angular, React, MongoDB and
              Express.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020-2021</h3>
            <h4>STUDENT RESEARCH – DEVELOPER</h4>
            <h4>WIMTACH - Centennial College</h4>
            <p>
              {" "}
              This experience at WIMTACH allowed me to use the knowledge skills
              that I gain in class and work on a real-world project. I was able
              to put into practice Agile principles and programming coding to
              develop a fully responsive web application using NodeJS, MongoDB,
              Express, Bootstrap. Also, includes Google Authentication and Text
              to Speech features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
