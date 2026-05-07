'use client';
import React, { useEffect } from 'react';

function Navbar() {
  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if (bodyScroll > 300) navbar.classList.add('nav-scroll');
    else navbar.classList.remove('nav-scroll');
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget
      .querySelector('.dropdown-menu')
      .classList.remove('show');
  }
  function handleToggleNav() {
    if (
      document
        .querySelector('.navbar .navbar-collapse')
        .classList.contains('show')
    ) {
      document
        .querySelector('.navbar .navbar-collapse')
        .classList.remove('show');
    } else if (
      !document
        .querySelector('.navbar .navbar-collapse')
        .classList.contains('show')
    ) {
      document.querySelector('.navbar .navbar-collapse').classList.add('show');
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bord blur">
      <div className="container o-hidden">
        <a className="logo" href="#" style={{ width: '200px', padding: '10px 0', fontSize: '30px', color: 'white' }}>
          <img src="/assets/imgs/header/logo3.png" alt="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggleNav}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li
              onMouseLeave={handleDropdownMouseLeave}
              onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <a
                className="nav-link2"
                href="/"
              >
                <span className="rolling-text">Home</span>
              </a>
            </li>
            <li
              onMouseLeave={handleDropdownMouseLeave}
              onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <a
                className="nav-link2 dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Workshop</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/lideranca-consciente">
                    Liderança Consciente
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link2" href="/mentoria">
                <span className="rolling-text">Mentoria</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link2" href="/consultoria">
                <span className="rolling-text">Consultoria</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link2" href="/page-contact">
                <span className="rolling-text">Contato</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-button">
          <a
            href="https://wa.me/5511981017106?text=Ol%C3%A1%20Priscila!%20Vim%20pelo%20site"
            target='_blank'
            className="butn butn-sm butn-bg main-colorbg radius-5"
          >
            <i className="fab fa-whatsapp" style={{ paddingRight: '10px' }}></i>
            <span className="text">Entre em contato</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

