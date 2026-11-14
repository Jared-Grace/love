import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { url_host } from "./url_host.mjs";
import { cloudflare_site_url } from "./cloudflare_site_url.mjs";
import { location_hostname } from "./location_hostname.mjs";
export function calendar_live_is() {
  arguments_assert(arguments, 0);
  ("True only when the calendar page was loaded from the live site. The live page talks to the live Worker with the real are-you-a-person check; every other address - the dev page, the release walk - talks to the test Worker with Cloudflare's always-pass test check, so a walk never needs a real person.");
  let url = cloudflare_site_url();
  let live = url_host(url);
  let left = location_hostname();
  let r = equal(left, live);
  return r;
}
