import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_oauth_access_token_buy } from "./youtube_oauth_access_token_buy.mjs";
import { sleep_seconds } from "./sleep_seconds.mjs";
import { youtube_oauth_access_token_info } from "./youtube_oauth_access_token_info.mjs";
export async function youtube_oauth_access_token_settle_check() {
  arguments_assert(arguments, 0);
  ("Buys one key and asks Google about that same key several times over the next quarter minute, to tell a key that is bad from one that is merely not known everywhere yet.");
  ("★ MEASURED 2026-10-08: about half of freshly bought keys were refused by Google's own description service the moment they were bought, and a second process buying again was often accepted. Asking about one key repeatedly is what separates the two readings: a bad key stays refused, a key still spreading turns good.");
  let access_token = await youtube_oauth_access_token_buy();
  let waits = [0, 2, 5, 10];
  let checks = [];
  for (let wait of waits) {
    await sleep_seconds(wait);
    let info = await youtube_oauth_access_token_info(access_token);
    checks.push({
      wait,
      status: info.status,
      error_description: info.error_description,
    });
  }
  return checks;
}
