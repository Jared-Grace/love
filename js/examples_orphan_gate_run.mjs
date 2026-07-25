import { folder_read } from "./folder_read.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_map } from "./list_map.mjs";
import { text_combine } from "./text_combine.mjs";
import { examples_order } from "./examples_order.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function examples_orphan_gate_run() {
  ("QA gate: every data/examples file is placed in a curriculum tier (examples_groups).");
  ("An ungrouped example still renders, but only in the trailing Other bucket with no");
  ("deliberate complexity placement — this fails loud so the junk drawer never grows.");
  let names = await folder_read("data/examples");
  function is_mjs(name) {
    let ew = text_ends_with(name, ".mjs");
    return ew;
  }
  let mjs = list_filter(names, is_mjs);
  let order = examples_order();
  function to_file(base) {
    let combined = text_combine(base, ".mjs");
    return combined;
  }
  let order_files = list_map(order, to_file);
  function is_orphan(file) {
    let n = list_includes_not(order_files, file);
    return n;
  }
  let orphans = list_filter(mjs, is_orphan);
  list_empty_is_assert_json(orphans, {
    hint: "every data/examples file must be listed in examples_groups() so it has a deliberate curriculum tier — add these to the group that fits their complexity (they currently only show in the Other bucket)",
  });
}
