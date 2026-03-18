import { useEffect } from "react";
import ExperienceComponent from "../ExperienceComponent";

const Experience = () => {
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

  const entries = [
    {
      title: "Graduate Research Extern @ Graphite",
      date: "January 2026 – Present",
      text1:
        "Designed and implemented a configurable LLM experimentation pipeline for Retrieval-Augmented Generation (RAG) to evaluate how AI-generated content affects retrieval quality and answer reliability.",
      text2:
        "Evaluating mitigation strategies including retrieval diversification, controlled sampling, and retrieval filtering to improve robustness of LLM-based search systems.",
    },
    {
      title: "Student Researcher @ W. E. B. Du Bois Library Data Services",
      date: "March 2025 – Present",
      text1:
        "Engineered a Python-based spatial data pipeline to extract and compute bounding boxes for research geospatial datasets, transforming records into GeoBlacklight-compliant JSON and publishing structured metadata to the UMass geospatial portal.",
    },
    {
      title: "Cisco Software Engineer II @ Cisco Systems",
      date: "November 2022 – August 2024",
      text1:
        "Developed a full-stack observability web solution in JavaScript that integrates infrastructure, application, and network monitoring; achieved 95% operational efficiency while processing 1.09 billion data points daily for 525 business applications, 20,000 endpoints, and 57,000 hosts.",
      text2:
        "Customized and deployed a dockerized Zabbix-based monitoring platform, saving $3.4M in licensing costs and migrating 35,386 devices/applications across three multi-region stacks with minimal failover time.",
      text3:
        "Programmed a Ruby-based Logstash algorithm to refine and deduplicate event logs, reducing alert fatigue by 60% and streamlining incident management for cross-functional teams.",
    },
    {
      title: "Software Engineer I @ Cisco Systems",
      date: "August 2021 – October 2022",
      text1:
        "Developed a full-stack application with an automated notification dispatcher using Python, Flask, and MySQL, enabling migration of 25,000+ Cisco servers from ScienceLogic to Zabbix.",
      text2:
        'Engineered a RESTful Spring MVC service to onboard 500 applications to AppDynamics and open-sourced the automation API on <a href="https://developer.cisco.com/codeexchange/github/repo/CiscoIT-DAE/appdynamics-onboarding-api" target="_blank" rel="noopener noreferrer" style="color: #D7D1EB; text-decoration: underline;">Cisco Code Exchange</a>.',
    },
    {
      title: "Technical Undergraduate Intern @ Cisco Systems",
      date: "January 2021 – July 2021",
      text1:
        "Designed and developed a Java-based self-service platform, AppDynamics Operationalizing Tool, to streamline application performance monitoring and incident resolution.",
      text2:
        "Leveraged MongoDB for efficient data management and JavaScript/CSS for an intuitive frontend, improving reliability to 99.9% application uptime and reducing operational overhead by enhancing MTTD and MTTR.",
    },
    {
      title: "Tech Mentor @ K12 Innovation Private Limited (CampK12)",
      date: "April 2020 – June 2020",
      text1:
        "Mentored 30 students in JavaScript, guiding delivery of 12 projects in 3D game development (VR/AR) and Android application development.",
      text2:
        "Improved student performance by 20% through interactive sessions and project-based learning.",
    },
    {
      title: "Summer Intern @ AT&T Global Network Services",
      date: "April 2020 – May 2020",
      text1:
        'Developed an integrated <a href="https://github.com/fabihafatima/Pen-testing-Abode" target="_blank" rel="noopener noreferrer" style="color: #D7D1EB; text-decoration: underline;">pen testing tool</a> combining keylogger, MAC changer, ARP spoofer, vulnerability scanner, and web crawler into a single Python/Django platform for system security checks.',
    },
  ];

  return (
    <section
      className="self-stretch bg-primary-black overflow-hidden flex flex-row items-start justify-start py-[60px] pr-[97px] pl-20 box-border max-w-full text-left text-29xl text-primary-white font-heading-h6-semibold mq825:py-[25px] mq825:pr-12 mq825:pl-10 mq825:box-border mq450:pt-5 mq450:pr-0 mq450:pl-0 mq450:pb-5 mq450:box-border mq1425:pt-[39px] mq1425:pb-[39px] mq1425:box-border"
      data-scroll-to="experience"
    >
      <div className="flex-1 overflow-hidden flex flex-col items-center justify-center py-0 px-8 box-border gap-[32px] max-w-full">
        <div
          className="self-stretch overflow-hidden flex flex-row items-center justify-center py-5 px-0 gap-[16px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-top] opacity-[0] mq450:flex-wrap"
          data-animate-on-scroll
        >
          <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-normal font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
            My
          </h1>
          <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-extrabold font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
            Experience
          </h1>
        </div>

        {/* Timeline container (single left rail) */}
        <div className="relative self-stretch max-w-5xl mx-auto py-8">
          {/* Left vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-primary-white/50 mq450:left-5" />

          <div className="space-y-10">
            {entries.map((entry) => (
              <div
                key={entry.title}
                className="relative flex items-stretch"
              >
                {/* Node */}
                <div className="absolute left-8 top-7 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-white shadow-[0_0_0_4px_rgba(255,255,255,0.15)] mq450:left-5" />

                {/* Card to the right of the line */}
                <div className="pl-16 mq450:pl-12 w-full">
                  <ExperienceComponent
                    Title={entry.title}
                    Date={entry.date}
                    Text1={entry.text1}
                    Text2={entry.text2}
                    Text3={entry.text3}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

// import React from "react";
// import experiences from "../experiences.json";
// import SectionHeading from "./SectionHeading";
// import TimelineItem from "./TimelineItem";

// const Experience = ({ experienceRef }) => {
//   return (
    
//     // <section
//     //   className="bg-lightTertiaryColor text-lightText dark:bg-darkTertiaryColor dark:text-darkText theme-transition"
//     //   ref={experienceRef}
//     // >
//       <section
//       className="self-stretch bg-primary-black overflow-hidden flex flex-row items-start justify-start py-[60px] pr-[97px] pl-20 box-border max-w-full text-left text-29xl text-primary-white font-heading-h6-semibold mq825:py-[25px] mq825:pr-12 mq825:pl-10 mq825:box-border mq450:pt-5 mq450:pr-0 mq450:pl-0 mq450:pb-5 mq450:box-border mq1425:pt-[39px] mq1425:pb-[39px] mq1425:box-border"
//       data-scroll-to="experience"
//       >
//       <div className="relative bg-[#e8d1c0] dark:bg-[#3d2b1f] p-4 md:p-12 rounded-lg shadow-inner text-lightText dark:text-darkText">
//         {/* Background patterns remain the same */}

         
//         <div className="max-w-6xl mx-auto p-4 md:p-8">
//           <div className="relative">
//             {/* Responsive ladder rails */}
//             <div className="hidden md:block absolute left-1/2 -ml-20 w-3 h-full bg-gradient-to-r from-amber-700 to-amber-800 rounded-full dark:from-amber-900 dark:to-amber-950" />
//             <div className="hidden md:block absolute left-1/2 ml-20 w-3 h-full bg-gradient-to-r from-amber-700 to-amber-800 rounded-full dark:from-amber-900 dark:to-amber-950" />

//             {/* Mobile vertical rail */}
//             <div className="md:hidden absolute left-1/2 -ml-1.5 w-3 h-full bg-gradient-to-b from-amber-700 to-amber-800 rounded-full dark:from-amber-900 dark:to-amber-950" />

//             {/* Timeline items */}
//             <div className="relative space-y-8">
//               {experiences.map((exp, index) => (
//                 <TimelineItem
//                   key={index}
//                   experience={exp}
//                   isEven={index % 2 === 0}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
