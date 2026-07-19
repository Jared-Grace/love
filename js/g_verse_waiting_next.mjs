import { global_function_initialize } from "./global_function_initialize.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
export function g_verse_waiting_next() {
  "draw the next waiting-on-the-Lord verse ({reference, text}) for the prayer overlay from the rotating iterator prepared by g_verses_waiting_prepare. until that background resolve finishes (or if it failed), the iterator property is ABSENT — check with property_exists, since a strict property_get THROWS on a missing property — and return a fallback verse so the overlay always has something to show";
  let store = global_function_initialize(g_verse_waiting_next, {});
  let ready = property_exists(store, "iterator");
  if (ready) {
    let iterator = property_get(store, "iterator");
    let verse = iterator();
    return verse;
  }
  let fallback = {
    reference: "Isaiah 40:31",
    text: "Those who wait upon the LORD will renew their strength.",
  };
  return fallback;
}
