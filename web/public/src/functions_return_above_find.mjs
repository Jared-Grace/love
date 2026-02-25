import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { js_return_above_combine } from "../../../love/public/src/js_return_above_combine.mjs";
import { functions_names_each } from "../../../love/public/src/functions_names_each.mjs";
export async function functions_return_above_find() {
  let output = await function_transform(
    "app_a_file_system_initialize",
    js_return_above_combine,
  );
  return;
  async function lambda2(f_name) {}
  await functions_names_each(lambda2);
}
