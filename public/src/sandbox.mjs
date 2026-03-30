import { app_replace_rule_set_statements_for } from "../../../love/public/src/app_replace_rule_set_statements_for.mjs";
import { text_remove } from "../../../love/public/src/text_remove.mjs";
import { list_map_prefix_without } from "../../../love/public/src/list_map_prefix_without.mjs";
import { function_source_replace } from "../../../love/public/src/function_source_replace.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function sandbox() {
  let f_name = app_replace_rule_set_statements_for.name;
  let prefix = "id > ";
  let list = [
    "id > e m p t y",
    "id > t a u t o l o g y",
    "id > i d e n t i t y",
    "id > i n v o k e",
    "id > a v e r a g e",
    "id > s u m",
  ];
  let mapped = list_map_prefix_without(list, prefix);
  async function lambda(from) {
    const removal = " ";
    let replaced = text_remove(from, removal);
    await function_source_replace(f_name, from, replaced);
  }
  await each_async(mapped, lambda);
}
