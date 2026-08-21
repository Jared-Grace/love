import { app_index_emojis } from "./app_index_emojis.mjs";
import { list_find_property_get_or } from "./list_find_property_get_or.mjs";
export function app_index_emoji(app_fn_name) {
  "the small picture that goes in front of one app's name, or nothing at all when no picture says anything about that app.";
  "Nothing is answered as empty writing rather than as a missing thing, because every caller is about to put this in front of a name and empty writing goes in front of a name correctly on its own. A missing thing would make each of them ask the same question again before they could use the answer.";
  let emojis = app_index_emojis();
  let none = "";
  let r = list_find_property_get_or(emojis, "app_fn", app_fn_name, "emoji", none);
  return r;
}
