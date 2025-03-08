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
import docMessage from "./pages/doctorMessage";
import patMessage from "./pages/patientMessage";
import DoctorsLayout from "./pages/doctors/layout";
import DoctorsDashboard from "./pages/doctors/dashboard";
import PatientsLayout from "./pages/patients/layout";
import PatientsDashboard from "./pages/patients/dashboard";
import { z } from "zod";
import PatientsProfileComponent from "./components/pages/common/profile";
import NotFoundPageComponent from "./components/pages/common/404";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: NotFoundPageComponent,
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

const searchSchema = z.object({token: z.string().default("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiam9obl9uZXcifQ.kV0YcDOg200R3STT6FCo7-w8dY4zpXFsZS7Dwl94oUc")})
export const messageDoctorsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/doctors/message",
  component: docMessage,
  validateSearch: (search) => searchSchema.parse(search),
});

const wickSchema = z.object({token: z.string().default("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidGhpbGxhaTIyIn0.dKx0EzQBouH0cQJeeegzm-EOKP5v-qprHEh7fJZk_jM")})
export const messagePatientsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/patients/message",
  component: patMessage,
  validateSearch: (search) => wickSchema.parse(search),
});

export const doctorsProfile = createRoute({
  getParentRoute: () => doctorsLayout,
  path: "/doctors/profile",
  component: PatientsProfileComponent,
});

const patientsLayout = createRoute({
  getParentRoute: () => rootRoute,
  id: "patientsLayout",
  component: PatientsLayout,
});

const patientsDashboard = createRoute({
  getParentRoute: () => patientsLayout,
  path: "/patients/dashboard",
  component: PatientsDashboard,
});

const patientsProfile = createRoute({
  getParentRoute: () => patientsLayout,
  path: "/patients/profile",
  component: PatientsProfileComponent,
});

// add other paths here

const routeTree = rootRoute.addChildren([
  homeRoute,
  signinRoute,
  signupRoute,
  doctorsLayout.addChildren([doctorsDashboard, doctorsProfile, messageDoctorsRoute]),
  patientsLayout.addChildren([patientsDashboard, patientsProfile, messagePatientsRoute]),
]);

const router = createRouter({
  routeTree,
});

export default function App() {
  return <RouterProvider router={router} />;
}
