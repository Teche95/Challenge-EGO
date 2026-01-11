import { SEGMENTS } from "@/constants";
import type { SegmentType } from "@/constants";

type Props = {
  active: SegmentType;
  onChange: (value: SegmentType) => void;
  variant?: "mobile" | "desktop";
};

export const SegmentsList = ({
  active,
  onChange,
  variant = "desktop",
}: Props) => {
  return (
    <>
      {SEGMENTS.map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={
            variant === "mobile"
              ? `w-full px-2 py-2 text-[13px] text-left border-b ${
                  active === item ? "font-semibold" : ""
                }`
              : `px-4 py-1.5 rounded-full text-sm tracking-wider transition ${
                  active === item ? "bg-[#F7F7F7]" : "text-[#373737]"
                }`
          }
        >
          {item}
        </button>
      ))}
    </>
  );
};
