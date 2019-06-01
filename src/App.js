import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/navbar';
import FormExample from './Components/FormExample';
import FetchData from './Components/FetchData';

class Header extends Component {
  render() {
  return ( 
  <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
      <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mx-0 mx-lg-1">
            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item mx-0 mx-lg-1">
            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a>
          </li>
          <li className="nav-item mx-0 mx-lg-1">
            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a>
          </li>
          <li>
          <button type="button" class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" data-toggle="modal" data-target="#myModal">Sign up</button>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
    );
  }
}

class Head extends React.Component {
  render() {
     return (
      <div> 
      <header className="masthead bg-primary text-white text-center">
    <div className="container">
      <img className="img-fluid mb-5 d-block mx-auto" src="img/profile.png" alt=""/>
      <h1 className="text-uppercase mb-0">Start Bootstrap</h1>
      <hr className="star-light"/>
      <h2 className="font-weight-light mb-0">Web Developer - Graphic Artist - User Experience Designer</h2>
       </div>
       </header>
       </div>
     );
  }
}

class Portfolio extends React.Component {
  render() {
     return (
      <div> 
      <section className="portfolio" id="portfolio">
    <div className="container">
      <h2 className="text-center text-uppercase text-secondary mb-0">Portfolio</h2>
      <hr className="star-dark mb-5"/>
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
            <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
              <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                <i className="fas fa-search-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src="img/portfolio/cabin.png" alt=""/>
          </a>
        </div>
        <div className="col-md-6 col-lg-4">
          <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-2">
            <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
              <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                <i className="fas fa-search-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src="img/portfolio/cake.png" alt=""/>
          </a>
        </div>
        <div className="col-md-6 col-lg-4">
          <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-3">
            <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
              <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                <i className="fas fa-search-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src="img/portfolio/circus.png" alt=""/>
          </a>
        </div>
        <div className="col-md-6 col-lg-4">
          <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-4">
            <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
              <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                <i className="fas fa-search-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src="img/portfolio/game.png" alt=""/>
          </a>
        </div>
        <div className="col-md-6 col-lg-4">
          <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-5">
            <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
              <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                <i className="fas fa-search-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src="img/portfolio/safe.png" alt=""/>
          </a>
        </div>
        <div className="col-md-6 col-lg-4">
          <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-6">
            <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
              <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                <i className="fas fa-search-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src="img/portfolio/submarine.png" alt=""/>
          </a>
        </div>
      </div>
    </div>
  </section>
       </div>
     );
  }
}

class About extends React.Component {
  render() {
     return (
      <div> 
         <section class="bg-primary text-white mb-0" id="about">
            <div class="container">
              <h2 class="text-center text-uppercase text-white">About</h2>
              <hr class="star-light mb-5"/>
              <div class="row">
                <div class="col-lg-4 ml-auto">
                  <p class="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy customization.</p>
                </div>
                <div class="col-lg-4 mr-auto">
                  <p class="lead">Whether you're a student looking to showcase your work, a professional looking to attract clients, or a graphic artist looking to share your projects, this template is the perfect starting point!</p>
                </div>
              </div>
              <div class="text-center mt-4">
                <a class="btn btn-xl btn-outline-light" href="#">
                  <i class="fas fa-download mr-2"></i>
                  Download Now!
                </a>
              </div>
            </div>
         </section>
      </div>
     );
  }
}



  class Contact extends React.Component {
  render() {
     return (
      <div> 

    <section id="contact">
    <div class="container">
      <h2 class="text-center text-uppercase text-secondary mb-0">Contact Me</h2>
      <hr class="star-dark mb-5"/>
      <div class="row">
        <div class="col-lg-8 mx-auto">
          
          <form name="sentMessage" id="contactForm" novalidate="novalidate">
            <div class="control-group">
              <div class="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Name</label>
                <input class="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name."/>
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Email Address</label>
                <input class="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address."/>
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Phone Number</label>
                <input class="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number."/>
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Message</label>
                <textarea class="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <br/>
            <div id="success"></div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
              
            </div>
          </form>

          <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
    
     
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Modal Header</h4>
        </div>
        <div className="modal-body">
          <p>Some text in the modal.</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>

        </div>
      </div>
    </div>
  </section>
       </div>
     );
  }
}

class Footer extends React.Component {
  render() {
     return (
      <div> 

        <footer className="footer text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Location</h4>
                <p className="lead mb-0">2215 John Daniel Drive
                  <br/>Clark, MO 65243</p>
              </div>
              <div className="col-md-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Around the Web</h4>
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                      <i className="fab fa-fw fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                      <i className="fab fa-fw fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                      <i className="fab fa-fw fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                      <i className="fab fa-fw fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                      <i className="fab fa-fw fa-dribbble"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h4 className="text-uppercase mb-4">About Freelancer</h4>
                <p className="lead mb-0">Freelance is a free to use, open source Bootstrap theme created by
                  <a href="http://startbootstrap.com">Start Bootstrap</a>.</p>
              </div>
            </div>
          </div>
        </footer>
       </div>
     );
  }
}

class Base extends React.Component {
  render() {
     return (
      <div> 
        <div className="copyright py-4 text-center text-white">
        <div className="container">
        <small>Copyright &copy; Your Website 2019</small>
        </div>
        </div>
       </div>
     );
  }
}


class App extends React.Component {
  render() {
     return (
        <div>
             {/* <Header/>
           <Head/>
           <Portfolio/>
           <About/>
           <Contact/>
           <Footer/>
           <Base/>  */}
           {/*<Navbar name='Header'></Navbar>*/}
            {/* <FormExample/> */}
            <FetchData/>

        </div>
     );
  }
}

export default App;
