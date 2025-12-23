import { list_add } from "../../../love/public/src/list_add.mjs";
import { html_code_script_importmap } from "../../../love/public/src/html_code_script_importmap.mjs";
import { object_properties_from_empty } from "../../../love/public/src/object_properties_from_empty.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { function_dependencies_code_call } from "../../../love/public/src/function_dependencies_code_call.mjs";
export async function html_update_externals(f_name) {
  let scripts = [];
  const d = await function_dependencies_code_call(f_name);
  let externals = object_property_get(d, "externals");
  log({
    externals,
  });
  let ne = list_empty_not_is(externals);
  if (ne) {
    let imports = object_properties_from_empty(externals, {
      acorn: "https://cdn.jsdelivr.net/npm/acorn/dist/acorn.mjs",
      astring: "https://cdn.jsdelivr.net/npm/astring/dist/astring.mjs",
      "lz-string": "https://cdn.jsdelivr.net/npm/lz-string@1.5.0/+esm",
    });
    let importmap = html_code_script_importmap(imports);
    list_add(scripts, importmap);
  }
  let v = {
    d,
    scripts,
  };
  return v;
}
