import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_text_includes } from "./property_text_includes.mjs";
import { not } from "./not.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_marker_call_words } from "./js_marker_call_words.mjs";
import { list_add } from "./list_add.mjs";
export async function literals_marked_both_ways_entry(r) {
  arguments_assert(arguments, 1);
  let entries = property_get(r, "entries");
  let frozen_marker = property_get(r, "frozen_marker");
  let reference_marker = property_get(r, "reference_marker");
  let frozen_needle = property_get(r, "frozen_needle");
  let reference_prefix = property_get(r, "reference_prefix");
  let frozen_sites = property_get(r, "frozen_sites");
  for (let entry of entries) {
    let candidate = property_get(entry, "name");
    let freezes = property_text_includes(entry, "code", frozen_needle);
    if (not(freezes)) {
      continue;
    }
    let tree = await function_ast(candidate);
    let words = js_marker_call_words(tree, frozen_marker);
    for (let word of words) {
      let site = {
        word,
        f_name: candidate,
      };
      list_add(frozen_sites, site);
    }
  }
  return {
    entries,
    reference_marker,
    reference_prefix,
    frozen_sites,
  };
}
