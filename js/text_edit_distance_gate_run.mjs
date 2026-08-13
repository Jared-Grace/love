import { text_edit_distance } from "./text_edit_distance.mjs";
import { text_edit_distance_cases } from "./text_edit_distance_cases.mjs";
import { each } from "./each.mjs";
import { equal_not } from "./equal_not.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
export function text_edit_distance_gate_run() {
  "Gate: the counting of one-letter edits answers what the written-down pairs say it should. Throws so the dispatcher seam exits nonzero.";
  "Everything offering somebody a correction rests on this one number, and a number that is quietly one out still looks like a number - the page would go on offering suggestions, just the wrong ones, and nothing anywhere would go red.";
  let cases = text_edit_distance_cases();
  let defects = [];
  function check(one) {
    let before = property_get(one, "before");
    let after = property_get(one, "after");
    let apart = property_get(one, "apart");
    let counted = text_edit_distance(before, after);
    let wrong = equal_not(counted, apart);
    if (wrong) {
      let defect = {
        before,
        after,
        apart,
        counted,
      };
      list_add(defects, defect);
      console.log(
        "edit distance  " + before + " -> " + after + "  wanted " + apart,
      );
      console.log("                 counted " + counted);
    }
  }
  each(cases, check);
  let size = list_size(defects);
  console.log("edit distance defects: " + size);
  if (list_empty_not_is(defects)) {
    throw new Error(
      "text edit distance gate: " +
        size +
        " pairs counted wrong - the suggestions built on this number are wrong with it",
    );
  }
  let r = {
    checked: list_size(cases),
    defects: 0,
  };
  return r;
}
