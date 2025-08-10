import { js_declaration_single } from "./js_declaration_single.mjs";
import { function_transform } from "./function_transform.mjs";
import { marker } from "./marker.mjs";
export async function function_param_new(f_name) {
  await function_transform(f_name, (ast) => {
    marker();
    js_declaration_single(parsed);
    let declaration = js_declaration_single(ast);
  });
}
