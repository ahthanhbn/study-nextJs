import React from "react";
type FilterCabinButtonProps = {
  isActive : boolean;
  onClick: () => void;
  children: string;
};
function FilterCabinButton({isActive, onClick, children }: FilterCabinButtonProps) {
  return (
    <button
      onClick={onClick}
      className= {`${isActive? " bg-primary-500" :" bg-primary-900" } p-3 hover:bg-slate-700 mx-1`}
    >
      {children}
    </button>
  );
}

export default FilterCabinButton;
