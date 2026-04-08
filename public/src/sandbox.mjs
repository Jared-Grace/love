import { function_open } from "../../../love/public/src/function_open.mjs";
import { function_current_selects_apply } from "../../../love/public/src/function_current_selects_apply.mjs";
import { function_current_set } from "../../../love/public/src/function_current_set.mjs";
import { js_call_callee_name } from "../../../love/public/src/js_call_callee_name.mjs";
import { function_current_selects_empty } from "../../../love/public/src/function_current_selects_empty.mjs";
import { js_call_single } from "../../../love/public/src/js_call_single.mjs";
import { function_node_select_nested } from "../../../love/public/src/function_node_select_nested.mjs";
import { js_statement_first } from "../../../love/public/src/js_statement_first.mjs";
import { function_node_select } from "../../../love/public/src/function_node_select.mjs";
import { app_bible_verses } from "../../../love/public/src/app_bible_verses.mjs";
export async function sandbox() {
  await function_current_selects_empty();
  await function_current_set(app_bible_verses.name);
  let r = await function_node_select(js_statement_first.name);
  let r2 = await function_node_select_nested(js_call_single.name);
  let r4 = await function_node_select_nested(js_call_callee_name.name);
  await function_open(f_name);
  let r32 = await function_current_selects_apply(apply_fn_name);
  let r3 = {
    r,
    r2,
    r4,
  };
  return r3;
}
