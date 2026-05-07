import React from 'react';

function Footer() {
  return (
    <footer className="clean-footer crev">
      <div className="container ontop">
        <div className="row justify-content-between mb-50 pt-50" style={{ color: "#ffffff" }}>
          <div className="col-lg-2">
            <div className="logo lg-mb80" style={{ width: '200px' }}>
              <a className="logo text-center" href="#" style={{ width: '100%', padding: '10px 0', fontSize: '30px', color: 'white' }}>
                <img src="/assets/imgs/header/logo2.png" alt="logo" />
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Contato</h6>
              <h6 className="mt-30 mb-15">
                <a href="#0">pri.milanese@gmail.com</a>
              </h6>
              <a href="https://wa.me/5511981017106?text=Ol%C3%A1%20Priscila!%20Vim%20pelo%20site" className="underline" target="_blank">
                <span className="fz-22 main-color">(11) 98101-7106</span>
              </a>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Páginas</h6>
              <ul className="rest fz-14 opacity-7" style={{ listStyleType: "none" }}>
                <li className="mb-15">
                  <a href="/page-about">Workshop</a>
                </li>
                <li className="mb-15">
                  <a href="/page-services">Mentoria</a>
                </li>
                <li className="mb-15">
                  <a href="/blog-grid-sidebar">Consultoria</a>
                </li>
                <li>
                  <a href="/page-contact">Contato</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="column subscribe-minimal">
              <h6 className="sub-title mb-30">Receba novidades</h6>
              <div className="form-group mb-40">
                <input type="text" name="subscrib" placeholder="E-mail" />
                <button>
                  <span className="ti-location-arrow"></span>
                </button>
              </div>
              <ul className="rest social-icon d-flex align-items-center" style={{ listStyleType: "none" }}>
                <li className="">
                  <a href="https://wa.me/5511981017106?text=Ol%C3%A1%20Priscila!%20Vim%20pelo%20site" target='_blank' className="hover-anim">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </li>
                <li className=" ml-10">
                  <a href="https://www.linkedin.com/in/priscilamilanese-mentora/" target='_blank' className="hover-anim">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className=" ml-10">
                  <a href="https://www.instagram.com/primila/" target='_blank' className="hover-anim">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-30 pb-30 bord-thin-top">
          <div className="text-center">
            <p className="fz-14" style={{ color: '#ffffff' }}>
              Copyright Priscila Milanese | Todos os direitos reservados. © 2026 Powered by{' '}
              <span className="underline main-color">
                <a href="https://operion.com.br" target="_blank">
                  OPERION
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur1.png" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
