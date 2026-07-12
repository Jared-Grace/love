import { emoji_pray } from "./emoji_pray.mjs";
import { text_the_servant_of_god_is_first_upper } from "./text_the_servant_of_god_is_first_upper.mjs";
import { emoji_globe_americas } from "./emoji_globe_americas.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_reply_choices_location() {
  let t = text_combine_multiple([
    emoji_globe_americas(),
    " ",
    text_the_servant_of_god_is_first_upper(),
    " from 🇺🇸 the United States of America, state of Florida, city of Jacksonville. ",
    emoji_pray(),
  ]);
  return t;
}
