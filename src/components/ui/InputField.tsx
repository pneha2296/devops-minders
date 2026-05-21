import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

type Props = {
  label: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  type?: string;
};

export default function InputField({
  label,
  placeholder,
  register,
  error,
  type = "text",
}: Props) {
  return (
    <div>
      {/* Label */}
      <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
        {label}
      </label>

      {/* Input */}
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className={`mt-2 h-10 w-full rounded-lg border px-3 text-sm outline-none transition-all
        bg-[#121212] border-white/10 text-white
        placeholder:text-gray-500
        focus:border-white/30 focus:ring-2 focus:ring-white/10
        ${error ? "border-red-500 focus:ring-red-500/20" : ""}
        `}
      />

      {/* Error */}
      {error && (
        <p className="text-red-500 text-xs mt-1">{error.message}</p>
      )}
    </div>
  );
}