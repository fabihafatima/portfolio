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
  return (
    <section
      className="self-stretch bg-primary-black overflow-hidden flex flex-row items-start justify-start py-[60px] pr-[97px] pl-20 box-border max-w-full text-left text-29xl text-primary-white font-heading-h6-semibold mq825:py-[25px] mq825:pr-12 mq825:pl-10 mq825:box-border mq450:pt-5 mq450:pr-0 mq450:pl-0 mq450:pb-5 mq450:box-border mq1425:pt-[39px] mq1425:pb-[39px] mq1425:box-border"
      data-scroll-to="experience"
    >
      <div className="flex-1 overflow-hidden flex flex-col items-center justify-center py-0 px-8 box-border  gap-[20px] max-w-full">
        <div
          className="self-stretch overflow-hidden flex flex-row items-center justify-center py-5 px-0 gap-[16px]  [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-top] opacity-[0] mq450:flex-wrap"
          data-animate-on-scroll
        >
          <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-normal font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
            My
          </h1>
          <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-extrabold font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
            Experience
          </h1>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-10 px-6 box-border gap-[32px] max-w-full text-center text-5xl mq825:gap-[16px] mq825:pt-5 mq825:pb-5 mq450:pl-0 mq450:pr-0 mq825:box-border mq1425:pt-[26px] mq1425:pb-[26px] mq1425:box-border">
          
          <ExperienceComponent
            Title="Cisco Software Engineer II @ Cisco Systems"
            Date="November 2022  – August 2024"
            Text1="Developed a full-stack observability web solution in JavaScript, that integrates infrastructure, application, and network monitoring. Achieved 95% operational efficiency, processing 1.09 billion data points daily for 525 business applications, 20,000 application endpoints, and 57,000 hosts."
            Text2="Researched, customized, and deployed a dockerized version of an open-source network and infrastructure monitoring platform – Zabbix (coded in Python and PHP), thereby saving $3.4 million in licensing costs and migrating 35,386 devices/applications to the internal setup of 3 multi-region Zabbix Stacks with minimum failover time, achieving a 100% score in Resiliency Testing."
            Text3="Programmed an algorithm in Ruby for Logstash to refine and deduplicate event logs, reducing alert fatigue by 60% and streamlining incident management for cross-functional teams."
          />
          <ExperienceComponent
            Title="Software Engineer I @ Cisco Systems"
            Date="August 2021 – October 2022"
            Text1="Developed a full stack application with an automated notification dispatcher using Python, Flask, and MySQL, enabling migration of 25000+ Cisco servers from ScienceLogic to Zabbix."
            Text2='Engineered a RESTful Spring MVC service for onboarding 500 applications to AppDynamics and open-sourced the automation API on <a href="https://developer.cisco.com/codeexchange/github/repo/CiscoIT-DAE/appdynamics-onboarding-api" target="_blank" rel="noopener noreferrer" style="color: #D7D1EB; text-decoration: underline;">Cisco Code Exchange</a>.'
          />
          <ExperienceComponent
            Title="Technical Undergraduate Intern @ Cisco Systems"
            Date="January 2021 – July 2021"
            Text1="Designed and developed a Java-based self-service platform, AppDynamics Operationalizing Tool, to streamline application performance monitoring and incident resolution."
            Text2="The platform leverages MongoDB for efficient database management and JavaScript/CSS for an intuitive and responsive frontend. By enhancing Mean Time To Detect (MTTD) and Mean Time To Repair (MTTR), the tool significantly improved system reliability, achieving 99.9% application uptime and reducing operational overhead."
          />
          <ExperienceComponent
            Title="Tech Mentor @ K12 Innovation Private Limited (CampK12)"
            Date="April 2020 - June 2020"
            Text1="Mentored and provided hands-on support to 30 students in JavaScript delivering 12 projects in 3D Game Development (Virtual Reality and Augmented Reality) and Android Application Development "
            Text2="Enhanced student participation by leading engaging discussion sessions, as measured by a 20% increase in student performance."
          />
          <ExperienceComponent
            Title="Summer Intern @ AT&T Global Network Services"
            Date="April 2020 – May 2020"
            Text1='Developed an integrated <a href="https://github.com/fabihafatima/Pen-testing-Abode" target="_blank" rel="noopener noreferrer" style="color: #D7D1EB; text-decoration: underline;"> pen testing tool</a> for system security checks combining Keylogger, MAC Changer, ARP Spoofer, Vulnerability Scanner, and Web Crawler onto a single platform using Python and Django.'
          />
          
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
