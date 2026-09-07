import { gloss_classes_backing_elsewhere_cases } from "./gloss_classes_backing_elsewhere_cases.mjs";
import { less_than } from "./less_than.mjs";
import { list_map } from "./list_map.mjs";
import { gloss_classes_backing_elsewhere } from "./gloss_classes_backing_elsewhere.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
export function gloss_classes_backing_elsewhere_gate_run() {
  "Gate: the queue of classes worth a person's eye holds what the written-down cases say it should, in the order they say, and leaves the classes handed in where they were. Throws so the dispatcher seam exits nonzero.";
  "The queue is what somebody opens and works through, so a fault here is read as work rather than as a fault. Picking up a backed class puts prose that is already right in front of a person to be mended; dropping an elsewhere class hides a wrong origin a reader is being shown. The order is checked too, because most-seen first is what makes the top of the queue the most prose mended, and a queue in any other order still looks like a queue.";
  "The list handed in is checked for its own order afterwards. Ranking is done in place by the sort this is built on, and a queue that quietly reordered its caller's classes would be found by nothing else here.";
  function class_key(one_class) {
    let key = one_class.root + "/" + one_class.claimed;
    return key;
  }
  let cases = gloss_classes_backing_elsewhere_cases();
  let defects = [];
  let size = cases.length;
  let i = 0;
  while (less_than(i, size)) {
    let one = cases[i];
    let classes = one.classes;
    let wanted = one.wanted;
    let before = list_map(classes, class_key).join(" ");
    let queue = gloss_classes_backing_elsewhere(classes);
    let after = list_map(classes, class_key).join(" ");
    let got = list_map(queue, class_key).join(" ");
    let want = wanted.join(" ");
    let wrong = not_equal(got, want);
    if (wrong) {
      let defect = {
        wanted: want,
        got,
      };
      defects.push(defect);
      console.log("backing queue  wanted " + want);
      console.log("                  got " + got);
    }
    let disturbed = not_equal(before, after);
    if (disturbed) {
      let moved = {
        before,
        after,
      };
      defects.push(moved);
      console.log("backing queue reordered the classes handed in");
      console.log("               before " + before);
      console.log("                after " + after);
    }
    i = i + 1;
  }
  let count = defects.length;
  console.log("backing queue defects: " + count);
  let any = greater_than(count, 0);
  if (any) {
    throw new Error(
      "gloss classes backing elsewhere gate: " +
        count +
        " faults - the queue a person works through is holding the wrong classes or holding them in the wrong order",
    );
  }
  let r = {
    checked: size,
    defects: 0,
  };
  return r;
}
