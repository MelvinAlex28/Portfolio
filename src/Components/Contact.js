import React, { Component } from 'react';


class Contact extends Component {
   componentDidMount() {
      const head = document.querySelector('head');
      const script = document.createElement('script');
      script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
      head.appendChild(script);
   }

   render() {

      
      if (this.props.data) {
         // var name = this.props.data.name;
         // var street = this.props.data.address.street;
         // var city = this.props.data.address.city;
         // var state = this.props.data.address.state;
         // var zip = this.props.data.address.zip;
         // var phone = this.props.data.phone;
         // var email = this.props.data.email;
         var message = this.props.data.contactmessage;
      }

      return (
         <section id="contact">

            <div className="row section-head">

               {/* <div className="two columns header-col"> */}

               <h1>Get In Touch.</h1>

               {/* </div> */}

            </div>

            <div className="row">

               


               {/* calendly component starts*/}
               <div className="four columns">
                  <div id="schedule_form">
                     <div
                        className="calendly-inline-widget"
                        data-url="https://calendly.com/mandoor1997"
                        style={{ minWidth: '400px', height: '400px' }} />
                  </div>
               </div>
               {/* calendly component ends */}


               {/* <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">

                     <h4>Address and Phone</h4>
                     <p className="address">
                        <i className="fa fa-user"></i>&emsp;{name}<br />
                        <i className="fa fa-home"></i>&emsp;{street} <br />
                        {city}, {state} {zip}<br />
                        <i className="fa fa-phone"></i>&emsp;<span>{phone}</span><br />
                        <i className="fa fa-envelope"></i>&emsp;<span><a href="mailto:haramrit09k@gmail.com">{email}</a></span>
                     </p>
                  </div>
               </aside>
                */}
            
            </div>
         </section>
      );
   }
}

export default Contact;
