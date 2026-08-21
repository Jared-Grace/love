import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_oauth_access_token_buy } from "./youtube_oauth_access_token_buy.mjs";
import { youtube_oauth_access_token_spell } from "./youtube_oauth_access_token_spell.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { global_function_property_exists } from "./global_function_property_exists.mjs";
import { global_function_property_get } from "./global_function_property_get.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
export async function youtube_oauth_access_token() {
  "A key that opens the channel, bought when there is none to hand and reused for a short spell after that.";
  "Buying costs nothing against the daily allowance, but it is a whole conversation with the sign-in service before every single request, and a sweep of a thousand videos pays for a thousand of them. Reusing one collapses that to a handful an hour.";
  "The spell it is reused for is a small fraction of the hour the key really lasts, so the failure a kept key invites cannot happen here. A key handed over a minute after it died looks exactly like permission being taken away, and that is the worst way there is to fail - it sends whoever sees it off to grant permission again, when nothing was ever wrong with the permission.";
  "A key is only kept once it has been bought successfully, so a lost connection is not remembered as an absence. Whoever asks next asks the sign-in service again, which is the whole reason for asking twice.";
  arguments_assert(arguments, 0);
  let now = date_now_milliseconds();
  let kept = global_function_property_exists(
    youtube_oauth_access_token_buy,
    "held",
  );
  if (kept) {
    let held = global_function_property_get(
      youtube_oauth_access_token_buy,
      "held",
    );
    let bought_at = property_get(held, "bought_at");
    let age = subtract(now, bought_at);
    let spell = youtube_oauth_access_token_spell();
    let young = less_than(age, spell);
    if (young) {
      let already = property_get(held, "access_token");
      return already;
    }
  }
  let access_token = await youtube_oauth_access_token_buy();
  let held = {
    bought_at: now,
    access_token: access_token,
  };
  global_function_property_set(youtube_oauth_access_token_buy, "held", held);
  return access_token;
}
