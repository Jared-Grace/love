import { path_outward_cases } from "./path_outward_cases.mjs";
import { property_get } from "./property_get.mjs";
import { path_outward_is } from "./path_outward_is.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export function path_outward_gate_run() {
  "Gate: the reading that decides whether a word reaches out of a folder still answers both ways, on the written-down words it is meant to answer both ways on. Throws so the dispatcher seam exits nonzero.";
  "WHAT THIS CATCHES IS A CHECK THAT HAS STOPPED DISAGREEING. The rule this reading serves finds nothing in the whole history it is pointed at, so it is green whether it works or not, and a reading that had quietly started answering no to everything would look exactly as it does now. The inside cases are the half that cannot be faked: they fail the moment somebody widens the reading to make it find something.";
  let cases = path_outward_cases();
  let defects = [];
  for (let one of cases) {
    let word = property_get(one, "word");
    let outward = property_get(one, "outward");
    let got = path_outward_is(word);
    let same = equal(got, outward);
    let wrong = not(same);
    if (wrong) {
      let why = property_get(one, "why");
      console.log(
        "expected " + outward + " got " + got + "  " + word + "  " + why,
      );
      list_add(defects, word);
    }
  }
  console.log(
    "outward reading defects: " + defects.length + " of " + cases.length,
  );
  if (list_empty_not_is(defects)) {
    throw new Error(
      "path outward gate: " +
        defects.length +
        " of " +
        cases.length +
        " words are read the wrong way round - has the reading been narrowed to quieten something?",
    );
  }
  let r = {
    cases: cases.length,
    defects: 0,
  };
  return r;
}
