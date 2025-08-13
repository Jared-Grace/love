import { js_function_id_add } from "./js_function_id_add.mjs";
import { js_arrow_to_function } from "./js_arrow_to_function.mjs";
import { js_declare_assign_null } from "./js_declare_assign_null.mjs";
import { js_call_fill } from "./js_call_fill.mjs";
import { js_dollar } from "./js_dollar.mjs";
import { js_atomize } from "./js_atomize.mjs";
import { js_outside_move } from "./js_outside_move.mjs";
import { log } from "./log.mjs";
import { js_imports_missing_add } from "./js_imports_missing_add.mjs";
import { function_transform } from "./function_transform.mjs";
import { marker } from "./marker.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
import { js_arrow_blockify } from "./js_arrow_blockify.mjs";
export async function function_auto(f_name) {
  marker("1");
  await function_transform(f_name, async function lambda2(ast) {
    let transforms = [
      js_arrow_blockify,
      js_arrow_to_function,
      js_function_id_add,
      js_declare_assign_null,
      js_call_fill,
      js_dollar,
      js_outside_move,
      js_atomize,
    ];
    await each_async(transforms, async function lambda(t) {
      await t(ast);
    });
  });
}
