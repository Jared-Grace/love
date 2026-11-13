import { arguments_assert } from "./arguments_assert.mjs";
export function calendar_turnstile_site_key() {
  arguments_assert(arguments, 0);
  ("The public half of the Turnstile check the booking form shows. A site key is public by design - every page that shows the widget prints it.");
  ("This is Cloudflare's published always-pass test key, matching the always-pass test secret the test Worker holds. Both are replaced together before the calendar goes live; a real key with the test secret, or the reverse, refuses every booking.");
  let key = "1x00000000000000000000AA";
  return key;
}
