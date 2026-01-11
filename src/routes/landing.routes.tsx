import { Pathnames } from "@/routes/pathNames";

export const LandingRoutes = [
  {
    path: Pathnames.landing.home,
    lazy: async () => {
      const module = await import("@/screens/landing/HomePage");
      return { Component: module.default };
    },
  },
  {
    path: Pathnames.landing.detail(),
    lazy: async () => {
      const module = await import("@/screens/landing/DetailPage");
      return { Component: module.default };
    },
  },
];
