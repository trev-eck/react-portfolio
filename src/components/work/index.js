import React from 'react'
import "./style.css"

export default function Work() {
    return (
        <div id="container2">
        <div id="work">
          <h2>Work</h2>
        </div>
        <div id="projects">
          {/* <!-- each project is wrapped with an A tag to link to github projects, the descriptions given for each linked project are not accurate and simply reflect the information we will be learning in this course--> */}
          <a href="https://te-pokedex-irl.herokuapp.com/" target="_blank">
            {/* <!-- each project references the project class for general formatting and then a secondary class for individual formatting --> */}
            <section className="project main-p">
              {/* <!-- creates a box of text to describe the project --> */}
              <div className="text-box">
                <h3>Pokedex IRL</h3>
                <p>JS / HBS / SQL</p>
              </div>
            </section>
          </a>
          <a
            href="https://trev-eck.github.io/Quarantine-and-Chill/"
            target="_blank"
          >
            <section className="project proj-2">
              <div className="text-box">
                <h3>Quarantine and Chill</h3>
                <p>HTML / JS</p>
              </div>
            </section>
          </a>
          <a href="https://trev-eck.github.io/weather-dashboard/" target="_blank">
            <section className="project proj-3">
              <div className="text-box">
                <h3>Weather Dashboard</h3>
                <p>JS / HTML</p>
              </div>
            </section>
          </a>
          <a href="https://github.com/trev-eck/team-profile-generator" target="_blank">
            <section className="project proj-4">
              <div className="text-box">
                <h3>Team Profile Generator</h3>
                <p>JS / HTML</p>
              </div>
            </section>
          </a>
          <a href="https://te-employee-tracker.herokuapp.com/" target="_blank">
            <section className="project proj-5">
              <div className="text-box">
                <h3>Employee Directory</h3>
                <p>React</p>
              </div>
            </section>
          </a>
        </div>
      </div>
    )
}
