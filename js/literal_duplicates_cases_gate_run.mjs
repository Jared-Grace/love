import { literal_duplicates_cases } from "./literal_duplicates_cases.mjs";
import { literal_duplicates_generic } from "./literal_duplicates_generic.mjs";
import { property_get } from "./property_get.mjs";
import { json_equal } from "./json_equal.mjs";
import { list_add } from "./list_add.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export function literal_duplicates_cases_gate_run() {
  "QA gate: each body of source written down in the corpus is read the way that";
  "corpus says.";
  "This is the case for the gate that asks the same question of the repo, whose";
  "honest answer today is nothing to do. That answer is the one a broken reader";
  "gives as well, so on its own it proves nothing at all - only a written-down set";
  "of files, holding the cases nobody would ever commit, can tell a clean repo from";
  "a reader that has stopped looking.";
  "Only the name that holds the value and the files that spell it out are compared.";
  "What each of those files is doing with the word is worked out by a separate";
  "reader with a corpus of its own, and pinning it twice here would make this fail";
  "for reasons that are not about this.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = literal_duplicates_cases();
  function answer(c) {
    let codes = property_get(c, "codes");
    let found = literal_duplicates_generic(codes);
    let named = [];
    for (let entry of found) {
      list_add(named, {
        f_name: entry.f_name,
        files: entry.files,
      });
    }
    return named;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "found",
    "why",
    "duplicated constant",
  );
  return r;
}
