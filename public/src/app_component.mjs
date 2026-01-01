import { log } from "../../../love/public/src/log.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { newline } from "../../../love/public/src/newline.mjs";
import { app_context_initialize_root } from "../../../love/public/src/app_context_initialize_root.mjs";
import { function_dependencies_code_unaliased } from "../../../love/public/src/function_dependencies_code_unaliased.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_name_main } from "../../../love/public/src/app_name_main.mjs";
export async function app_component(a_name) {
  let combined = app_name_main(a_name);
  let i = 1;
  log(i++);
  let v = await function_dependencies_code_unaliased(combined);
  log(i++);
  let d = object_property_get(v, "d");
  let code = object_property_get(d, "code");
  code += newline() + combined;
  log(i++);
  let fn = eval(code);
  log(i++);
  let root = html_document_body();
  log(i++);
  log({
    fn,
    combined,
  });
  await app_context_initialize_root(root, fn);
  log(i++);
}
