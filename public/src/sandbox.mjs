import { app_replace_rule_set_statements_while } from "../../../love/public/src/app_replace_rule_set_statements_while.mjs";
import { text_remove } from "../../../love/public/src/text_remove.mjs";
import { list_map_prefix_without } from "../../../love/public/src/list_map_prefix_without.mjs";
import { function_source_replace } from "../../../love/public/src/function_source_replace.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function sandbox() {
  let f_name = app_replace_rule_set_statements_while.name;
  let prefix = "ex > ";
  let list = ["ex > f o u n d", "ex > a s k", "ex > s e e k"];
  let mapped = list_map_prefix_without(list, prefix);
  async function lambda(from) {
    const removal = " ";
    let replaced = text_remove(from, removal);
    await function_source_replace(f_name, from, replaced);
  }
  await each_async(mapped, lambda);
}
