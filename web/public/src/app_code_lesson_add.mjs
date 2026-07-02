import { app_code_lesson_symbols_space } from "../../../love/public/src/app_code_lesson_symbols_space.mjs";
import { app_replace_rule_set_add_generic } from "../../../love/public/src/app_replace_rule_set_add_generic.mjs";
import { app_replace_rule_sets_fns } from "../../../love/public/src/app_replace_rule_sets_fns.mjs";
export async function app_code_lesson_add() {
  let base = app_code_lesson_symbols_space;
  let fns_list = app_replace_rule_sets_fns;
  await app_replace_rule_set_add_generic(base, fns_list);
}
