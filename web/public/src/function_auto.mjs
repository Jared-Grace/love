import { js_outside_move } from "./js_outside_move.mjs";
import { log } from "./log.mjs";
import { js_imports_missing_add } from "./js_imports_missing_add.mjs";
import { function_transform } from "./function_transform.mjs";
import { marker } from "./marker.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
export async function function_auto(f_name) {
  marker();
  await function_transform(f_name, async (ast) => {
    let transforms = [js_outside_move, js_imports_missing_add];
    await each_async(transforms, async (t) => await t(ast));
  });
  function_auto_test();
}
function function_auto_test() {
  log();
}
