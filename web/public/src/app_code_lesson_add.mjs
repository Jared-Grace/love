import { app_code_lessons_fns } from "../../../love/public/src/app_code_lessons_fns.mjs";
import { app_replace_rule_set_add_generic } from "../../../love/public/src/app_replace_rule_set_add_generic.mjs";
export async function app_code_lesson_add(fn_base_name) {
  let fns_list = app_code_lessons_fns;
  let name_new = await app_replace_rule_set_add_generic(fn_base_name, fns_list);
  return name_new;
}
