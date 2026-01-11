// import { useEffect } from "react";
// import Skill from "../SkillComponent";

// const Skills = () => {
//   useEffect(() => {
//     const scrollAnimElements = document.querySelectorAll(
//       "[data-animate-on-scroll]"
//     );
//     const observer = new IntersectionObserver(
//       (entries) => {
//         for (const entry of entries) {
//           if (entry.isIntersecting || entry.intersectionRatio > 0) {
//             const targetElement = entry.target;
//             targetElement.classList.add("animate");
//             observer.unobserve(targetElement);
//           }
//         }
//       },
//       {
//         threshold: 0.15,
//       }
//     );

//     for (let i = 0; i < scrollAnimElements.length; i++) {
//       observer.observe(scrollAnimElements[i]);
//     }

//     return () => {
//       for (let i = 0; i < scrollAnimElements.length; i++) {
//         observer.unobserve(scrollAnimElements[i]);
//       }
//     };
//   }, []);

//   const skills = [
//     { src: "/java.svg", label: "Java" },
//     { src: "/python.svg", label: "Python" },
//     { src: "/iconjavscript.svg", label: "JavaScript" },
//     { src: "/html5.svg", label: "HTML" },
//     { src: "/css3.svg", label: "CSS" },
//     { src: "/react.svg", label: "React.js" },
//     { src: "/nodejs.svg", label: "Node.js" },
//     { src: "/github.png", label: "Git/Github" },
//     { src: "/elastic-search.svg", label: "ElasticSearch" },
//     { src: "/kibana.svg", label: "Kibana" },
//     { src: "/logstash.svg", label: "Logstash" },
//     { src: "/docker.svg", label: "Docker" },
//     { src: "/grafana.svg", label: "Grafana" }
//   ];

//   return (
//     <section
//       className="self-stretch overflow-hidden flex flex-col items-center justify-center py-[60px] px-20 text-left text-29xl text-primary-black font-heading-h6-semibold mq825:py-[39px] mq825:px-10 mq825:box-border"
//       data-scroll-to="skills"
//       style={{ backgroundColor: 'rgb(215, 209, 235)' }}
//     >
//       <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 pr-[41px] pl-10 gap-[20px]">
//         <div
//           className="self-stretch overflow-hidden flex flex-row items-center justify-center py-5 px-0 gap-[16px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-top] opacity-[0] mq450:flex-wrap"
//           data-animate-on-scroll
//         >
//           <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-normal font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
//             My
//           </h1>
//           <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-extrabold font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
//             Skills
//           </h1>
//         </div>
//         <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-5 px-0 box-border gap-[71px] min-h-[492px] text-center text-xl mq825:gap-[35px] mq450:gap-[18px]">
//           {skills.map(skill => (
//           <Skill key={skill.label} src={skill.src} label={skill.label} animateOnScroll={true} />
//         ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
import { useEffect } from "react";
import Skill from "../SkillComponent";

const Skills = () => {
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
  const skills = [
    { src: `${process.env.PUBLIC_URL}/java.svg`, label: "Java" },
    { src: `${process.env.PUBLIC_URL}/python.svg`, label: "Python" },
    { src: `${process.env.PUBLIC_URL}/iconjavscript.svg`, label: "JavaScript" },
    { src: `${process.env.PUBLIC_URL}/html5.svg`, label: "HTML" },
    { src: `${process.env.PUBLIC_URL}/css3.svg`, label: "CSS" },
    { src: `${process.env.PUBLIC_URL}/react.svg`, label: "React.js" },
    { src: `${process.env.PUBLIC_URL}/nodejs.svg`, label: "Node.js" },
    { src: `${process.env.PUBLIC_URL}/Github.svg`, label: "Git/Github" },
    { src: `${process.env.PUBLIC_URL}/elastic-search.svg`, label: "ElasticSearch" },
    { src: `${process.env.PUBLIC_URL}/kibana.svg`, label: "Kibana" },
    { src: `${process.env.PUBLIC_URL}/logstash.svg`, label: "Logstash" },
    { src: `${process.env.PUBLIC_URL}/docker.svg`, label: "Docker" },
    { src: `${process.env.PUBLIC_URL}/grafana.svg`, label: "Grafana" }
  ];
  
  const sectionBackgroundColor = 'rgb(215, 209, 235)';

  return (
    <section
      className="self-stretch overflow-hidden flex flex-col items-center justify-center py-[60px] px-20 text-left text-29xl text-primary-black font-heading-h6-semibold mq825:py-[39px] mq825:px-10 mq825:box-border"
      data-scroll-to="skills"
      style={{ backgroundColor: sectionBackgroundColor }}
    >
      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 pr-[41px] pl-10 gap-[20px]">
        <div
          className="self-stretch overflow-hidden flex flex-row items-center justify-center py-5 px-0 gap-[16px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-top] opacity-[0] mq450:flex-wrap"
          data-animate-on-scroll
        >
          <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-normal font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
            My
          </h1>
          <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-extrabold font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
            Skills
          </h1>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-5 px-0 box-border gap-[71px] min-h-[492px] text-center text-xl mq825:gap-[35px] mq450:gap-[18px]">
          {skills.map(skill => (
            <Skill
              key={skill.label}
              src={skill.src}
              label={skill.label}
              animateOnScroll={true}
              backgroundColor={sectionBackgroundColor}  // Pass background color to Skill component
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
