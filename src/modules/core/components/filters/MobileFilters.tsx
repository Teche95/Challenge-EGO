import { ChevronDown, ChevronUp } from "lucide-react";
import type { SegmentType, SortType } from "@/constants";

import { SegmentsList } from "./SegmentList";
import { SortList } from "./SortList";

type Props = {
  open: "filter" | "sort" | null;
  setOpen: (value: "filter" | "sort" | null) => void;
  segment: SegmentType;
  sort: SortType;
  onSegmentChange: (value: SegmentType) => void;
  onSortChange: (value: SortType) => void;
};

export const MobileFilters = ({
  open,
  setOpen,
  segment,
  sort,
  onSegmentChange,
  onSortChange,
}: Props) => {
  return (
    <div className="block lg:hidden">
      <div className="flex justify-between tracking-wider">
        <button
          onClick={() => setOpen(open === "filter" ? null : "filter")}
          className="flex items-center text-sm gap-1 font-semibold"
        >
          Filtrar por
          {open === "filter" ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </button>

        <button
          onClick={() => setOpen(open === "sort" ? null : "sort")}
          className="flex items-center text-sm gap-1 font-semibold"
        >
          Ordenar por
          {open === "sort" ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </button>
      </div>

      {open === "filter" && (
        <div className="absolute left-0 top-full w-1/2 bg-white shadow-xl z-40">
          <SegmentsList
            active={segment}
            onChange={(value) => {
              onSegmentChange(value);
              setOpen(null);
            }}
            variant="mobile"
          />
        </div>
      )}

      {open === "sort" && (
        <div className="absolute right-0 top-full w-1/2 bg-white shadow-xl z-40">
          <SortList
            active={sort}
            onChange={(value) => {
              onSortChange(value);
              setOpen(null);
            }}
            variant="mobile"
          />
        </div>
      )}
    </div>
  );
};
