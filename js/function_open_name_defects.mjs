import { data_identifiers_search } from "./data_identifiers_search.mjs";
import { file_open } from "./file_open.mjs";
import { function_open } from "./function_open.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_includes_not } from "./text_includes_not.mjs";
export async function function_open_name_defects() {
  "Lists fns that reach an editor-opening fn while their own name says nothing about opening";
  "A window landing on the human's screen is worth seeing at the call site, rather than arriving from a name that reads as harmless";
  let by_file = await data_identifiers_search(file_open.name);
  let by_function = await data_identifiers_search(function_open.name);
  let names = properties_get(by_file);
  let more = properties_get(by_function);
  list_add_multiple(names, more);
  let unique = list_unique(names);
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
