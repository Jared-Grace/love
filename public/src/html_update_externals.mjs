import { list_add } from "../../../love/public/src/list_add.mjs";
import { html_code_script_importmap } from "../../../love/public/src/html_code_script_importmap.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_dependencies_code_call } from "../../../love/public/src/function_dependencies_code_call.mjs";
export async function html_update_externals(f_name) {
  let scripts = [];
  const dependencies = await function_dependencies_code_call(f_name);
  let externals = property_get(dependencies, "externals");
  let ne = list_empty_not_is(externals);
  if (ne) {
    let importmap = html_code_script_importmap(externals);
    list_add(scripts, importmap);
  }
  let r = {
    dependencies,
    scripts,
  };
  return r;
}
