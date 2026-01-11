import { SORT_OPTIONS, type SortType } from "@/constants";

type Props = {
  active: SortType;
  onChange: (value: SortType) => void;
  variant?: "mobile" | "desktop";
};

export const SortList = ({ active, onChange, variant = "desktop" }: Props) => {
  return (
    <>
      {SORT_OPTIONS.map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={
            variant === "mobile"
              ? `w-full px-2 py-2 text-[13px] text-left border-b ${
                  active === item ? "font-semibold" : ""
                }`
              : `w-full px-3 py-2 text-sm text-left border-b ${
                  active === item ? "font-semibold bg-gray-100" : ""
                }`
          }
        >
          {item}
        </button>
      ))}
    </>
  );
};
