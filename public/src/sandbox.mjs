import { functions_names_each } from "../../../love/public/src/functions_names_each.mjs";
import { app_replace_rule_set_statements_if } from "../../../love/public/src/app_replace_rule_set_statements_if.mjs";
import { text_remove } from "../../../love/public/src/text_remove.mjs";
import { list_map_prefix_without } from "../../../love/public/src/list_map_prefix_without.mjs";
import { function_source_replace } from "../../../love/public/src/function_source_replace.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function sandbox() {
  let f_name = app_replace_rule_set_statements_if.name;
  let prefix = "";
  let list = ['" l u v "'];
  let mapped = list_map_prefix_without(list, prefix);
  async function lambda(from) {
    const removal = " ";
    let replaced = text_remove(from, removal);
    await function_source_replace(f_name, from, replaced);
  }
  await each_async(mapped, lambda);
  async function lambda2(f_name2) {}
  await functions_names_each(lambda2);
}
