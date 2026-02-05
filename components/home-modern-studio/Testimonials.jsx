'use client';
import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function Testimonials() {
  const swiperOptions = {
    modules: [Navigation],
    slidesPerView: 'auto',

    spaceBetween: 30,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 'auto',
      },
    },

    navigation: {
      nextEl: '.testim-modern .swiper-button-next',
      prevEl: '.testim-modern .swiper-button-prev',
    },
  };
  return (
    <section className="testim-modern section-padding bord-top-grd bord-bottom-grd">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Depoimentos</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Histórias <span className="fw-200">reais</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <div className="swiper-button-prev">
                  <span className="ti-arrow-left"></span>
                </div>
                <div className="swiper-button-next">
                  <span className="ti-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="testim-swiper3 out-right"
          data-carousel="swiper"
          data-loop="true"
          data-space="30"
        >
          <Swiper
            {...swiperOptions}
            id="content-carousel-container-unq-testim"
            className="swiper-container"
            data-swiper="container"
          >
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <div className="text">
                    <p>
                      “Ju tem sido uma guia incrível para minha vida. As consultas de tarot realmente trouxeram clareza para decisões difíceis que eu tinha que tomar. Me sinto muito mais equilibrado agora!”
                    </p>
                  </div>
                </div>
                <div className="info">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="img fit-img">
                        <img src="/assets/imgs/testim/1.png" alt="" />
                      </div>
                    </div>
                    <div className="ml-20">
                      <h6 className="fz-18">João P.</h6>
                      <span className="p-color opacity-8 fz-15 mt-5">
                        19/09/2024
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <div className="text">
                    <p>
                      “ Passei por um período de bloqueios emocionais e, após minha consulta, senti uma transformação profunda. Ju trouxe muita paz e luz para a minha vida. Recomendo muito! "
                    </p>
                  </div>
                </div>
                <div className="info">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="img fit-img">
                        <img src="/assets/imgs/testim/2.png" alt="" />
                      </div>
                    </div>
                    <div className="ml-20">
                      <h6 className="fz-18">Carla M.</h6>
                      <span className="p-color opacity-8 fz-15 mt-5">
                        03/10/2024
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <div className="text">
                    <p>
                      “ Fiquei muito impressionada com a precisão da leitura das cartas. Ju foi muito acolhedora e me ajudou a encontrar o caminho certo para minha vida amorosa. Recomendo de coração! ”
                    </p>
                  </div>
                </div>
                <div className="info">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="img fit-img">
                        <img src="/assets/imgs/testim/3.png" alt="" />
                      </div>
                    </div>
                    <div className="ml-20">
                      <h6 className="fz-18">Sofia R.</h6>
                      <span className="p-color opacity-8 fz-15 mt-5">
                        02/11/2024
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <div className="text">
                    <p>
                      “ Nunca imaginei que uma consulta espiritual poderia trazer tanto alívio para o meu espírito. Ju me ajudou a desbloquear minha energia e hoje minha vida está mais tranquila e harmoniosa. "
                    </p>
                  </div>
                </div>
                <div className="info">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="img fit-img">
                        <img src="/assets/imgs/testim/4.png" alt="" />
                      </div>
                    </div>
                    <div className="ml-20">
                      <h6 className="fz-18">
                        Renato S.
                      </h6>
                      <span className="p-color opacity-8 fz-15 mt-5">
                        08/11/2024
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <div className="text">
                    <p>
                      “ Estava em um momento muito difícil da minha vida e a ajuda espiritual que recebi fez toda a diferença. Ju me ajudou a ver tudo sob uma nova perspectiva.  Sou muito grata a ela!”
                    </p>
                  </div>
                </div>
                <div className="info">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="img fit-img">
                        <img src="/assets/imgs/testim/5.png" alt="" />
                      </div>
                    </div>
                    <div className="ml-20">
                      <h6 className="fz-18">Luciana F.</h6>
                      <span className="p-color opacity-8 fz-15 mt-5">
                        19/12/2024
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <div className="text">
                    <p>
                      “ Ju é uma verdadeira fonte de sabedoria. Com a ajuda dos orixás, consegui superar um relacionamento que estava me fazendo mal. Sou muito grato por tudo o que ela me ensinou. ”
                    </p>
                  </div>
                </div>
                <div className="info">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="img fit-img">
                        <img src="/assets/imgs/testim/6.png" alt="" />
                      </div>
                    </div>
                    <div className="ml-20">
                      <h6 className="fz-18">Carlos T.</h6>
                      <span className="p-color opacity-8 fz-15 mt-5">
                        11/12/2024
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <div className="text">
                    <p>
                      “ Minha vida amorosa estava em crise e depois da consulta com Ju, as coisas começaram a mudar. Senti uma verdadeira conexão espiritual. É incrível como ela consegue trazer paz. ”
                    </p>
                  </div>
                </div>
                <div className="info">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="img fit-img">
                        <img src="/assets/imgs/testim/7.png" alt="" />
                      </div>
                    </div>
                    <div className="ml-20">
                      <h6 className="fz-18">Fernanda A.</h6>
                      <span className="p-color opacity-8 fz-15 mt-5">

                        26/11/2024
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
