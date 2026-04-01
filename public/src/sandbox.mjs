import { functions_paths } from "../../../love/public/src/functions_paths.mjs";
import { file_transform_replace } from "../../../love/public/src/file_transform_replace.mjs";
import { app_replace_rule_set_statements_if } from "../../../love/public/src/app_replace_rule_set_statements_if.mjs";
import { text_remove } from "../../../love/public/src/text_remove.mjs";
import { list_map_prefix_without } from "../../../love/public/src/list_map_prefix_without.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function sandbox() {
  let f_name = app_replace_rule_set_statements_if.name;
  let prefix = "";
  let list = [" l u v ", "3 . 1 4"];
  let mapped = list_map_prefix_without(list, prefix);
  async function lambda2(f_path) {
    async function lambda(from) {
      const removal = " ";
      let replaced = text_remove(from, removal);
      await file_transform_replace(f_path, from, replaced);
    }
    await each_async(mapped, lambda);
  }
  let r = await functions_paths();
  await each_async(r, lambda2);
}
