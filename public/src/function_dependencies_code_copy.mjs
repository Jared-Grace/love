import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { clipboard_copy } from "../../../love/public/src/clipboard_copy.mjs";
import { function_dependencies_code } from "../../../love/public/src/function_dependencies_code.mjs";
export async function function_dependencies_code_copy(f_name) {
  assert_arguments(arguments, 1);
  marker("1");
  let v = await function_dependencies_code(f_name);
  let code = object_property_get(v, "code");
  await clipboard_copy(code);
}
