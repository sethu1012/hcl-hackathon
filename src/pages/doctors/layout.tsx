import { Outlet } from "@tanstack/react-router";
import MenuComponent from "./menu";

const DoctorsLayout = () => {
  return (
    <div className="h-full flex">
      <div className="w-48 h-full">
        <MenuComponent />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DoctorsLayout;
