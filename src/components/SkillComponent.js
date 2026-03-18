import React from "react";

const Skill = ({ src, label, animateOnScroll, backgroundColor, compact }) => {
  const cardClasses = compact
    ? "w-[76px] h-[102px] py-2.5 px-2 gap-[7px]"
    : "w-[88px] h-[110px] py-3 px-2 gap-[8px]";
  const iconClasses = compact ? "w-10 h-10" : "w-12 h-12";

  return (
    <div
      className={`rounded-2xl box-border flex flex-col items-center justify-center ${cardClasses} ${
        animateOnScroll ? "animate-[1s_ease_0s_1_normal_forwards_scale-up]" : ""
      } opacity-[1] border border-primary-black/25 bg-primary-white`}
      style={{ backgroundColor: "#ffffff" }}
      data-animate-on-scroll={animateOnScroll}
    >
      {src ? (
        <img
          className={`relative overflow-hidden shrink-0 object-contain ${iconClasses}`}
          loading="eager"
          alt={label}
          src={src}
        />
      ) : (
        <div className="w-10 h-10 rounded-lg border border-primary-black/10 bg-primary-white/20" />
      )}
      <span className="self-stretch relative text-[11px] font-medium tracking-[-0.01em] leading-[15px] text-center break-words px-1 mq450:text-[10px] mq450:leading-[13px]">
        {label}
      </span>
    </div>
  );
};

export default Skill;
