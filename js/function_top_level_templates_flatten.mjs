import { js_code_top_level_templates_flattened } from "./js_code_top_level_templates_flattened.mjs";
import { function_code_transform } from "./function_code_transform.mjs";
export async function function_top_level_templates_flatten(f_name) {
  "Turn one function file's top-of-file template comments back into plain strings, and say whether anything changed.";
  let r = await function_code_transform(
    f_name,
    js_code_top_level_templates_flattened,
  );
  return r;
}
