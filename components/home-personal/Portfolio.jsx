'use client';
import React, { useEffect, useState } from 'react';
import LeadFormModal from '../home-personal/LeadFormModal';

function Portfolio() {
  const [openForm, setOpenForm] = useState(false);

  function Playing() {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll('.cards .card-item');
    let stickDistance = 0;

    const firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: 'center center',
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: 'bottom bottom',
    });

    cards.forEach((card, index) => {
      const scale = 1 - (cards.length - index) * 0.025;
      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: '50% ' + (lastCardST.start + stickDistance),
      });

      ScrollTrigger.create({
        trigger: card,
        start: 'center center',
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        ease: 'none',
        animation: scaleDown,
        toggleActions: 'restart none none reverse',
      });
    });
  }

  useEffect(() => {
    Playing();
    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <section className="work-card mb-20 pt-20">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title mb-5">Lorem ipsum dolor sit amet</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Lorem ipsum <span className="fw-200">dolor sit amet?</span>
                </span>
              </h3>
            </div>
          </div>
        </div>

        <div className="cards">

          {/* CARD 1 */}
          <div className="card-item sub-bg-card1">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <h3 className="fw-600">
                    <span className="fw-200">Lorem </span>
                    {' '}ipsum dolor:
                  </h3>
                  <ul className="mt-20 pt-list fz-12">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit;</li>
                    <br />
                    <li>Sed do eiusmod tempor incididunt ut labore et dolore magna;</li>
                    <br />
                    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco;</li>
                    <br />
                    <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  </ul>

                  <div className="mt-20">
                    <button
                      onClick={() => setOpenForm(true)}
                      className="butn butn-pt butn-bord radius-30"
                    >
                      Lorem ipsum dolor
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="card-item sub-bg-card1">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <h3 className="fw-600">
                    <span className="fw-200">Lorem ipsum</span>
                    {' '}dolor sit amet
                  </h3>

                  <h6 className="fw-200 mt-10 fz-15">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore:
                  </h6>
                  <ul className="mt-20 pt-list fz-12">
                    <li>Lorem ipsum dolor;</li>
                    <br />
                    <li>Consectetur adipiscing;</li>
                    <br />
                    <li>Sed do eiusmod;</li>
                    <br />
                    <li>Tempor incididunt ut labore.</li>
                  </ul>

                  <h6 className="fw-200 fz-15">
                    <span className='fw-600'>Lorem ipsum?</span>
                    {' '}Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    <br />
                    <br />
                    <span className='fw-600'>Ut enim ad minim veniam?</span>
                  </h6>

                  <div className="mt-20">
                    <button
                      onClick={() => setOpenForm(true)}
                      className="butn butn-pt butn-bord radius-30"
                    >
                      Lorem ipsum dolor
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/2.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="card-item sub-bg-card1">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <h3 className="fw-600">
                    <span className="fw-200">Lorem ipsum</span>
                    {' '}dolor sit amet consectetur
                  </h3>

                  <h6 className="fw-200 mt-10 fz-15">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    <br />
                    <br />
                    <span className='fw-600'>Ut enim ad minim veniam, quis nostrud exercitation:</span>
                  </h6>
                  <ul className="mt-20 pt-list fz-12">
                    <li>Lorem ipsum dolor sit amet;</li>
                    <br />
                    <li>Consectetur adipiscing elit;</li>
                    <br />
                    <li>Sed do eiusmod tempor;</li>
                    <br />
                    <li>Incididunt ut labore et dolore;</li>
                    <br />
                    <li>Magna aliqua ut enim ad minim.</li>
                  </ul>

                  <div className="mt-20">
                    <button
                      onClick={() => setOpenForm(true)}
                      className="butn butn-pt butn-bord radius-30"
                    >
                      Lorem ipsum dolor
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/3.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="card-item sub-bg-card1">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <h3 className="fw-600">
                    <span className="fw-200">Lorem ipsum</span>
                    {' '}dolor sit amet
                  </h3>

                  <ul className="mt-20 pt-list fz-12">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit;</li>
                    <br />
                    <li>Sed do eiusmod tempor incididunt ut labore et dolore;</li>
                    <br />
                    <li>Ut enim ad minim veniam, quis nostrud exercitation;</li>
                    <br />
                    <li>Duis aute irure dolor in reprehenderit in voluptate;</li>
                    <br />
                    <li>Excepteur sint occaecat cupidatat non proident sunt;</li>
                    <br />
                    <li>Culpa qui officia deserunt mollit anim id est laborum.</li>
                  </ul>

                  <div className="mt-20">
                    <button
                      onClick={() => setOpenForm(true)}
                      className="butn butn-pt butn-bord radius-30"
                    >
                      Lorem ipsum dolor
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/4.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* CARD 5 */}
          <div className="card-item sub-bg-card1">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <h3 className="fw-600">
                    <span className="fw-200">Lorem ipsum </span>
                    dolor sit
                  </h3>

                  <h6 className="fw-200 mt-10 fz-15">
                    <span className='fw-600'>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                    <br />
                    <br />
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    <br />
                    <br />
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    <br />
                    <br />
                    <span className='fw-600'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
                  </h6>

                  <div className="mt-20">
                    <button
                      onClick={() => setOpenForm(true)}
                      className="butn butn-pt butn-bord radius-30"
                    >
                      Lorem ipsum dolor
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/5.png" alt="" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* MODAL */}
      <LeadFormModal open={openForm} onClose={() => setOpenForm(false)} />
    </section>
  );
}

export default Portfolio;