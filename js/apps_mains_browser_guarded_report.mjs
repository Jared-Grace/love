import { property_not } from "./property_not.mjs";
import { apps_all_main_fns } from "./apps_all_main_fns.mjs";
import { function_browser_guarded_is } from "./function_browser_guarded_is.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function apps_mains_browser_guarded_report() {
  "Answers, for every app entry point at once, which ones say where they stop being a problem in a browser and which ones say nothing.";
  "It exists so the question needs no shell around it. Asked one file at a time the answer has to be assembled out of a list of names, a rewrite of each name into a path, and a search of each path, and every one of those steps is a place to get the assembly wrong. Here the list and the question meet inside one function, so what comes back is the answer rather than the materials for it.";
  let mains = apps_all_main_fns();
  async function main_entry(name) {
    let guarded = await function_browser_guarded_is(name);
    let entry = {
      name,
      guarded,
    };
    return entry;
  }
  let entries = await list_map_async(mains, main_entry);
  function entry_guarded_is(entry) {
    let guarded = property_get(entry, "guarded");
    return guarded;
  }
  function entry_bare_is(entry) {
    let bare = property_not(entry, "guarded");
    return bare;
  }
  let guarded_entries = list_filter(entries, entry_guarded_is);
  let bare_entries = list_filter(entries, entry_bare_is);
  let r = {
    checked: list_size(mains),
    guarded: list_map_property(guarded_entries, "name"),
    unguarded: list_map_property(bare_entries, "name"),
  };
  return r;
}
