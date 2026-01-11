import { useCallback, useEffect } from "react";
import Typewriter from 'typewriter-effect';

const Hero = () => {
    useEffect(() => {
        const scrollAnimElements = document.querySelectorAll(
          "[data-animate-on-scroll]"
        );
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting || entry.intersectionRatio > 0) {
                const targetElement = entry.target;
                targetElement.classList.add("animate");
                observer.unobserve(targetElement);
              }
            }
          },
          {
            threshold: 0.15,
          }
        );
    
        for (let i = 0; i < scrollAnimElements.length; i++) {
          observer.observe(scrollAnimElements[i]);
        }
    
        return () => {
          for (let i = 0; i < scrollAnimElements.length; i++) {
            observer.unobserve(scrollAnimElements[i]);
          }
        };
      }, []);
      
      const onLinkedInClick = useCallback(() => {
        window.open("https://www.linkedin.com/in/fabeha-fatima-37910b72/");
      }, []);
    
      const onGithubClick = useCallback(() => {
        window.open("https://github.com/fabihafatima");
      }, []);
    return (

        // <section className="self-stretch overflow-hidden flex flex-row items-center justify-center py-[60px] px-[69px] box-border max-w-full text-left text-29xl text-primary-black font-heading-h6-semibold mq825:py-[39px] mq825:px-[34px] mq825:box-border" style={{ backgroundColor: 'rgb(215, 209, 235)' }}>
        
        <section
        className="self-stretch overflow-hidden flex flex-row items-center justify-center py-[60px] px-[69px] box-border max-w-full text-left text-29xl text-primary-black font-heading-h6-semibold mq825:py-[39px] mq825:px-[34px] mq825:box-border" 
        style={{
          position: 'relative',
          overflow: 'hidden',
         backgroundColor: 'rgb(215, 209, 235)',
        }}
      >
        {/* Background Wave SVG */}
        <div
          className="wave-background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            style={{
              width: '100%',
              position: 'absolute',
              bottom: 0,
              animation: 'waveAnimation 10s infinite linear',
            }}
          >
            <path
              fill="#6A11CB"
              fillOpacity="1"
              d="M0,192L30,213.3C60,235,120,277,180,282.7C240,288,300,256,360,213.3C420,171,480,117,540,112C600,107,660,149,720,176C780,203,840,213,900,213.3C960,213,1020,203,1080,176C1140,149,1200,107,1260,112C1320,117,1380,171,1410,213.3L1440,256V0H1410C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
            ></path>
          </svg>
        </div>
       <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-0 px-[30px] box-border gap-[92px] max-w-full lg:flex-wrap mq825:gap-[46px] mq450:gap-[23px]">
          <div className="flex-1 overflow-hidden flex flex-col items-start justify-start py-5 px-0 box-border gap-[40px] min-w-[513px] min-h-[510px] max-w-full lg:min-h-[auto] mq825:min-w-full mq450:gap-[20px]" style={{ backgroundColor: 'rgb(215, 209, 235)' }}>
            <div className="self-stretch flex flex-col items-center justify-center gap-[32px] max-w-full mq450:gap-[16px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
                <div
                  className="flex flex-row items-start justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] max-w-full"
                  data-animate-on-scroll
                >
                  <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
                    <span>{`Hello I’m `}</span>
                    <b>Fabeha Fatima</b>
                  </h1>
                </div>
                <div
                  className="flex flex-row items-start justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] max-w-full"
                  data-animate-on-scroll
                >
                <Typewriter
                    options={{
                        strings: ['Software Engineer', 'Data Scientist', 'Researcher & Developer', 'Problem Solver'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                </div>
                <div
                  className="flex flex-row items-start justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] max-w-full"
                  data-animate-on-scroll
                >
                  <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
                    <span>{`UMass `}</span>
                    <b>Amherst</b>
                  </h1>
                </div>
              </div>
              <div
                className="self-stretch relative text-base tracking-[0.02em] leading-[24px] text-zinc-500 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-top] opacity-[0]"
                data-animate-on-scroll
              >
                <h3 className="m-0">{`Currently pursuing a Master’s in Computer Science from the University of Massachusetts, Amherst. `}</h3>
                <h3 className="m-0">
                I am an enthusiastic full-stack developer with over three years of experience at Cisco Systems.
                I quickly learn new skills, adapt to emerging technologies, enjoy problem-solving, and am self-motivated to take on professional challenges.
                </h3>
              </div>
            </div>
            <div
              className="self-stretch h-14 flex flex-row items-start justify-start gap-[32px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-top] opacity-[0] mq450:gap-[16px]"
              data-animate-on-scroll
            >
              <button
                className="cursor-pointer [border:none] p-4 bg-primary-black self-stretch rounded w-14 flex flex-row items-center justify-center box-border active:animate-[1s_ease_0s_infinite_normal_none_shadow-pop-tr] active:opacity-[1] hover:bg-darkslategray"
                onClick={onLinkedInClick}
              >
                <img
                  className="relative w-5 h-5"
                  alt=""
                  src={`${process.env.PUBLIC_URL}/LinkedIn.svg`}
                />
              </button>
              <button
                className="cursor-pointer p-4 bg-[transparent] rounded box-border w-[58px] h-[58px] flex flex-row items-center justify-center border-[2px] border-solid border-primary-black active:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] active:opacity-[1]"
                onClick={onGithubClick}
              >
                <img
                  className="relative w-5 h-5"
                  alt=""
                  src={`${process.env.PUBLIC_URL}/Github.svg`}
                />
              </button>
         
            </div>
          </div>
            <div className="bg-primary-white w-[377px] h-[510px] overflow-hidden shrink-0 flex flex-col items-center justify-center min-w-[377px] max-w-full lg:flex-1 mq825:min-w-full" style={{ backgroundColor: 'rgb(215, 209, 235)' }}>
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-bottom] opacity-[0] lg:self-stretch lg:w-auto"
              loading="eager"
              alt=""
              src={`${process.env.PUBLIC_URL}/my-image.png`}
              data-animate-on-scroll
            />
          </div>
        </div>
      </section>
    )};

export default Hero;
