import { arguments_assert } from "./arguments_assert.mjs";
export function calendar_worker_routes() {
  arguments_assert(arguments, 0);
  ("The two address patterns the calendar Worker answers on the live site. Everything else under christarose.org stays with the site's own Worker. Cloudflare's docs say a route wins over a custom domain on the same hostname; check that on the first live deploy.");
  let zone_name = "christarose.org";
  let r = [
    {
      pattern: "christarose.org/calendar/api/*",
      zone_name,
    },
    {
      pattern: "christarose.org/calendar/login/*",
      zone_name,
    },
  ];
  return r;
}
