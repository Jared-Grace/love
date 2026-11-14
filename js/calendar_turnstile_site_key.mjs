import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_live_is } from "./calendar_live_is.mjs";
export function calendar_turnstile_site_key() {
  arguments_assert(arguments, 0);
  ("The public half of the Turnstile check the booking form shows. A site key is public by design - every page that shows the widget prints it.");
  ("On the live site this is the real widget's key, matching the real secret the live Worker holds. Anywhere else it is Cloudflare's published always-pass test key, matching the always-pass test secret the test Worker holds, so the release walk never needs a person. A key with the other Worker's secret refuses every booking.");
  if (calendar_live_is()) {
    let r = "0x4AAAAAAGBP1uH1-kdu_f1N";
    return r;
  }
  let key = "1x00000000000000000000AA";
  return key;
}
