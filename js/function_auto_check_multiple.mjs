import { text_split_comma } from "./text_split_comma.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { function_auto_check } from "./function_auto_check.mjs";
import { list_filter } from "./list_filter.mjs";
import { not } from "./not.mjs";
export async function function_auto_check_multiple(names_comma) {
  "Ask the same question of many functions and report only the ones the normalize pipeline refuses, since a sweep is read for what is broken and a list of everything that worked buries it. The count of what was asked is returned alongside, so an empty list of refusals reads as none out of that many rather than as a sweep that never ran.";
  let names = text_split_comma(names_comma);
  let results = await list_map_async(names, function_auto_check);
  function refused_is(result) {
    let b = not(result.ok);
    return b;
  }
  let refused = list_filter(results, refused_is);
  let r = {
    checked: names.length,
    refused: refused.length,
    names: refused,
  };
  return r;
}
