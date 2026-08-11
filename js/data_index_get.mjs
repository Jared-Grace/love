import { function_paths_frozen_is } from "./function_paths_frozen_is.mjs";
import { functions_facts_all } from "./functions_facts_all.mjs";
import { functions_facts_merge_all } from "./functions_facts_merge_all.mjs";
import { global_function_property_exists } from "./global_function_property_exists.mjs";
import { global_function_property_get } from "./global_function_property_get.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
import { property_get } from "./property_get.mjs";
import { and } from "./and.mjs";
import { not } from "./not.mjs";
export async function data_index_get() {
  "The index everything is looked up in, folded once and then kept for as long as this process lives.";
  "It was rebuilt from nothing on every single question, and the auto pass asks three times - once from the step that decides whether a call needs awaiting, once from the step that fills a call's arguments, and once more from anything else that asks. So normalizing a three line function folded a hundred and forty thousand names into lookups three times over, and measured slower than normalizing a forty line one, because what was being timed was never the function.";
  "Keeping it is only safe because the keeping is checked rather than trusted. Every question still asks the disk when each file was last written and how long it is - that is what makes the answer true, and it is the cheap half. What is skipped is the fold, and only when nothing has changed since the last one.";
  "So a peer rewriting a file mid-run is seen: their file reads as changed, and the index is folded again from the facts that now include it. Nothing here can answer about a repo that no longer matches the disk.";
  "The one case where even the cheap half is skipped is a process that has said its folders cannot change - and it is allowed to say that only where it can be seen to be true, which is inside the frozen copy and nowhere else. Asking seven thousand files when they were last written, to be told what is already known, is the whole of what is dropped there. The first question in such a process still asks everything; it is only the ones after it that are answered from what the first one found.";
  let frozen = function_paths_frozen_is();
  let held_frozen = global_function_property_exists(data_index_get, "index");
  let skippable = and(frozen, held_frozen);
  if (skippable) {
    let kept_frozen = global_function_property_get(data_index_get, "index");
    return kept_frozen;
  }
  let asked = await functions_facts_all();
  let changed = property_get(asked, "changed");
  let held = global_function_property_exists(data_index_get, "index");
  let fresh = not(changed);
  let usable = and(held, fresh);
  if (usable) {
    let kept = global_function_property_get(data_index_get, "index");
    return kept;
  }
  let data = {};
  let facts = property_get(asked, "facts");
  functions_facts_merge_all(facts, data);
  global_function_property_set(data_index_get, "index", data);
  return data;
}
