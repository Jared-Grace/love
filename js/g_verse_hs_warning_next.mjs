import { global_function_initialize } from "./global_function_initialize.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
export function g_verse_hs_warning_next() {
  "draw the next Holy-Spirit-warning verse ({reference, text}) for the dove overlay from the rotating iterator prepared by g_verses_hs_warning_prepare. until that background resolve finishes (or if it failed) the iterator property is ABSENT — check with property_exists (a strict property_get THROWS on a missing property) and return a fallback verse so the overlay always has something to show";
  let store = global_function_initialize(g_verse_hs_warning_next, {});
  let ready = property_exists(store, "iterator");
  if (ready) {
    let iterator = property_get(store, "iterator");
    let verse = iterator();
    return verse;
  }
  let fallback = {
    reference: "John 10:27",
    text: "My sheep listen to My voice; I know them, and they follow Me.",
  };
  return fallback;
}
