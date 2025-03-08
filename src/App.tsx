import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Home from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import DoctorsLayout from "./pages/doctors/layout";
import DoctorsDashboard from "./pages/doctors/dashboard";
import PatientsLayout from "./pages/patients/layout";
import PatientsDashboard from "./pages/patients/dashboard";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const signinRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/signin",
  component: Signin,
});

const signupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/signup",
  component: Signup,
});

const doctorsLayout = createRoute({
  getParentRoute: () => rootRoute,
  id: "doctorsLayout",
  component: DoctorsLayout,
});

const doctorsDashboard = createRoute({
  getParentRoute: () => doctorsLayout,
  path: "/doctors/dashboard",
  component: DoctorsDashboard,
});

const patientsLayout = createRoute({
  getParentRoute: () => rootRoute,
  id: "patientsLayout",
  component: PatientsLayout,
});

const patientsDashboard = createRoute({
  getParentRoute: () => doctorsLayout,
  path: "/patients/dashboard",
  component: PatientsDashboard,
});

// add other paths here

const routeTree = rootRoute.addChildren([
  homeRoute,
  signinRoute,
  signupRoute,
  doctorsLayout.addChildren([doctorsDashboard]),
  patientsLayout.addChildren([patientsDashboard]),
]);

const router = createRouter({
  routeTree,
});

export default function App() {
  return <RouterProvider router={router} />;
}
