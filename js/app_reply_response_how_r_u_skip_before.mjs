import { text_the_servant_of_god_is } from "./text_the_servant_of_god_is.mjs";
import { emoji_100 } from "./emoji_100.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_reply_response_how_r_u_skip_before() {
  let r = text_combine_multiple([
    text_the_servant_of_god_is(),
    " doing good ",
    emoji_100(),
    " through the grace of God, because ",
  ]);
  return r;
}
