import { cases_expected_answers } from "./cases_expected_answers.mjs";
import { list_size_greater_than_assert_json } from "./list_size_greater_than_assert_json.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { property_get } from "./property_get.mjs";
import { gate_case_mark } from "./gate_case_mark.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { property_not } from "./property_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { gate_counts_log } from "./gate_counts_log.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
export async function cases_checked_gate_run_generic(
  cases,
  check,
  label,
  hint,
) {
  arguments_assert(arguments, 4);
  ("Puts every case of a corpus to its own checker and refuses the run when any");
  ("case is answered differently from the way it says.");
  ("The sibling of the plain cases gate, and the difference is who does the");
  ("comparing. There the corpus writes down an answer and the frame compares it;");
  ("here the case has to be carried somewhere real first - past the bash hook, past");
  ("the memory hook, through a recorded run's printing - so the checker is the only");
  ("thing that can say what happened, and it hands back a verdict rather than an");
  ("answer. What it hands back is the same five words every time: how the case reads");
  ("in one line, what was wanted, what came, a note when something else is wrong,");
  ("and whether it passed.");
  ("The checking runs unordered because no case depends on another, and a corpus");
  ("whose cases each start a process is otherwise as slow as the sum of them.");
  ("A gate may add a sentence to its refusal saying what shape to go looking for,");
  ("which is worth most at the moment it fails and is lost if it only lives in the");
  ("docstring. A gate with nothing to add hands over nothing to say.");
  ("A corpus with nothing in it is refused before anything is run. Every gate here");
  ("passes by raising nothing, so a corpus that had quietly come back empty would");
  ("not turn its gate red - it would turn it green, print 'pass 0 fail 0', and read");
  ("as a clean run of the very check that exists because the sweep beneath it cannot");
  ("tell a right answer from no answer.");
  list_empty_not_is_assert_json(cases, {
    label,
    hint: "this corpus came back with no cases at all, so the gate would have passed without asking anything - look at whatever builds the cases rather than at what they check",
  });
  let results = await list_map_unordered_async(cases, check);
  for (let r of results) {
    let passed = property_get(r, "pass");
    let mark = gate_case_mark(passed);
    let note = property_get(r, "note");
    let quiet = text_empty_is(note);
    let tail = quiet ? "" : "  " + note;
    let expected = property_get(r, "expected");
    let actual = property_get(r, "actual");
    let case_label = property_get(r, "label");
    console.log(mark + case_label + "  " + expected + " / " + actual + tail);
  }
  function failed_is(r) {
    let bad = property_not(r, "pass");
    return bad;
  }
  let failures = list_filter(results, failed_is);
  let passes = subtract(results.length, failures.length);
  gate_counts_log(passes, failures.length);
  let any = greater_than(failures.length, 0);
  if (any) {
    throw new Error(label + " gate: " + failures.length + " failed" + hint);
  }
  ("A corpus wanting the same thing of every case is refused for the same reason as an");
  ("empty one, one step further in. It runs something, so it passes the check above -");
  ("but every case wants the one thing, so a run that produced that thing whatever it");
  ("was given is answered right by all of them, and the gate reads green off a");
  ("checker that has stopped looking. A corpus of cases that must all be allowed");
  ("cannot catch a hook that allows everything.");
  ("What each case wanted is read off the verdicts rather than off the cases, because");
  ("here it is the checker that says so - the case is carried somewhere real first and");
  ("only the checker knows what came back. So this also catches a checker that has");
  ("stopped reading its case and wants one fixed thing of all of them.");
  ("Asked here, after the running, rather than up beside the empty check it belongs");
  ("with: what is dangerous is a corpus like this coming out green, and a red one has");
  ("already stopped the run and says something truer about why.");
  let answers = cases_expected_answers(results, "expected");
  list_size_greater_than_assert_json(answers, 1, {
    label,
    answers,
    hint: "every case in this corpus wanted the same thing, so a run producing that one thing whatever it was given would pass all of them - write a case that must come out differently",
  });
  let r2 = {
    pass: results.length,
    fail: 0,
  };
  return r2;
}
