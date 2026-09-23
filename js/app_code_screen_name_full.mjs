import { fn_name } from "./fn_name.mjs";
import { app_shared_screen_name_full } from "./app_shared_screen_name_full.mjs";
export function app_code_screen_name_full(word) {
  "The whole name of the screen a link's screen word stands for - the name the screen is remembered and found by.";
  "Links are written with the short word, but links saved before that carry the whole name, so both are read: the word is made short first, then the front put back.";
  let app = fn_name("app_code");
  let full = app_shared_screen_name_full(app, word);
  return full;
}
