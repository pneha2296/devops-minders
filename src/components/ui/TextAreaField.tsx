import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

type Props = {
  label: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
};

export default function TextAreaField({
  label,
  placeholder,
  register,
  error,
}: Props) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-300">{label}</label>

      <textarea
        {...register}
        placeholder={placeholder}
        className={`mt-2 w-full h-32 rounded-lg border px-3 py-2 text-sm
        bg-[#121212] border-white/10 text-white
        placeholder:text-gray-500
        focus:border-white/30 focus:ring-2 focus:ring-white/10
        ${error ? "border-red-500" : ""}
        `}
      />

      {error && (
        <p className="text-red-500 text-xs mt-1">{error.message}</p>
      )}
    </div>
  );
}