import { function_dependencies_code_unaliased } from "../../../love/public/src/function_dependencies_code_unaliased.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_name_main } from "../../../love/public/src/app_name_main.mjs";
export async function app_component(a_name, root) {
  let v = await function_dependencies_code_unaliased(a_name);
  let d = object_property_get(v, "d");
  let code = object_property_get(v2, "code");
  let combined = app_name_main(a);
  let context = {
    root,
  };
  await fn(context);
}
