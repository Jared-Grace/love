import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { functions_shadowing } from "./functions_shadowing.mjs";
import { global_function_property_exists } from "./global_function_property_exists.mjs";
import { global_function_property_get } from "./global_function_property_get.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
export async function functions_shadowing_remembered() {
  arguments_assert(arguments, 0);
  ("Every function whose file hides a name, asked once and then kept for as long as this process lives.");
  ("Three gates ask it and none of them adds anything to the asking. Two of them read the answer and keep the part of it that matters to them - one the names the auto pass writes, one the names the repo already answers to - and the third measures the whole of it against a baseline. So a run of the gates parsed every file in the repo three times over to learn the same thing three times. Measured on the record of what each gate takes: nine and a half seconds each, twenty-eight of the two hundred and sixty-five a whole run costs, and all but nine of those seconds were being spent again.");
  ("Keeping it is safe here because the three that ask never write a file. What could change the answer under them is a peer editing the repo mid-run - and then the three used to disagree with each other, one file at a time, which is worse than the three agreeing about one moment. The ones that DO write are deliberately left asking the plain question: functions_shadowing_rename_all asks before renaming and again afterwards to show the renaming worked, and remembering the first answer would hand it the first answer twice and call that success.");
  let key = fn_name("functions_shadowing");
  let held = global_function_property_exists(functions_shadowing_remembered, key);
  if (held) {
    let kept = global_function_property_get(functions_shadowing_remembered, key);
    return kept;
  }
  let offenders = await functions_shadowing();
  global_function_property_set(functions_shadowing_remembered, key, offenders);
  return offenders;
}
