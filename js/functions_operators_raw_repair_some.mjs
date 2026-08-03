import { fn_name } from "./fn_name.mjs";
import { function_auto_checked } from "./function_auto_checked.mjs";
import { functions_operators_raw } from "./functions_operators_raw.mjs";
import { functions_operators_raw_baseline_write } from "./functions_operators_raw_baseline_write.mjs";
import { functions_repair_some_generic } from "./functions_repair_some_generic.mjs";
export async function functions_operators_raw_repair_some(how_many) {
  "$plain how_many";
  "Puts a few of the functions that still spell their operators as symbols through the canonicalizing pass, and stops there";
  ("So this is the one to reach for by default and ",
    fn_name("functions_operators_raw_repair"),
    " is for a quiet box. The whole set is about a hundred functions, which is most of the repo touched at once - not a correctness worry, since the pass is behaviour preserving and was probed on the shapes people hold back over, but a bet on the next quarter of an hour being quiet that is somebody's to make");
  ("The checked form is the one handed over, not the bare one: the bare pass throws on a file it cannot process, which would throw past the loop and discard every function already paid for");
  ("How a few are taken, committed one at a time and counted afterwards is shared with the unread-locals family next door, which is where the reasons for each of those steps are written down");
  let r = await functions_repair_some_generic(
    functions_operators_raw,
    "f_name",
    function_auto_checked,
    functions_operators_raw_baseline_write,
    how_many,
  );
  return r;
}
