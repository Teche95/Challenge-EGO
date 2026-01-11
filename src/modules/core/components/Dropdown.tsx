import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type Option = {
  label: string;
  value: string;
};

type Props = {
  label: string;
  options: Option[];
  onSelect: (value: string) => void;
};

export function Dropdown({ label, options, onSelect }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center text-[14px] gap-2 font-medium "
      >
        {label}
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {open && (
        <div className="fixed inset-x-4 top-24 md:absolute md:inset-auto md:right-0 md:mt-4w-auto md:w-64 rounded-xlborder border-neutral-200 bg-white shadow-lg z-50 overflow-hidden">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                onSelect(opt.value);
                setOpen(false);
              }}
              className="w-full px-4 py-4 text-left text-sm hover:bg-neutral-100"
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
