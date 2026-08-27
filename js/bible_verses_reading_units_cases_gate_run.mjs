import { arguments_assert } from "./arguments_assert.mjs";
import { bible_verses_reading_units_cases } from "./bible_verses_reading_units_cases.mjs";
import { property_get } from "./property_get.mjs";
import { bible_verses_reading_units } from "./bible_verses_reading_units.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function bible_verses_reading_units_cases_gate_run() {
  "QA gate: gathers every written-down chapter into reading pieces and holds the answer against the pieces written beside it.";
  "Reads no file. The verses are written into each case, so this asks the same question in the frozen copy a gate runs in as it does anywhere else, and it asks nothing of the bible downloads, which are not in the repo.";
  "IT IS HERE BECAUSE THE RULE IS LOAD-BEARING TWICE OVER. Where a piece ends decides where a recording is cut, and it decides again whether a recording already made still says what its chapter says. A quiet change to the rule would re-cut every future reading and call every past one stale, and nothing else in the repo would go red.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let cases = bible_verses_reading_units_cases();
  function answer(c) {
    let verses = property_get(c, "verses");
    let units = bible_verses_reading_units(verses);
    return units;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "units",
    "name",
    "bible verses reading units",
  );
  return r;
}
