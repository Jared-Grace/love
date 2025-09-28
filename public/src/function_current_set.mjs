import { user_repo_path } from "./user_repo_path.mjs";
import { marker } from "./marker.mjs";
import { marker_top } from "./marker_top.mjs";
import { function_parse_declaration_js_unparse } from "./function_parse_declaration_js_unparse.mjs";
import { function_exists } from "./function_exists.mjs";
import { marker_first } from "./marker_first.mjs";
import { marker_current_set } from "./marker_current_set.mjs";
import { data_transform } from "./data_transform.mjs";
import { assert_json } from "./assert_json.mjs";
export async function function_current_set(f_name) {
  marker("1");
  const { exists, unaliased } = await function_exists(f_name);
  assert_json(exists, {
    f_name,
    unaliased,
  });
  function lambda(previous) {
    return unaliased;
  }
  let d_path = user_repo_path();
  await data_transform("function_current", null, lambda, d_path);
  await marker_top();
  let name = marker_first();
  await marker_current_set(name);
  let v = await function_parse_declaration_js_unparse(unaliased);
  return v;
}
