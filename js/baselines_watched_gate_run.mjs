import { arguments_assert } from "./arguments_assert.mjs";
import { baselines_unwatched } from "./baselines_unwatched.mjs";
import { baselines_unwatched_excused } from "./baselines_unwatched_excused.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_size } from "./list_size.mjs";
export async function baselines_watched_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: every ratchet's record is opened by the repo-wide gate. Throws so the");
  ("dispatcher seam exits nonzero.");
  ("A ratchet only shrinks because one gate reads its record every run and refuses");
  ("what the record does not already hold. Take the reading away and the file stays,");
  ("the offenses in it stay, and nothing refuses a new one written in beside them.");
  ("That is the failure this cannot be told apart from success by looking - a record");
  ("nobody opens and a debt being paid down are the same quiet file - so it is asked");
  ("about rather than remembered.");
  ("The whole family is asked by its shape, so a ratchet added tomorrow is asked the");
  ("same question without anybody remembering to come back here. That is what its");
  ("neighbour learned: the four writers it was built for each promised in prose to");
  ("refuse growth, and a fifth landed from a peer while the check was being written.");
  ("★ THE TWO ROUTES THIS OFFERED WERE WIRE IT OR DELETE IT, AND A RECORD CAN BE DELIBERATELY UNREAD AND WORTH KEEPING AT THE SAME TIME. The case that showed it, on 2026-10-02: the original-language gloss verse-claims record, eight hundred and sixteen rows, taken out of the repo-wide list by the human on 2026-09-28 because the reading cannot tell a sentence that made no claim from one that made a wrong claim - and kept, because the rows are a reading queue and two of the three hundred and eighty-one read by hand were real faults. Wiring it is the thing that was refused; deleting it throws the queue away. So a third route is subtracted here, and the sibling reading beside this one says which records it covers.");
  ("NOTHING IS TYPED HERE, AND NO EXCUSE IS POLICED HERE EITHER. The let-off lives in the list the wiring gate keeps, which already refuses a name nothing answers to, a name since wired, and an entry that never said why. Reading it from there rather than keeping a list of our own is what stops the two gates disagreeing about one decision, and it means withdrawing a let-off turns both of them red together.");
  let unwatched = await baselines_unwatched();
  let excused = await baselines_unwatched_excused();
  let offenders = list_without_multiple(unwatched, excused);
  list_empty_is_assert_json(offenders, {
    hint: text_combine_multiple([
      "each of these ratchets keeps a record that nothing in q ever opens, so its debt is recorded and no longer refused - add its gate to ",
      fn_name("qa_gates"),
      ", or name that gate in ",
      fn_name("functions_gate_run_unwired_exempt"),
      " with the reason it stands outside the lists, or, if the ratchet is finished with, delete the record and the functions naming it",
    ]),
    offenders,
  });
  let r = {
    unwatched: 0,
    excused: list_size(excused),
  };
  return r;
}
