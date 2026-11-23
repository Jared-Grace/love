import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
export function calendar_worker_wrangler(routes) {
  arguments_assert(arguments, 1);
  ("The calendar Worker's wrangler settings. routes is ",
    fn_name("calendar_worker_routes"),
    "() for the live site, or [] to reach it only at its workers.dev test address.");
  ("The two are separate Workers - calendar-live on the routes, calendar on workers.dev - because each holds its own TURNSTILE_SECRET: the live one the real secret, the test one Cloudflare's always-pass secret the release walk needs. One Worker could hold only one of them.");
  ('EACH HAS ITS OWN DATABASE (human, 2026-11-22: "want to test locally first - need to be able to keep prod unchanged while developing"). They used to share the one, so a guest or meeting made on the dev page was a real one; the test Worker now writes only to calendar_test.');
  ('7, not 2: the phone rings 5 minutes before, so a meeting 7 minutes out leaves 2 minutes to book and sync before that warning (human, 2026-11-23: "does that mean that it needs to be 7 minutes because 5 minutes early?").');
  ('ONLY THE TEST WORKER HAS SOON_MINUTES (human, 2026-11-23: "since this is test db, can that be allowed? ... don\'t enforce minimum time away rule"): it offers one extra time that many minutes from now, outside the openings and the notice, so a booking and its alarm can be tried in minutes. The live Worker has no such variable, so nothing a guest sends can turn it on there.');
  ("Secrets are not here and never are: FACEBOOK_APP_SECRET and TURNSTILE_SECRET are entered by the human with wrangler secret put, once per Worker. The App ID is public.");
  ("RATE allows 10 calls a minute per address; Cloudflare only offers periods of 10 or 60 seconds.");
  let test = equal(routes.length, 0);
  let name = "calendar-live";
  if (test) {
    name = "calendar";
  }
  let r = {
    name,
    main: "index.mjs",
    compatibility_date: "2026-10-23",
    workers_dev: test,
    routes,
    vars: test
      ? {
          FACEBOOK_APP_ID: "29067273396256514",
          SOON_MINUTES: "7",
        }
      : {
          FACEBOOK_APP_ID: "29067273396256514",
        },
    d1_databases: [
      test
        ? {
            binding: "DB",
            database_name: "calendar_test",
            database_id: "d023a5f9-d830-4f3f-aec3-816120e8de7d",
          }
        : {
            binding: "DB",
            database_name: "calendar",
            database_id: "53cbd4b0-4f59-4a6d-959e-47a98d75b9c0",
          },
    ],
    ratelimits: [
      {
        name: "RATE",
        namespace_id: "1001",
        simple: {
          limit: 10,
          period: 60,
        },
      },
    ],
    observability: {
      enabled: true,
    },
  };
  return r;
}
