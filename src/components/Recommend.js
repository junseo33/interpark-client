/* eslint-disable jsx-a11y/anchor-is-valid */
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "../styles/recommend.css";
import "../styles/common.css";
import { useRef } from "react";

function Recommend() {
  //  js 코드 자리
  // JSX 의 요소를 React 에서 참조
  const swiperRef = useRef();

  return (
    <section class="recommend">
      <div class="recommend-inner">
        <div class="recommend-header">
          <h2 class="recommend-title">쇼핑추천</h2>
          <span class="recommend-txt">
            할인이 쎄다! 지금, 특가 상품을 확인하세요.
          </span>
        </div>

        <div class="recommend-main">
          <div class="recommend-category">
            <ul class="recommend-list">
              <li>
                <button class="recommend-cate-bt recommend-cate-bt-active">
                  쎈딜
                </button>
              </li>
              <li>
                <button class="recommend-cate-bt">베스트</button>
              </li>
              <li>
                <button class="recommend-cate-bt">블프데이</button>
              </li>
              <li>
                <button class="recommend-cate-bt">디지털프라자</button>
              </li>
              <li>
                <a href="#" class="recommend-cate-bt">
                  소담상회
                </a>
              </li>
            </ul>
          </div>
          <div class="recommend-slide-wrap">
            <Swiper
              slidesPerView={4}
              spaceBetween={27}
              slidesPerGroup={4}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              className="recommend-slide"
            >
              <SwiperSlide>
                <div class="recommend-slide-item">
                  <a href="a.html" class="recommend-link">
                    <div class="recommend-img">
                      <img
                        src="images/r1.jpg"
                        alt="[오쎈특가 쿠폰최종가 소형 5,070원]  [2024년 달력 얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼, 모네, 고흐, 윤동주 등"
                      />
                    </div>
                    <div class="recommend-info">
                      <ul class="recommend-good-list">
                        <li>
                          <span class="recommend-good-info-price">
                            <b>47%</b>
                            <em>6090</em>원
                          </span>
                        </li>
                        <li>
                          <p class="recommend-good-info-desc">
                            [오쎈특가 쿠폰최종가 소형 5,070원] [2024년 달력
                            얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼,
                            모네, 고흐, 윤동주 등
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="recommend-slide-item">
                  <a href="a.html" class="recommend-link">
                    <div class="recommend-img">
                      <img
                        src="images/r1.jpg"
                        alt="[오쎈특가 쿠폰최종가 소형 5,070원]  [2024년 달력 얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼, 모네, 고흐, 윤동주 등"
                      />
                    </div>
                    <div class="recommend-info">
                      <ul class="recommend-good-list">
                        <li>
                          <span class="recommend-good-info-price">
                            <b>47%</b>
                            <em>6090</em>원
                          </span>
                        </li>
                        <li>
                          <p class="recommend-good-info-desc">
                            [오쎈특가 쿠폰최종가 소형 5,070원] [2024년 달력
                            얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼,
                            모네, 고흐, 윤동주 등
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="recommend-slide-item">
                  <a href="a.html" class="recommend-link">
                    <div class="recommend-img">
                      <img
                        src="images/r1.jpg"
                        alt="[오쎈특가 쿠폰최종가 소형 5,070원]  [2024년 달력 얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼, 모네, 고흐, 윤동주 등"
                      />
                    </div>
                    <div class="recommend-info">
                      <ul class="recommend-good-list">
                        <li>
                          <span class="recommend-good-info-price">
                            <b>47%</b>
                            <em>6090</em>원
                          </span>
                        </li>
                        <li>
                          <p class="recommend-good-info-desc">
                            [오쎈특가 쿠폰최종가 소형 5,070원] [2024년 달력
                            얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼,
                            모네, 고흐, 윤동주 등
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="recommend-slide-item">
                  <a href="a.html" class="recommend-link">
                    <div class="recommend-img">
                      <img
                        src="images/r1.jpg"
                        alt="[오쎈특가 쿠폰최종가 소형 5,070원]  [2024년 달력 얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼, 모네, 고흐, 윤동주 등"
                      />
                    </div>
                    <div class="recommend-info">
                      <ul class="recommend-good-list">
                        <li>
                          <span class="recommend-good-info-price">
                            <b>47%</b>
                            <em>6090</em>원
                          </span>
                        </li>
                        <li>
                          <p class="recommend-good-info-desc">
                            [오쎈특가 쿠폰최종가 소형 5,070원] [2024년 달력
                            얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼,
                            모네, 고흐, 윤동주 등
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="recommend-slide-item">
                  <a href="a.html" class="recommend-link">
                    <div class="recommend-img">
                      <img
                        src="images/r1.jpg"
                        alt="[오쎈특가 쿠폰최종가 소형 5,070원]  [2024년 달력 얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼, 모네, 고흐, 윤동주 등"
                      />
                    </div>
                    <div class="recommend-info">
                      <ul class="recommend-good-list">
                        <li>
                          <span class="recommend-good-info-price">
                            <b>47%</b>
                            <em>6090</em>원
                          </span>
                        </li>
                        <li>
                          <p class="recommend-good-info-desc">
                            [오쎈특가 쿠폰최종가 소형 5,070원] [2024년 달력
                            얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼,
                            모네, 고흐, 윤동주 등
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="recommend-slide-item">
                  <a href="a.html" class="recommend-link">
                    <div class="recommend-img">
                      <img
                        src="images/r1.jpg"
                        alt="[오쎈특가 쿠폰최종가 소형 5,070원]  [2024년 달력 얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼, 모네, 고흐, 윤동주 등"
                      />
                    </div>
                    <div class="recommend-info">
                      <ul class="recommend-good-list">
                        <li>
                          <span class="recommend-good-info-price">
                            <b>47%</b>
                            <em>6090</em>원
                          </span>
                        </li>
                        <li>
                          <p class="recommend-good-info-desc">
                            [오쎈특가 쿠폰최종가 소형 5,070원] [2024년 달력
                            얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼,
                            모네, 고흐, 윤동주 등
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="recommend-slide-item">
                  <a href="a.html" class="recommend-link">
                    <div class="recommend-img">
                      <img
                        src="images/r1.jpg"
                        alt="[오쎈특가 쿠폰최종가 소형 5,070원]  [2024년 달력 얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼, 모네, 고흐, 윤동주 등"
                      />
                    </div>
                    <div class="recommend-info">
                      <ul class="recommend-good-list">
                        <li>
                          <span class="recommend-good-info-price">
                            <b>47%</b>
                            <em>6090</em>원
                          </span>
                        </li>
                        <li>
                          <p class="recommend-good-info-desc">
                            [오쎈특가 쿠폰최종가 소형 5,070원] [2024년 달력
                            얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼,
                            모네, 고흐, 윤동주 등
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="recommend-slide-item">
                  <a href="a.html" class="recommend-link">
                    <div class="recommend-img">
                      <img
                        src="images/r1.jpg"
                        alt="[오쎈특가 쿠폰최종가 소형 5,070원]  [2024년 달력 얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼, 모네, 고흐, 윤동주 등"
                      />
                    </div>
                    <div class="recommend-info">
                      <ul class="recommend-good-list">
                        <li>
                          <span class="recommend-good-info-price">
                            <b>47%</b>
                            <em>6090</em>원
                          </span>
                        </li>
                        <li>
                          <p class="recommend-good-info-desc">
                            [오쎈특가 쿠폰최종가 소형 5,070원] [2024년 달력
                            얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼,
                            모네, 고흐, 윤동주 등
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="recommend-slide-item">
                  <a href="a.html" class="recommend-link">
                    <div class="recommend-img">
                      <img
                        src="images/r1.jpg"
                        alt="[오쎈특가 쿠폰최종가 소형 5,070원]  [2024년 달력 얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼, 모네, 고흐, 윤동주 등"
                      />
                    </div>
                    <div class="recommend-info">
                      <ul class="recommend-good-list">
                        <li>
                          <span class="recommend-good-info-price">
                            <b>47%</b>
                            <em>6090</em>원
                          </span>
                        </li>
                        <li>
                          <p class="recommend-good-info-desc">
                            [오쎈특가 쿠폰최종가 소형 5,070원] [2024년 달력
                            얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼,
                            모네, 고흐, 윤동주 등
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="recommend-slide-item">
                  <a href="a.html" class="recommend-link">
                    <div class="recommend-img">
                      <img
                        src="images/r1.jpg"
                        alt="[오쎈특가 쿠폰최종가 소형 5,070원]  [2024년 달력 얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼, 모네, 고흐, 윤동주 등"
                      />
                    </div>
                    <div class="recommend-info">
                      <ul class="recommend-good-list">
                        <li>
                          <span class="recommend-good-info-price">
                            <b>47%</b>
                            <em>6090</em>원
                          </span>
                        </li>
                        <li>
                          <p class="recommend-good-info-desc">
                            [오쎈특가 쿠폰최종가 소형 5,070원] [2024년 달력
                            얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼,
                            모네, 고흐, 윤동주 등
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="recommend-slide-item">
                  <a href="a.html" class="recommend-link">
                    <div class="recommend-img">
                      <img
                        src="images/r1.jpg"
                        alt="[오쎈특가 쿠폰최종가 소형 5,070원]  [2024년 달력 얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼, 모네, 고흐, 윤동주 등"
                      />
                    </div>
                    <div class="recommend-info">
                      <ul class="recommend-good-list">
                        <li>
                          <span class="recommend-good-info-price">
                            <b>47%</b>
                            <em>6090</em>원
                          </span>
                        </li>
                        <li>
                          <p class="recommend-good-info-desc">
                            [오쎈특가 쿠폰최종가 소형 5,070원] [2024년 달력
                            얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼,
                            모네, 고흐, 윤동주 등
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="recommend-slide-item">
                  <a href="a.html" class="recommend-link">
                    <div class="recommend-img">
                      <img
                        src="images/r1.jpg"
                        alt="[오쎈특가 쿠폰최종가 소형 5,070원]  [2024년 달력 얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼, 모네, 고흐, 윤동주 등"
                      />
                    </div>
                    <div class="recommend-info">
                      <ul class="recommend-good-list">
                        <li>
                          <span class="recommend-good-info-price">
                            <b>47%</b>
                            <em>6090</em>원
                          </span>
                        </li>
                        <li>
                          <p class="recommend-good-info-desc">
                            [오쎈특가 쿠폰최종가 소형 5,070원] [2024년 달력
                            얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼,
                            모네, 고흐, 윤동주 등
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>

            <button
              class="slide-prev-bt"
              onClick={() => {
                swiperRef.current.slidePrev();
              }}
            >
              <img src="images/slider_arrow.svg" alt="" />
            </button>
            <button
              class="slide-next-bt"
              onClick={() => {
                swiperRef.current.slideNext();
              }}
            >
              <img src="images/slider_arrow.svg" alt="" />
            </button>
          </div>
        </div>

        <div class="recommend-footer"></div>
      </div>
    </section>
  );
}
export default Recommend;
