import { useState } from "react";
import type { SegmentType, SortType } from "@/constants";
import { MobileFilters } from "./MobileFilters";
import { DesktopFilters } from "./DesktopFilters";

type FiltersBarProps = {
  segment: SegmentType;
  sort: SortType;
  onSegmentChange: (value: SegmentType) => void;
  onSortChange: (value: SortType) => void;
};

export const FiltersBar = ({
  segment,
  sort,
  onSegmentChange,
  onSortChange,
}: FiltersBarProps) => {
  const [open, setOpen] = useState<"filter" | "sort" | null>(null);

  return (
    <div className="relative border-b py-2 bg-white mt-6">
      <MobileFilters
        open={open}
        setOpen={setOpen}
        segment={segment}
        sort={sort}
        onSegmentChange={onSegmentChange}
        onSortChange={onSortChange}
      />

      <DesktopFilters
        open={open === "sort" ? "sort" : null}
        setOpen={setOpen as any}
        segment={segment}
        sort={sort}
        onSegmentChange={onSegmentChange}
        onSortChange={onSortChange}
      />
    </div>
  );
};
