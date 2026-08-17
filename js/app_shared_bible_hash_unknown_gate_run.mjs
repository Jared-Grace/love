import { app_shared_bible_hash_unknown_gate_run_check } from "./app_shared_bible_hash_unknown_gate_run_check.mjs";
import { app_shared_bible_hash_unknown_cases } from "./app_shared_bible_hash_unknown_cases.mjs";
import { app_shared_bible_hash_fields } from "./app_shared_bible_hash_fields.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { each } from "./each.mjs";
export function app_shared_bible_hash_unknown_gate_run() {
  "Gate: a bible link is found to be wrong in exactly the places the written-down links say it is, and the correction a reader needs is among the ones offered. Throws so the dispatcher seam exits nonzero.";
  "Every part of this is silent when it breaks. A field that stops recognising its own words turns every good link into an apology; a field that starts recognising everything turns every wrong link back into the hang it used to be; and a suggestion list that quietly loses the word somebody meant still draws a screen full of buttons, none of which is theirs. None of the three colours a page red on its own.";
  let cases = app_shared_bible_hash_unknown_cases();
  let fields = app_shared_bible_hash_fields();
  let defects = [];
  function check(one) {
    let r2 = app_shared_bible_hash_unknown_gate_run_check(one, fields, defects);
    return r2;
  }
  each(cases, check);
  let size = list_size(defects);
  console.log("bible link defects: " + size);
  if (list_empty_not_is(defects)) {
    throw new Error(
      "bible link gate: " +
        size +
        " links answered wrong - a reader following one of these is told the wrong thing about it",
    );
  }
  let r = {
    checked: list_size(cases),
    defects: 0,
  };
  return r;
}
