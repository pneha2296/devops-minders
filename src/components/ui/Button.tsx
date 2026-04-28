type Props = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit";
    variant?: "primary" | "secondary";
    fullWidth?: boolean;
  };
  
  export default function Button({
    children,
    onClick,
    type = "button",
    variant = "primary",
    fullWidth = false,
  }: Props) {
    const base =
      "px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200";
  
    const styles =
      variant === "primary"
        ? "bg-white text-black hover:bg-gray-200"
        : "border border-white/20 text-white hover:bg-white/10";
  
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${base} ${styles} ${fullWidth ? "w-full" : ""}`}
      >
        {children}
      </button>
    );
  }