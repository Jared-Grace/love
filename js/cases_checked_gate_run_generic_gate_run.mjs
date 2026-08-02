import { cases_checked_gate_run_generic } from "./cases_checked_gate_run_generic.mjs";
import { property_get } from "./property_get.mjs";
import { assert_json } from "./assert_json.mjs";
import { throws_assert_text_async } from "./throws_assert_text_async.mjs";
import { text_includes } from "./text_includes.mjs";
import { equal } from "./equal.mjs";
export async function cases_checked_gate_run_generic_gate_run() {
  "QA gate: the runner the carried-case gates go through accepts an agreeing case,";
  "refuses a disagreeing one, and refuses a corpus with nothing in it.";
  "The bash guard, the memory hook and the run's own report all hand their cases to";
  "that one runner, and each of them passes by it raising nothing. So a runner that";
  "had stopped refusing would not turn one of them red - it would turn all three";
  "green at once, over corpora written precisely because the sweeps beneath them";
  "cannot tell a right answer from no answer. Collapsing three copies of the same";
  "twenty-five lines into one is worth doing, and it is exactly what creates that";
  "single point, so the point gets watched here.";
  "The cases are made up on the spot rather than read from a corpus, because a";
  "corpus gate for the corpus runner would be asking the runner to vouch for";
  "itself.";
  function check(c) {
    return c;
  }
  ("Two agreeing cases rather than one, and they want different things on purpose. The");
  ("runner refuses a corpus that wants the same thing of every case, because a run");
  ("producing that one thing whatever it was given would be answered right by all of");
  ("them - so a single case could never be handed to it.");
  let agreeing = [
    {
      label: "a case its checker was happy with",
      expected: "allow",
      actual: "allow",
      note: "",
      pass: true,
    },
    {
      label: "a case its checker was happy with, wanting the other thing",
      expected: "deny",
      actual: "deny",
      note: "",
      pass: true,
    },
  ];
  let counted = await cases_checked_gate_run_generic(
    agreeing,
    check,
    "agreeing",
    "",
  );
  let passed = property_get(counted, "pass");
  let b = equal(passed, 2);
  assert_json(b, {
    passed,
    hint: "the runner was handed two agreeing cases and did not count both as passing",
  });
  let disagreeing = [
    {
      label: "a case that came back other than the way it was written down",
      expected: "deny",
      actual: "allow",
      note: "",
      pass: false,
    },
  ];
  async function refused() {
    let r = await cases_checked_gate_run_generic(
      disagreeing,
      check,
      "disagreeing",
      " - and here is the sentence a gate adds to say what to look for",
    );
    return r;
  }
  let message = await throws_assert_text_async(refused);
  let counted_in_message = text_includes(message, "1 failed");
  assert_json(counted_in_message, {
    message,
    hint: "the runner refused, but its words do not say how many cases were answered differently",
  });
  ("The added sentence is checked because it is the half a gate cannot see for");
  ("itself: a runner that dropped it would still refuse, still count, and still read");
  ("as working, while the one line telling the reader what shape to look for went");
  ("missing at the only moment it was wanted.");
  let hint_in_message = text_includes(message, "what to look for");
  assert_json(hint_in_message, {
    message,
    hint: "the gate handed over a sentence to add to its refusal and the refusal does not carry it",
  });
  async function refused_empty() {
    let r = await cases_checked_gate_run_generic([], check, "empty", "");
    return r;
  }
  let message_empty = await throws_assert_text_async(refused_empty);
  let named_empty = text_includes(message_empty, "no cases at all");
  assert_json(named_empty, {
    message_empty,
    hint: "the runner was handed a corpus with nothing in it and did not refuse - a gate whose cases quietly went missing would print pass 0 fail 0 and read as clean",
  });
  let result = {
    agreeing: 2,
    refused: 1,
    refused_empty: 1,
  };
  return result;
}
