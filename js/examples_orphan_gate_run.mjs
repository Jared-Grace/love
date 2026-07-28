import { list_size } from "./list_size.mjs";
import { examples_names } from "./examples_names.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { text_combine } from "./text_combine.mjs";
import { examples_order } from "./examples_order.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function examples_orphan_gate_run() {
  "QA gate: every data/examples file is placed in one of the curriculum tiers.";
  "An ungrouped example still renders, but only in the trailing Other bucket with no";
  "deliberate complexity placement — this fails loud so the junk drawer never grows.";
  let mjs = await examples_names();
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
    hint: "every data/examples file must be listed in the curriculum groups so it has a deliberate tier — add these to the group that fits their complexity (they currently only show in the Other bucket)",
  });
  ("The other direction, which fails silently rather than loudly. Reading the corpus keeps the entries whose file is really there and quietly drops the rest, so a group naming an example nobody wrote reads as a shorter curriculum and never as a mistake — no error, no empty card, nothing to notice. It happened: a name went in as a probe and sat in the list for a day answering to nothing.");
  function example_missing_is(file) {
    let n = list_includes_not(mjs, file);
    return n;
  }
  let missing = list_filter(order_files, example_missing_is);
  list_empty_is_assert_json(missing, {
    hint: "the curriculum groups name these examples but no file in data/examples answers to them, so they are dropped from the reading order without a word — was one renamed or removed, or is the file still to be written?",
  });
  ("Says how much it looked at, because a gate that answers nothing cannot be");
  ("told apart from one that did nothing. Both leave the same empty line, and the");
  ("reader is left inferring a pass from the absence of a complaint.");
  let r = {
    files: list_size(mjs),
    orphans: 0,
    missing: 0,
  };
  return r;
}
