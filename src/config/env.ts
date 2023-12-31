/**
 * To hide the WIP banner, set VITE_WIP_BANNER to false in .env file, by default the banner is shown.
 */
export const ENV_WIP_BANNER = Boolean(import.meta.env.VITE_WIP_BANNER) ?? true;