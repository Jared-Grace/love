import { cases_expected_answers } from "./cases_expected_answers.mjs";
import { list_size_greater_than_assert_json } from "./list_size_greater_than_assert_json.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { gate_case_mark } from "./gate_case_mark.mjs";
import { gate_counts_log } from "./gate_counts_log.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_get } from "./list_get.mjs";
import { json_equal } from "./json_equal.mjs";
import { json_to } from "./json_to.mjs";
import { list_add } from "./list_add.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export function cases_answers_gate_run_generic(
  cases,
  answers,
  expected_key,
  described_key,
  label,
) {
  arguments_assert(arguments, 5);
  ("Compares a corpus against answers already given, and refuses the run when any");
  ("case is answered differently from the way it says.");
  ("It receives the answers rather than the reader that makes them, so that the one");
  ("reader whose answer has to be waited for is not a reason to write this out a");
  ("second time. Waiting is the whole of the difference between the two ways of");
  ("asking, and it belongs in the six lines that do the asking rather than in the");
  ("sixty that judge what came back.");
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
  ("A corpus with nothing in it is refused before anything is judged. Every gate here");
  ("passes by raising nothing, so a corpus that had quietly come back empty would not");
  ("turn its gate red - it would turn it green, print 'pass 0 fail 0', and read as a");
  ("clean run of the very check that exists because the sweep beneath it cannot tell");
  ("a right answer from no answer.");
  list_empty_not_is_assert_json(cases, {
    label,
    hint: "this corpus came back with no cases at all, so the gate would have passed without asking anything - look at whatever builds the cases rather than at what they check",
  });
  let failures = [];
  let index = 0;
  for (let c of cases) {
    let actual = list_get(answers, index);
    index = index + 1;
    let expected = property_get(c, expected_key);
    let b = json_equal(expected, actual);
    let mark = gate_case_mark(b);
    let wanted = b ? "" : "  want " + json_to(expected);
    let described = property_get(c, described_key);
    console.log(mark + json_to(actual) + wanted + "  " + described);
    if (not(b)) {
      list_add(failures, c);
    }
  }
  let passed = subtract(cases.length, failures.length);
  gate_counts_log(passed, failures.length);
  if (greater_than(failures.length, 0)) {
    throw new Error(label + " cases gate: " + failures.length + " failed");
  }
  ("A corpus writing the same answer beside every case is refused for the same reason,");
  ("one step further in. It asks something, so it passes the check above - but every");
  ("case agrees, so a reader handing back that one answer whatever it is given is");
  ("answered right by all of them. The gate then reads green off a reader that has");
  ("stopped looking at its input at all. This is the shape that keeps being got");
  ("wrong: a corpus of cases that must all answer yes cannot catch a reader that");
  ("says yes to everything, and a corpus whose cases all answer with nothing cannot");
  ("catch a reader that has quietly stopped finding anything.");
  ("It is asked here, after the judging, rather than up beside the empty check it");
  ("belongs with. What is dangerous is a corpus like this coming out green - a red one");
  ("has already stopped the run and says something truer about why. Asked first, it");
  ("also stood in front of the one corpus that is meant to be red: the frame's own");
  ("gate hands the runner a single case the reader disagrees with, to prove it");
  ("refuses, and one case can only ever write down one answer.");
  let expected_answers = cases_expected_answers(cases, expected_key);
  list_size_greater_than_assert_json(expected_answers, 1, {
    label,
    answers: expected_answers,
    hint: "every case in this corpus writes down the same answer, so a reader handing that answer back whatever it is given would pass all of them - write a case that must be answered differently",
  });
  let r = {
    pass: cases.length,
    fail: 0,
  };
  return r;
}
