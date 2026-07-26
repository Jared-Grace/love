import { function_open_names } from "./function_open_names.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_includes_not } from "./text_includes_not.mjs";
export async function function_open_name_defects() {
  "Lists fns that reach an editor-opening fn while their own name says nothing about opening";
  "A window landing on the human's screen is worth seeing at the call site, rather than arriving from a name that reads as harmless";
  let unique = await function_open_names();
  function lambda(name) {
    let quiet = text_includes_not(name, "open");
    return quiet;
  }
  let defects = list_filter(unique, lambda);
  let r = {
    checked: unique.length,
    defects,
  };
  return r;
}
