import { text_first_upper_to } from "../../../love/public/src/text_first_upper_to.mjs";
import { emoji_100 } from "../../../love/public/src/emoji_100.mjs";
import { text_the_servant_of_god_is } from "../../../love/public/src/text_the_servant_of_god_is.mjs";
export function app_reply_response_how_r_u_skip_before() {
  let t =
    text_the_servant_of_god_is() +
    " doing good " +
    emoji_100() +
    " through the grace of God, because ";
  let u = text_first_upper_to(t);
  return u;
}
