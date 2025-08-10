import { js_declaration_single } from "./js_declaration_single.mjs";
import { function_transform } from "./function_transform.mjs";
import { marker } from "./marker.mjs";
import { log } from "./log.mjs";
export async function function_param_new(f_name) {
  await function_transform(f_name, (ast) => {
    marker();
    let declaration=js_declaration_single(ast);
    log(declaration)
  });
}
