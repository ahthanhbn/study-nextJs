import React from "react";
type FillterCabinButtonProps ={
    children : string;
}
function FillterCabinButton({children}: FillterCabinButtonProps) {
  return <>
  <button className="p-3">{children}</button></>;
}

export default FillterCabinButton;
