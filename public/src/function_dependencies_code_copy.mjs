import { marker } from "./marker.mjs";
import { clipboard_copy } from "./clipboard_copy.mjs";
import { function_dependencies_code } from "./function_dependencies_code.mjs";
export async function function_dependencies_code_copy(f_name) {
  marker("1");
  let code = await function_dependencies_code(f_name);
  await clipboard_copy(code);
}
