export const LOG_SERVER_BASE_URL = "http://localhost:3000";

export const ServerEndpoints = {
  logs: LOG_SERVER_BASE_URL + "/logs",
} as const;

export const LOG_LEVELS = [
  "error",
  "warn",
  "info",
  "http",
  "verbose",
  "debug",
  "silly",
] as const;

export const LOG_LEVELS_COLOR = {
  error: "red",
  warn: "orange",
  info: "blue",
  http: "green",
  verbose: "yellow",
  debug: "violet",
  silly: "pink",
} as Record<(typeof LOG_LEVELS)[number], string>;

export const SOCIALS = {
  GITHUB: "https://github.com/Loony4Logic/jamt-frontend",
  INSTAGRAM: "instagram.com",
} as const;

/**
 * @description relative to the index route , i.e, "/"
 */
export const ROUTES_MAP = {
  DASHBOARD: "dashboard",
  LOGS: "logs",
  SETTINGS: "settings",
  ABOUT: "about",
} as const;
