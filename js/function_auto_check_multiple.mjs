import { list_filter_map_property } from "./list_filter_map_property.mjs";
import { function_exists_not } from "./function_exists_not.mjs";
import { property_get } from "./property_get.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { function_auto_check } from "./function_auto_check.mjs";
import { list_filter } from "./list_filter.mjs";
import { not } from "./not.mjs";
export async function function_auto_check_multiple(names_comma) {
  "Ask the same question of many functions and report only the ones the normalize pipeline refuses, since a sweep is read for what is broken and a list of everything that worked buries it. The count of what was asked is returned alongside, so an empty list of refusals reads as none out of that many rather than as a sweep that never ran.";
  "A name that no longer exists is reported rather than thrown on. A sweep list is usually gathered from somewhere older than the code it names, so some of its names have since been renamed or deleted, and letting the first of those end the run hides the answer for every name after it.";
  let names = text_split_comma(names_comma);
  async function name_entry(name) {
    let missing = await function_exists_not(name);
    let r = {
      name,
      missing,
    };
    return r;
  }
  let entries = await list_map_async(names, name_entry);
  function missing_is(entry) {
    let b = property_get(entry, "missing");
    return b;
  }
  function live_is(entry) {
    let missing = property_get(entry, "missing");
    let b = not(missing);
    return b;
  }
  let dead = list_filter_map_property(entries, missing_is, "name");
  let live = list_filter_map_property(entries, live_is, "name");
  let results = await list_map_async(live, function_auto_check);
  function refused_is(result) {
    let b = not(result.ok);
    return b;
  }
  let refused = list_filter(results, refused_is);
  let r = {
    checked: live.length,
    refused: refused.length,
    names: refused,
    dead: dead,
  };
  return r;
}
