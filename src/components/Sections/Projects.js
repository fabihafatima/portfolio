import { useEffect } from "react";
import ProjectComponent from "../ProjectComponent";

const Projects = () => {
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
        className="self-stretch bg-primary-black overflow-hidden flex flex-col items-start justify-start py-[60px] pr-[97px] pl-20 box-border max-w-full text-left text-29xl text-primary-white font-heading-h6-semibold lg:pt-[25px] lg:pb-[25px] lg:box-border mq825:py-5 mq825:pr-12 mq825:pl-10 mq825:box-border mq450:pr-5 mq450:box-border mq1425:pt-[39px] mq1425:pb-[39px] mq1425:box-border"
        data-scroll-to="project"
      >
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 px-8 box-border gap-[20px] max-w-full">
          <div
            className="self-stretch overflow-hidden flex flex-row items-center justify-center py-5 px-0 gap-[16px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-top] opacity-[0] mq450:flex-wrap"
            data-animate-on-scroll
          >
            <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-normal font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
              My
            </h1>
            <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-extrabold font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
              Projects
            </h1>
          </div>
          <ProjectComponent
            Image={`${process.env.PUBLIC_URL}/umate.jpg`}
            Number="01"
            Title="UMate: Bumble for Roommates"
            ImageLink="https://github.com/fabihafatima/UMateFinder"
            Text1="Developed a roommate-finding application in Python with an interactive React frontend with a recommendation algorithm to enhance user compatibility utilized MongoDB for scalable data management and AWS S3 for cloud storage"
            Text2="With UMate, users can easily create a profile, set their preferences, and find potential roommates using an interactive interface similar to dating apps and top-notch recommendation model, UMate suggests the top matches based on compatibility factors like the duration of stay, lifestyle, budget, dietary preferences, and more."
          />
          <ProjectComponent
            Image={`${process.env.PUBLIC_URL}/TravelPlanner.jpeg`}
            Number="02"
            Title="Travel Planner"
            ImageLink="https://github.com/fabihafatima/travel-planner"
            Text1="Developed an AI-driven travel planner using Python, React, and Java Spring Boot to curate personalized itineraries, suggest destinations based on user moods, and generate packing checklists."
            Text2="The platform leverages Llama-3.2-3B-Instruct for AI-powered suggestion generation, enhancing automation and customization in travel planning."
          />
          <ProjectComponent
            Image={`${process.env.PUBLIC_URL}/fraudSpark.png`}
            Number="03"
            Title="FraudSpark: Real-Time Fraud Detection System"
            ImageLink="https://github.com/fabihafatima/FraudSpark-Real-Time-Fraud-Detection-System-"
            Text1="Built a distributed fraud detection system with Random Forest Classifier, optimized for imbalanced datasets and leveraged Kafka for real-time data streaming and PySpark for scalable processing"
          />
          <ProjectComponent
            Image={`${process.env.PUBLIC_URL}/llm.png`}
            Number="04"
            Title="LLMs to the Rescue "
            ImageLink="https://github.com/fabihafatima/llms-to-the-rescue"
            Text1="Addressed class imbalance in text classification by leveraging Large Language Model (Llama-3.2) for data augmentation through style transfer using Python and synthetically enriched underrepresented classes"
          />
          <ProjectComponent
            Image={`${process.env.PUBLIC_URL}/spede.jpg`}
            Number="05"
            Title="Spede: Detecting Emotions from Speech using Deep Learning"
            ImageLink="https://github.com/fabihafatima/Speech-Emotion-Detector-using-Deep-Learning"
            Text1="Spede is a Python-based application with a simple intuitive interface that utilizes machine learning and deep learning techniques to detect emotions in speech or songs from uploaded WAV files, identifying eight emotions: happy, sad, neutral, anger, disgust, calm, surprised, and fearful."
            Text2="By implementing a fusion of CNN-Decision Tree algorithms we analyze and categorize emotional states from English speech, achieving an accuracy of 83.56%."
            />
        </div>
      </section>
    )};

    export default Projects;