import { LandingLayout } from "@/layout/landing.layout";
import { createBrowserRouter } from "react-router-dom";
import { LandingRoutes } from "./landing.routes";

export const router = createBrowserRouter([
  {
    element: <LandingLayout />,
    children: LandingRoutes,
  },
]);
