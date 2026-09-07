import { less_than } from "./less_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { gloss_root_claimed_shape_cases } from "./gloss_root_claimed_shape_cases.mjs";
import { gloss_root_claimed_shape } from "./gloss_root_claimed_shape.mjs";
export function gloss_root_claimed_shape_gate_run() {
  "Gate: the naming of a writing shape answers what the written-down pairs say it should. Throws so the dispatcher seam exits nonzero.";
  "This test takes findings out of a pile a person is meant to read as faults, so a rule loosened by one letter quietly empties the pile instead of shortening it, and nothing anywhere goes red. The pairs that must come back with nothing are the half of this gate that matters.";
  let cases = gloss_root_claimed_shape_cases();
  let defects = [];
  let size = cases.length;
  let i = 0;
  while (less_than(i, size)) {
    let one = cases[i];
    let root = one.root;
    let claimed = one.claimed;
    let shape = one.shape;
    let named = gloss_root_claimed_shape(root, claimed);
    let wrong = not_equal(named, shape);
    if (wrong) {
      let defect = {
        root,
        claimed,
        shape,
        named,
      };
      defects.push(defect);
      console.log(
        "root shape  " + root + " against " + claimed + "  wanted " + shape,
      );
      console.log("              named " + named);
    }
    i = i + 1;
  }
  let count = defects.length;
  console.log("root shape defects: " + count);
  let any = greater_than(count, 0);
  if (any) {
    throw new Error(
      "gloss root claimed shape gate: " +
        count +
        " pairs named wrong - findings are being excused or left standing against what the corpus says",
    );
  }
  let r = {
    checked: size,
    defects: 0,
  };
  return r;
}
