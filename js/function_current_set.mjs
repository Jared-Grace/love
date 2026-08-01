import { function_current_selects_empty } from "./function_current_selects_empty.mjs";
import { equal_not } from "./equal_not.mjs";
import { function_current_get } from "./function_current_get.mjs";
import { user_data_set } from "./user_data_set.mjs";
import { property_get } from "./property_get.mjs";
import { function_unalias_exists } from "./function_unalias_exists.mjs";
import { assert_json } from "./assert_json.mjs";
export async function function_current_set(f_name) {
  "Records which fn the human is working on. It used to end by parsing that fn and printing it back out, and hand the result over - work that every one of its six callers threw away, so it was read from disk and parsed for nobody.";
  let v = await function_unalias_exists(f_name);
  let unaliased = property_get(v, "unaliased");
  let exists = property_get(v, "exists");
  assert_json(exists, {
    f_name,
    unaliased,
  });
  let f_name_current = await function_current_get();
  if (equal_not(unaliased, f_name_current)) {
    await user_data_set("function_current", unaliased);
    await function_current_selects_empty();
  }
}
