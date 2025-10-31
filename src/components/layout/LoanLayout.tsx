
import React from "react";
import { Outlet } from "react-router-dom";
import LoanNavbar from "../loan/LoanNavbar";
import LoanFooter from "../loan/LoanFooter";


const LoanLayout = () => {
  return (
    <>
      <LoanNavbar />
      <Outlet />
      <LoanFooter />
    </>
  );
};

export default LoanLayout;
