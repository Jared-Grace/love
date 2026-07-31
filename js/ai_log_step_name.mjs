import { list_includes_not } from "./list_includes_not.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
import { list_get } from "./list_get.mjs";
import { not } from "./not.mjs";
export function ai_log_step_name(entry) {
  "What a logged line really did, which is not always what it was called.";
  "The commands that pair a selector with a transform are carriers - every one of them is logged under the same name, so read plainly the whole vocabulary arrives as one command run thousands of times and no pairing can be seen at all. The step is the transform it was handed, and that is what this answers.";
  let f_name = property_get(entry, "f_name");
  let carriers = [
    fn_name("function_select_apply_args"),
    fn_name("function_select_apply_code"),
    fn_name("function_select_multiple_apply_args"),
  ];
  let plain = list_includes_not(carriers, f_name);
  if (plain) {
    return f_name;
  }
  let args = property_get(entry, "args");
  let transform = list_get(args, 3);
  let missing = not(transform);
  if (missing) {
    return f_name;
  }
  return transform;
}
