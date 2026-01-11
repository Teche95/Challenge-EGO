const LandingPaths = {
  home: "/",
  detail: (id = ":id") => `/car/${id}`,
} as const;

export const Pathnames = {
  landing: LandingPaths,
} as const;
