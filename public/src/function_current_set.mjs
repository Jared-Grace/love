import { property_get } from "../../../love/public/src/property_get.mjs";
import { user_repo_path } from "../../../love/public/src/user_repo_path.mjs";
import { marker_top } from "../../../love/public/src/marker_top.mjs";
import { function_parse_declaration_js_unparse } from "../../../love/public/src/function_parse_declaration_js_unparse.mjs";
import { function_unalias_exists } from "../../../love/public/src/function_unalias_exists.mjs";
import { marker_first } from "../../../love/public/src/marker_first.mjs";
import { marker_current_set } from "../../../love/public/src/marker_current_set.mjs";
import { data_transform } from "../../../love/public/src/data_transform.mjs";
import { assert_json } from "../../../love/public/src/assert_json.mjs";
export async function function_current_set(f_name) {
  const v2 = await function_unalias_exists(f_name);
  let unaliased = property_get(v2, "unaliased");
  let exists = property_get(v2, "exists");
  assert_json(exists, {
    f_name,
    unaliased,
  });
  function lambda(previous) {
    return unaliased;
  }
  let d_path = user_repo_path();
  await data_transform("function_current", null, lambda, d_path);
  if (false) {
    ("previously, used markers in vs code text editor however because of brwoser ide, no longer using markers at this time so disabling adding markers to files");
    await marker_top();
    let name = marker_first();
    await marker_current_set(name);
  }
  let v = await function_parse_declaration_js_unparse(unaliased);
  return v;
}
