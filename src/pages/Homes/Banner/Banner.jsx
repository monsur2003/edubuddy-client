import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import banner1 from "../../../assets/banner/263996697_1025413671378369_7618365678306709347_n.jpg";
import banner2 from "../../../assets/banner/pexels-emily-ranquist-1205651.jpg";
import banner3 from "../../../assets/banner/pexels-andrea-piacquadio-3762800.jpg";
import banner4 from "../../../assets/banner/pexels-ivan-samkov-5676744.jpg";
// import "./Banner.css";

const Banner = () => {
   const [sliderRef] = useKeenSlider(
      {
         loop: true,
      },
      [
         (slider) => {
            let timeout;
            let mouseOver = false;
            function clearNextTimeout() {
               clearTimeout(timeout);
            }
            function nextTimeout() {
               clearTimeout(timeout);
               if (mouseOver) return;
               timeout = setTimeout(() => {
                  slider.next();
               }, 2000);
            }
            slider.on("created", () => {
               slider.container.addEventListener("mouseover", () => {
                  mouseOver = true;
                  clearNextTimeout();
               });
               slider.container.addEventListener("mouseout", () => {
                  mouseOver = false;
                  nextTimeout();
               });
               nextTimeout();
            });
            slider.on("dragStarted", clearNextTimeout);
            slider.on("animationEnded", nextTimeout);
            slider.on("updated", nextTimeout);
         },
      ]
   );

   return (
      <div className="h-[80vh] w-[100%]">
         <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
               <img
                  className="w-[100%] h-[80vh] bg-no-repeat bg-cover"
                  src={banner1}
                  alt=""
               />
            </div>
            <div className="keen-slider__slide number-slide2">
               <img
                  className="w-[100%] h-[80vh] bg-no-repeat bg-cover"
                  src={banner2}
                  alt=""
               />
            </div>
            <div className="keen-slider__slide number-slide3">
               <img
                  className="w-[100%] h-[80vh] bg-no-repeat bg-cover"
                  src={banner3}
                  alt=""
               />
            </div>
            <div className="keen-slider__slide number-slide4">
               <img
                  className="w-[100%] h-[80vh] bg-no-repeat bg-cover"
                  src={banner4}
                  alt=""
               />
            </div>
         </div>
      </div>
   );
};

export default Banner;
