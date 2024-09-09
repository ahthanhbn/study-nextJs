"use client";
import React from "react";
import FilterCabinButton from "./FilterCabinButton";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function FilterCabin() {
  const searchParams = useSearchParams();
  const capacity = searchParams.get("capacity")
  const pathname = usePathname();
  const router = useRouter();
  const handleFilterClick = (capacity: string) => {
    router.push(`${pathname}?capacity=${capacity}`, {
      scroll: false,
    });
  };
  return (
    <>
      <div className="flex justify-end items-center ">
        <FilterCabinButton isActive={capacity == "small"} onClick={() => handleFilterClick("small")}>
          Small Cabins
        </FilterCabinButton>
        <FilterCabinButton isActive={capacity == "medium"} onClick={() => handleFilterClick("medium")}>
          Medium Cabins
        </FilterCabinButton>
        <FilterCabinButton isActive={capacity == "large"} onClick={() => handleFilterClick("large")}>
          Large Cabins
        </FilterCabinButton>
      </div>
    </>
  );
}

export default FilterCabin;
