import { reply_titles_preaching } from "./reply_titles_preaching.mjs";
import { reply_choice } from "./reply_choice.mjs";
export function reply_titles_ministry() {
  let preaching = reply_titles_preaching();
  let fn = reply_choice([preaching, "teacher"]);
  return fn;
}
