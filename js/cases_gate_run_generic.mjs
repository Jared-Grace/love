import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { json_equal } from "./json_equal.mjs";
import { json_to } from "./json_to.mjs";
import { list_add } from "./list_add.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export function cases_gate_run_generic(
  cases,
  answer,
  expected_key,
  described_key,
  label,
) {
  arguments_assert(arguments, 5);
  ("Asks one reader every case a corpus writes down, and refuses the run when any");
  ("case is answered differently from the way it says. Receives the asking as a");
  ("lambda because that is the only part that genuinely differs - which reader,");
  ("and what the case has to be turned into before the reader will take it. What");
  ("the corpus calls its expectation and what it calls its line of description are");
  ("two names, not two lambdas, because every corpus in the repo holds both as a");
  ("plain field.");
  ("Every gate of this shape had written the same twenty-five lines out again:");
  ("collect the failures, count them, print a mark per case and a tally at the end,");
  ("throw with a counted message. The reason there are so many is that a sweep");
  ("passing on empty proves nothing, so each new reader wants a corpus - and the");
  ("cost of writing one has been the frame rather than the cases.");
  ("The comparison is the whole-value one rather than a joined line of text. Some");
  ("of the gates folded into this compared lists by gluing them into one word,");
  ("which cannot tell a list holding one word with a comma in it from two words.");
  ("Nothing in the repo spells such a case today, and the stricter question costs");
  ("nothing to ask.");
  ("A failing line says what it wanted as well as what it got, which none of them");
  ("did - reading a failure meant opening the corpus to find out what was expected.");
  let failures = [];
  for (let c of cases) {
    let actual = answer(c);
    let expected = property_get(c, expected_key);
    let b = json_equal(expected, actual);
    let mark = b ? "pass  " : "FAIL  ";
    let wanted = b ? "" : "  want " + json_to(expected);
    let described = property_get(c, described_key);
    console.log(mark + json_to(actual) + wanted + "  " + described);
    if (not(b)) {
      list_add(failures, c);
    }
  }
  let passed = subtract(cases.length, failures.length);
  console.log("\npass " + passed + "  fail " + failures.length);
  if (greater_than(failures.length, 0)) {
    throw new Error(label + " cases gate: " + failures.length + " failed");
  }
  let r = {
    pass: cases.length,
    fail: 0,
  };
  return r;
}
