import { gloss_root_claimed_backing_cases } from "./gloss_root_claimed_backing_cases.mjs";
import { less_than } from "./less_than.mjs";
import { gloss_root_claimed_backing } from "./gloss_root_claimed_backing.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
export function gloss_root_claimed_backing_gate_run() {
  "Gate: the reading of a dictionary's walk against a claimed root answers what the written-down pairs say it should. Throws so the dispatcher seam exits nonzero.";
  "This reading clears findings out of a pile a person is meant to read as faults, so a rule reaching one word further quietly empties the pile instead of shortening it, and nothing anywhere goes red. The pairs that must come back elsewhere are the half of this gate that matters, and the pairs that must come back silent are the half that keeps an unasked question from being answered.";
  let cases = gloss_root_claimed_backing_cases();
  let defects = [];
  let size = cases.length;
  let i = 0;
  while (less_than(i, size)) {
    let one = cases[i];
    let root_chain = one.root_chain;
    let claimed = one.claimed;
    let backing = one.backing;
    let read = gloss_root_claimed_backing(root_chain, claimed);
    let wrong = not_equal(read, backing);
    if (wrong) {
      let defect = {
        root_chain,
        claimed,
        backing,
        read,
      };
      defects.push(defect);
      console.log(
        "root backing  [" +
          root_chain.join(" > ") +
          "] against " +
          claimed +
          "  wanted " +
          backing,
      );
      console.log("               read " + read);
    }
    i = i + 1;
  }
  let count = defects.length;
  console.log("root backing defects: " + count);
  let any = greater_than(count, 0);
  if (any) {
    throw new Error(
      "gloss root claimed backing gate: " +
        count +
        " pairs read wrong - findings are being cleared or left standing against what the corpus says",
    );
  }
  let r = {
    checked: size,
    defects: 0,
  };
  return r;
}
