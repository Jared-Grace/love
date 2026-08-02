import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { baselines_unwatched } from "./baselines_unwatched.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
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
  let offenders = await baselines_unwatched();
  list_empty_is_assert_json(offenders, {
    hint: text_combine_multiple([
      "each of these ratchets keeps a record that nothing in q ever opens, so its debt is recorded and no longer refused - add its gate to ",
      fn_name("qa_gates"),
      ", or, if the ratchet is finished with, delete the record and the functions naming it",
    ]),
    offenders,
  });
  let r = {
    unwatched: 0,
  };
  return r;
}
