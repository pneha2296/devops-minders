export const ServiceCard = ({ title, description, icon }) => {
    return (
      <div
        className="
          group relative bg-[#1c1c1e] rounded-2xl p-7 cursor-pointer
          border transition-all duration-300 ease-in-out
          hover:-translate-y-0.5 hover:bg-[#1f1b1b]
          hover:text-primary text-white
          hover:border-[#e03232] hover:shadow-[0_0_0_1px_rgba(224,50,50,0.35),0_0_20px_rgba(224,50,50,0.18),0_8px_32px_rgba(0,0,0,0.5)] border-[#2a2a2a]
        "
      >
        {/* Icon Wrap */}
        <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#3a1a1a]">
          <span className="text-[#e03232] w-6 h-6">
            {icon}
          </span>
        </div>
  
        {/* Title */}
        <h3
          className="text-xl font-semibold mb-2 tracking-tight transition-colors duration-300"
        >
          {title}
        </h3>
  
        {/* Description */}
        <p className="text-gray-400 text-base">
          {description}
        </p>
      </div>
    );
  };