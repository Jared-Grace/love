import { global_function_property_get } from "./global_function_property_get.mjs";
import { function_is } from "./function_is.mjs";
export function g_verse_waiting_next() {
  "draw the next waiting-on-the-Lord verse ({reference, text}) for the prayer overlay from the rotating iterator prepared by g_verses_waiting_prepare. until that background resolve finishes, returns a fallback verse so the overlay always has something to show";
  let iterator = global_function_property_get(g_verse_waiting_next, "iterator");
  let ready = function_is(iterator);
  if (ready) {
    let verse = iterator();
    return verse;
  }
  let fallback = {
    reference: "Isaiah 40:31",
    text: "Those who wait upon the LORD will renew their strength.",
  };
  return fallback;
}
