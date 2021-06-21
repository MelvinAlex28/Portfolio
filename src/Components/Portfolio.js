import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        // var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title}><h3>{projects.title}</h3>
               <p className = "info">{projects.description}<span>&bull;</span> <em className="date">{projects.years}</em></p>
               <a href = {projects.url}> Code Link</a>
               
           
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row skill">

         <div className="three columns header-col">

              <h1><span>Projects</span></h1>
         </div>
         <div className="nine columns main-col"> 
                {projects}
            </div>
      </div>

   </section>
    );
  }
}

export default Portfolio;
