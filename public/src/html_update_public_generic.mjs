import { log } from "../../../love/public/src/log.mjs";
import { list_join_newline } from "../../../love/public/src/list_join_newline.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { object_properties_from_empty } from "../../../love/public/src/object_properties_from_empty.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { function_dependencies_code_call } from "../../../love/public/src/function_dependencies_code_call.mjs";
import { file_open } from "../../../love/public/src/file_open.mjs";
import { html_overwrite } from "../../../love/public/src/html_overwrite.mjs";
import { html_code_script_module } from "../../../love/public/src/html_code_script_module.mjs";
import { function_name_repo_path_combine } from "../../../love/public/src/function_name_repo_path_combine.mjs";
import { html_code_script_importmap } from "./html_code_script_importmap.mjs";
export async function html_update_public_generic(f_name, file_path, name) {
  let list = [];
  let joined = await function_name_repo_path_combine(f_name, file_path);
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
    list_add(list, importmap);
  }
  let code = object_property_get(d, "code");
  let body = html_code_script_module(code);
  list_add(list, body);
  let joined2 = list_join_newline(list);
  await html_overwrite(name, joined, joined2);
  await file_open(joined);
}
