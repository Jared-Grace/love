import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { throws_assert_text } from "./throws_assert_text.mjs";
import { property_get } from "./property_get.mjs";
import { text_includes } from "./text_includes.mjs";
import { assert_json } from "./assert_json.mjs";
import { equal } from "./equal.mjs";
export function cases_gate_run_generic_gate_run() {
  "QA gate: the runner every corpus gate now goes through both accepts an agreeing";
  "case and refuses a disagreeing one.";
  "Seven gates hand their cases to that one runner and each of them passes by it";
  "raising nothing. So a runner that had stopped refusing would not turn one of them";
  "red - it would turn all seven green at once, over corpora written precisely to be";
  "the thing that cannot go quietly wrong. Collapsing seven copies of the same twenty";
  "five lines into one is worth doing, and it is exactly what creates that single";
  "point, so the point gets watched here.";
  "The cases are made up on the spot rather than read from a corpus, because a corpus";
  "gate for the corpus runner would be asking the runner to vouch for itself.";
  function answer(c) {
    let given = property_get(c, "given");
    return given;
  }
  let agreeing = [
    {
      given: 1,
      want: 1,
      why: "the reader said what the case wrote down",
    },
    {
      given: [],
      want: [],
      why: "two empty answers are the same answer, which is the shape most of these take",
    },
  ];
  let counted = cases_gate_run_generic(
    agreeing,
    answer,
    "want",
    "why",
    "agreeing",
  );
  let passed = property_get(counted, "pass");
  let b = equal(passed, 2);
  assert_json(b, {
    passed,
    hint: "the runner was handed two agreeing cases and did not count both as passing",
  });
  let disagreeing = [
    {
      given: 1,
      want: 2,
      why: "the reader said something the case did not write down, so the run must stop",
    },
  ];
  function refused() {
    let r = cases_gate_run_generic(
      disagreeing,
      answer,
      "want",
      "why",
      "disagreeing",
    );
    return r;
  }
  let message = throws_assert_text(refused);
  let counted_in_message = text_includes(message, "1 failed");
  assert_json(counted_in_message, {
    message,
    hint: "the runner refused, but its words do not say how many cases were answered differently",
  });
  let result = {
    agreeing: 2,
    refused: 1,
  };
  return result;
}
