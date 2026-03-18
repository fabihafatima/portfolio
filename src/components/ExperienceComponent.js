import { useEffect } from "react";

// export default ExperienceComponent;
const ExperienceComponent = ({ Title, Date, Text1, Text2, Text3, Text4, Text5 }) => {
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

  const lines = [Text1, Text2, Text3, Text4, Text5].filter(Boolean);

  return (
    <div
      className="group self-stretch rounded-3xs box-border flex flex-col items-start justify-start py-[30px] pr-[25px] pl-[23px] gap-[28px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-top] opacity-[0] max-w-full text-center text-5xl text-primary-white font-heading-h6-semibold border border-zinc-500 bg-zinc-900/40 transition-colors transition-shadow duration-200 hover:bg-primary-white hover:border-primary-white hover:shadow-[0_18px_40px_rgba(0,0,0,0.6)]"
      data-animate-on-scroll
    >
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] max-w-full lg:flex-wrap text-left">
        <div className="flex flex-row items-center justify-start gap-[30px] max-w-full">
          <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[28px] font-semibold font-inherit group-hover:text-primary-black mq450:text-lgi mq450:leading-[22px]">
            {Title}
          </h3>
        </div>
        <div className="relative text-base tracking-[-0.02em] leading-[20px] font-semibold text-zinc-300 group-hover:text-zinc-600 flex items-center justify-center">
          {Date}
        </div>
      </div>
      <div className="self-stretch relative text-[15px] tracking-[0.01em] leading-[24px] text-zinc-200 group-hover:text-primary-black text-left">
        {lines.map((line, idx) => (
          <p
            key={`${Title}-${Date}-${idx}`}
            className="m-0"
            dangerouslySetInnerHTML={{ __html: line }}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceComponent;
