import { Outlet } from "@tanstack/react-router";

const PatientsLayout = () => {
  return (
    <div className="h-full flex">
      <div className="w-20">Menu</div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default PatientsLayout;
