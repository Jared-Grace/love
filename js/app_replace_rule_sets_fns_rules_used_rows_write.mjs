import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_replace_rule_sets_fns_rules_used_to_rows } from "./app_replace_rule_sets_fns_rules_used_to_rows.mjs";
import { function_unalias_exists } from "./function_unalias_exists.mjs";
import { property_get } from "./property_get.mjs";
import { function_delete } from "./function_delete.mjs";
import { function_new_getter } from "./function_new_getter.mjs";
import { object_property_names } from "./object_property_names.mjs";
export async function app_replace_rule_sets_fns_rules_used_rows_write(
  rule_sets,
) {
  "Lays the given rules-for-a-goal down as the saved list, in the short form of three words to a rule.";
  "Both writers come through here rather than each rendering the file its own way, because the file is read back by a single reader that expects one shape, and two renderers are two chances to lay it down differently.";
  let f_name = fn_name("app_replace_rule_sets_fns_rules_used_rows");
  let f_name2 = fn_name("app_replace_rule_sets_fns_rules_used_from_rows");
  let f_name3 = fn_name("app_replace_rule_sets_fns_rules_used_generate");
  let meaning = text_combine_multiple([
    "Which of an exercise's rules each of its goals actually leant on, by exercise name, three words to a rule: what it matches, what it puts there instead, and the line the author wrote it on. Read back into whole records by ",
    f_name2,
    " - an edit made here is thrown away the next time ",
    f_name3,
    " runs.",
  ]);
  let by_name = app_replace_rule_sets_fns_rules_used_to_rows(rule_sets);
  let u = await function_unalias_exists(f_name);
  let exists = property_get(u, "exists");
  if (exists) {
    await function_delete(f_name);
  }
  await function_new_getter(f_name, meaning, by_name);
  let names = object_property_names(by_name);
  let count = names.length;
  let written = {
    count,
  };
  return written;
}
