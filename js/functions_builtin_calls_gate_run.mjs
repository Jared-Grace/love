import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { functions_builtin_calls_pending } from "./functions_builtin_calls_pending.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_size } from "./list_size.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function functions_builtin_calls_gate_run() {
  "QA gate: no file still calls a built-in Math method the repo keeps a name for. The normalize pass writes those names, so a file that has been through it has none left.";
  "It stands at zero rather than at a line already drawn. The thirty-two files that were carrying one were all moved on the day this was written, so there is nothing here being lived with and nothing to grandfather - which is the only moment a gate like this can be added without the baseline immediately becoming the thing everybody reads instead.";
  "What it is really watching is a file that never went through the pass. Anything normalized comes back clean by construction, so the only way to fail is to hand-write a call and commit without running the pass over it - and the repair below is then one command rather than a file to open.";
  "Only what the pass would actually move is counted. A call handing over more than the function beside it takes is left standing on purpose, and so is a method written inside a sentence or a word being matched against as text, so counting those would make the gate unpassable while nothing was wrong.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let pending = await functions_builtin_calls_pending();
  let names = list_map_property(pending, "name");
  let f_name = fn_name("functions_builtin_calls_repair");
  list_empty_is_assert_json(names, {
    hint: text_combine_multiple([
      "a built-in Math method is still being called where the repo keeps a name for it - move every one of them with ",
      f_name,
      ", which repairs exactly these files and commits each one on its own",
    ]),
    names,
  });
  let r = {
    pending: list_size(names),
  };
  return r;
}
