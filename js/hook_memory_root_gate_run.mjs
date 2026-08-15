import { hook_memory_root_path } from "./hook_memory_root_path.mjs";
import { hook_memory_root_code } from "./hook_memory_root_code.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { equal } from "./equal.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { assert_json } from "./assert_json.mjs";
export async function hook_memory_root_gate_run() {
  "Gate: the file the memory hook reads the memory folder out of still says what the repo says.";
  "The drift is silent on the dangerous side. A hook naming a folder that has moved does not complain - it simply stops matching anything, decides nothing, and hands the question back, while every reading from this side still says the folder is looked after. That is exactly how a hook was found naming a folder that had been gone for a while, with nothing anywhere going red.";
  "A file that cannot be read at all counts as drift rather than as an error, because the answer wanted is the same either way: write it again.";
  let p = hook_memory_root_path();
  let expected = hook_memory_root_code();
  let actual = await file_read_try(p);
  let fresh = equal(actual, expected);
  let f_name = fn_name("hook_memory_root_write");
  assert_json(fresh, {
    hint: text_combine_multiple([
      "the memory folder the hook names is no longer the one the repo names — write it again with ",
      f_name,
    ]),
    path: p,
  });
  let r = {
    path: p,
    fresh,
  };
  return r;
}
