import { app_shared_screen_name_prefix } from "./app_shared_screen_name_prefix.mjs";
import { app_shared_screen_name_short } from "./app_shared_screen_name_short.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_screen_name_full(app_name, word) {
  "The whole name of the screen a link's screen word stands for - the name the screen is remembered and found by.";
  "Links are written with the short word, but links saved before that may carry the whole name, so both are read: the word is made short first, then the front put back.";
  let prefix = app_shared_screen_name_prefix(app_name);
  let short = app_shared_screen_name_short(app_name, word);
  let full = text_combine(prefix, short);
  return full;
}
