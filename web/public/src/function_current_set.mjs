import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { user_data_set } from "../../../love/public/src/user_data_set.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { marker_top } from "../../../love/public/src/marker_top.mjs";
import { function_parse_declaration_js_unparse } from "../../../love/public/src/function_parse_declaration_js_unparse.mjs";
import { function_unalias_exists } from "../../../love/public/src/function_unalias_exists.mjs";
import { marker_first } from "../../../love/public/src/marker_first.mjs";
import { marker_current_set } from "../../../love/public/src/marker_current_set.mjs";
import { assert_json } from "../../../love/public/src/assert_json.mjs";
export async function function_current_set(f_name) {
  const v2 = await function_unalias_exists(f_name);
  let unaliased = property_get(v2, "unaliased");
  let exists = property_get(v2, "exists");
  assert_json(exists, {
    f_name,
    unaliased,
  });
  let f_name_current = await function_current_get();
  if (equal_not(unaliased, f_name_current)) {
    await user_data_set("function_current", unaliased);
  }
  if (false) {
    ("previously, used markers in vs code text editor however because of browser ide, no longer using markers at this time so disabling adding markers to files");
    await marker_top();
    let name = marker_first();
    await marker_current_set(name);
  }
  let v = await function_parse_declaration_js_unparse(unaliased);
  return v;
}
