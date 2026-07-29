import { fn_name } from "./fn_name.mjs";
import { function_open } from "./function_open.mjs";
import { js_auto_transform_new_inner } from "./js_auto_transform_new_inner.mjs";
import { function_new_js_open } from "./function_new_js_open.mjs";
export async function js_auto_transform_new_open(f_name_unprefixed) {
  "Registers a new auto transform and shows the human both the new fn and the list it was added to";
  "The showing lives here rather than in the inner fn so that every fn able to put a window on the human's screen says so in its name";
  await function_new_js_open(f_name_unprefixed);
  await js_auto_transform_new_inner(f_name_unprefixed);
  await function_open(fn_name("js_auto_transforms"));
}
