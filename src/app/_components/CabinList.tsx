import React from "react";
import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";
import FilterCabin from "./FilterCabin";

type CabinListProps = {
  capacity: string;
};

async function CabinList({ capacity }: CabinListProps) {
  const cabins: any = await getCabins();
  let displayCabinList = cabins;
  if (capacity == "small")
    displayCabinList = cabins.filter((cabin: any) => {
      return cabin.maxCapacity < 3;
    });
  if (capacity == "medium")
    displayCabinList = cabins.filter((cabin: any) => {
      return cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7;
    });
  if (capacity == "large")
    displayCabinList = cabins.filter((cabin: any) => {
      return cabin.maxCapacity >= 8;
    });

  return (
    <div>
      <FilterCabin />
      {displayCabinList.length > 0 && (
        <div className=" grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {displayCabinList.map((cabin: any) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CabinList;
