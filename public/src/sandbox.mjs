import { function_node_select_args } from "../../../love/public/src/function_node_select_args.mjs";
import { app_bible_chapters_before } from "../../../love/public/src/app_bible_chapters_before.mjs";
import { function_open } from "../../../love/public/src/function_open.mjs";
import { function_current_selects_apply } from "../../../love/public/src/function_current_selects_apply.mjs";
import { function_current_set } from "../../../love/public/src/function_current_set.mjs";
import { js_call_callee_name } from "../../../love/public/src/js_call_callee_name.mjs";
import { function_current_selects_empty } from "../../../love/public/src/function_current_selects_empty.mjs";
import { js_call_single } from "../../../love/public/src/js_call_single.mjs";
import { function_node_select_nested } from "../../../love/public/src/function_node_select_nested.mjs";
import { js_statement_first } from "../../../love/public/src/js_statement_first.mjs";
export async function sandbox() {
  await function_current_selects_empty();
  await function_current_set(app_bible_chapters_before.name);
  const select_fn_name = js_statement_first.name;
  let r = await function_node_select_args(select_fn_name);
  let r2 = await function_node_select_nested(js_call_single.name);
  let r4 = await function_node_select_nested(js_call_callee_name.name);
  let r32 = await function_current_selects_apply(function_open.name);
  let r3 = {
    r,
    r2,
    r4,
    r32,
  };
  return r3;
}
