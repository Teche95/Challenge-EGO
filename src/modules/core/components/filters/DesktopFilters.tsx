import { ChevronDown, ChevronUp } from "lucide-react";
import { SegmentsList } from "./SegmentList";
import { SortList } from "./SortList";
import type { SegmentType, SortType } from "@/constants";

type Props = {
  open: "sort" | null;
  setOpen: (value: "sort" | null) => void;
  segment: SegmentType;
  sort: SortType;
  onSegmentChange: (value: SegmentType) => void;
  onSortChange: (value: SortType) => void;
};

export const DesktopFilters = ({
  open,
  setOpen,
  segment,
  sort,
  onSegmentChange,
  onSortChange,
}: Props) => {
  return (
    <div className="hidden lg:flex items-center justify-between py-4">
      <div className="flex items-center gap-6">
        <span className="text-sm font-semibold">Filtrar por</span>
        <SegmentsList active={segment} onChange={onSegmentChange} />
      </div>

      <div className="relative">
        <button
          onClick={() => setOpen(open === "sort" ? null : "sort")}
          className="flex items-center gap-1 text-sm font-semibold"
        >
          Ordenar por
          {open === "sort" ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </button>

        {open === "sort" && (
          <div className="absolute right-0 mt-2 w-64 bg-white shadow-xl z-40">
            <SortList
              active={sort}
              onChange={(value) => {
                onSortChange(value);
                setOpen(null);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
