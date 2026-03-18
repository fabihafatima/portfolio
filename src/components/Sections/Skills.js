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
import { useCallback, useEffect, useMemo, useRef } from "react";
import Skill from "../SkillComponent";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  const categories = useMemo(() => [
    {
      title: "Languages",
      items: [
        { label: "Java", src: `${process.env.PUBLIC_URL}/java.svg` },
        { label: "Python", src: `${process.env.PUBLIC_URL}/python.svg` },
        { label: "JavaScript", src: `${process.env.PUBLIC_URL}/iconjavscript.svg` },
        { label: "C++", src: `${process.env.PUBLIC_URL}/cpluslogo.png` },
        { label: "SQL", src: `${process.env.PUBLIC_URL}/sqllogo.png` },
        {
          label: "Bash",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
        },
      ],
    },
    {
      title: "Frontend",
      items: [
        { label: "React", src: `${process.env.PUBLIC_URL}/react.svg` },
        { label: "HTML", src: `${process.env.PUBLIC_URL}/html5.svg` },
        { label: "CSS/SASS", src: `${process.env.PUBLIC_URL}/css3.svg` },
      ],
    },
    {
      title: "Frameworks & APIs",
      items: [
        { label: "Spring MVC", src: `${process.env.PUBLIC_URL}/springmvc.svg` },
        { label: "Node.js", src: `${process.env.PUBLIC_URL}/nodejs.svg` },
        { label: "Flask", src: `${process.env.PUBLIC_URL}/flask.png` },
        { label: "Django", src: `${process.env.PUBLIC_URL}/django.png` },
        { label: "REST", src: `${process.env.PUBLIC_URL}/rest-api-icon.png` },
        { label: "gRPC", src: `${process.env.PUBLIC_URL}/grpc.png` },
      ],
    },
    {
      title: "DevOps & Cloud",
      items: [
        { label: "Linux", src: `${process.env.PUBLIC_URL}/linux.svg` },
        { label: "Docker", src: `${process.env.PUBLIC_URL}/docker.svg` },
        { label: "Kubernetes", src: `${process.env.PUBLIC_URL}/kubernetes.svg` },
        { label: "Kafka", src: `${process.env.PUBLIC_URL}/apachekafka.svg` },
        { label: "CI/CD", src: `${process.env.PUBLIC_URL}/ci:cd.png` },
        { label: "Jenkins", src: `${process.env.PUBLIC_URL}/jenkins.svg` },
        { label: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { label: "Nginx", src: `${process.env.PUBLIC_URL}/nginx.svg` },
      ],
    },
    {
      title: "Data & Databases",
      items: [
        { label: "MySQL", src: `${process.env.PUBLIC_URL}/mysql.svg` },
        { label: "MongoDB", src: `${process.env.PUBLIC_URL}/mongodb.svg` },
        { label: "Elasticsearch", src: `${process.env.PUBLIC_URL}/elastic-search.svg` },
        { label: "Kibana", src: `${process.env.PUBLIC_URL}/kibana.svg` },
        { label: "Logstash", src: `${process.env.PUBLIC_URL}/logstash.svg` },
        { label: "Tableau", src: `${process.env.PUBLIC_URL}/tableau.png` },
        { label: "Git", src: `${process.env.PUBLIC_URL}/Github.svg` },
      ],
    },
    {
      title: "ML & AI",
      items: [
        { label: "PyTorch", src: `${process.env.PUBLIC_URL}/pytorch.svg` },
        { label: "TensorFlow", src: `${process.env.PUBLIC_URL}/tensorflow.svg` },
        { label: "Scikit-learn", src: `${process.env.PUBLIC_URL}/scikitlearn.svg` },
        { label: "Pandas", src: `${process.env.PUBLIC_URL}/pandas.svg` },
        { label: "NumPy", src: `${process.env.PUBLIC_URL}/numpy.svg` },
        { label: "Transformers", src: `${process.env.PUBLIC_URL}/trasformers.png` },
        { label: "RAG", src: `${process.env.PUBLIC_URL}/RAG.png` },
        { label: "LLM-based", src: `${process.env.PUBLIC_URL}/llm_ai.png` },
      ],
    },
    {
      title: "Testing & Quality",
      items: [
        { label: "Pytest", src: `${process.env.PUBLIC_URL}/pytest.svg` },
        { label: "JUnit", src: `${process.env.PUBLIC_URL}/junit5.svg` },
        { label: "Jest", src: `${process.env.PUBLIC_URL}/jest.svg` },
        { label: "Mockito", src: `${process.env.PUBLIC_URL}/mockito.png` },
      ],
    },
  ], []);
  
  const sectionBackgroundColor = 'rgb(215, 209, 235)';
  const scrollContainerRef = useRef(null);

  const scroll = useCallback((direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollAmount = 420;
    const targetScroll =
      container.scrollLeft + (direction === "right" ? scrollAmount : -scrollAmount);
    container.scrollTo({ left: targetScroll, behavior: "smooth" });
  }, []);

  const getRandomRotation = useCallback(() => Math.random() * 14 - 7, []);

  return (
    <section
      className="self-stretch overflow-hidden flex flex-col items-center justify-center py-[60px] px-12 text-left text-29xl text-primary-black font-heading-h6-semibold mq825:py-[39px] mq825:px-6 mq825:box-border"
      data-scroll-to="skills"
      style={{ backgroundColor: sectionBackgroundColor }}
    >
      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 px-0 gap-[20px]">
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
        <div className="relative w-full max-w-[1100px] mx-auto">
          <div className="absolute top-0 left-0 right-0 h-px bg-primary-black/25">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-black/25 to-transparent" />
          </div>

          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-primary-black text-primary-white rounded-full p-2 shadow-lg hover:bg-primary-black/90 transition-colors"
            aria-label="Previous skills"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-primary-black text-primary-white rounded-full p-2 shadow-lg hover:bg-primary-black/90 transition-colors"
            aria-label="Next skills"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-hidden pb-10 pt-10 gap-6 snap-x snap-mandatory px-12"
          >
            {categories.map((cat) => {
              const rotation = getRandomRotation();
              const compact = cat.items.length > 6;
              return (
                <div key={cat.title} className="flex-none snap-center">
                  <div className="relative group">
                    <div className="absolute top-[-2rem] left-1/2 w-px h-8 bg-primary-black/35 -translate-x-1/2">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary-black rounded-full" />
                    </div>

                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-12 z-10">
                      <div className="w-full h-full bg-black rounded-t-lg shadow-md transition-colors duration-300 group-hover:bg-zinc-800" />
                      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-4 h-2 bg-zinc-900 rounded" />
                    </div>

                    <div
                      className="inline-block bg-primary-white/85 backdrop-blur pt-8 pb-4 px-4 shadow-lg transition-all duration-500 ease-in-out border border-primary-black/10"
                      style={{ transform: `rotate(${rotation}deg)` }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "rotate(0deg) translateY(-8px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = `rotate(${rotation}deg)`;
                      }}
                    >
                      <h3 className="m-0 mb-4 text-xl font-heading-h6-semibold tracking-[-0.02em] text-primary-black">
                        {cat.title}
                      </h3>

                      <div className="inline-grid grid-cols-2 gap-x-3 gap-y-3 justify-items-center mx-auto">
                        {cat.items.map((item) => (
                          <Skill
                            key={`${cat.title}-${item.label}`}
                            src={item.src}
                            label={item.label}
                            animateOnScroll={false}
                            backgroundColor={sectionBackgroundColor}
                            compact={compact}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
