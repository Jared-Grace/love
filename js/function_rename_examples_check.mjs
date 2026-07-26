import { examples_paths } from "./examples_paths.mjs";
import { example_rename_lambda } from "./example_rename_lambda.mjs";
import { file_js_transform } from "./file_js_transform.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function function_rename_examples_check(
  f_name_before,
  f_name_after,
) {
  "The example corpus is code, so a rename reaches it the way the repo is edited everywhere else - by the tree rather than by the letters. That is what tells a reference apart from a name that merely reads the same: a fixture the example owns, a name the shown command creates, an ordinary word in the prose all sit in strings and are left alone, while the one way in and the one name read as a value both move. No registry lists these files, so this is told where they are.";
  let paths = await examples_paths();
  let lambda = example_rename_lambda(f_name_before, f_name_after);
  async function transform(f_path) {
    await file_js_transform(f_path, lambda);
  }
  let waited = await list_map_unordered_async(paths, transform);
  return waited;
}
