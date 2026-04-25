import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
import { text_the_servant_of_god_is_first_upper } from "../../../love/public/src/text_the_servant_of_god_is_first_upper.mjs";
import { emoji_globe_americas } from "../../../love/public/src/emoji_globe_americas.mjs";
export function app_reply_choices_location() {
  let t =
    emoji_globe_americas() +
    " " +
    text_the_servant_of_god_is_first_upper() +
    " from 🇺🇸 the United States of America, state of Florida, city of Jacksonville. " +
    emoji_pray();
  return t;
}
