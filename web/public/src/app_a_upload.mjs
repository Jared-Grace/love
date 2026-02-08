import { function_copy_replace_first } from "../../../love/public/src/function_copy_replace_first.mjs";
import { text_empty_is } from "../../../love/public/src/text_empty_is.mjs";
import { git_push_repos } from "../../../love/public/src/git_push_repos.mjs";
import { invoke } from "../../../love/public/src/invoke.mjs";
import { git_ac_folder } from "../../../love/public/src/git_ac_folder.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { repos_paths_map_unordered } from "../../../love/public/src/repos_paths_map_unordered.mjs";
import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { list_skip_1 } from "../../../love/public/src/list_skip_1.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { assert_json } from "../../../love/public/src/assert_json.mjs";
import { file_exists } from "../../../love/public/src/file_exists.mjs";
import { file_delete } from "../../../love/public/src/file_delete.mjs";
export async function app_a_upload(deltas) {
  async function lambda(d) {
    let key = object_property_get(d, "key");
    let versions = object_property_get(d, "versions");
    let e = await file_exists(key);
    if (e) {
      let contents = await file_read(key);
      let function_copy_replace_first = list_first(versions);
      let eq = equal(contents, function_copy_replace_first);
      assert_json(eq, {
        contents,
        versions,
      });
    }
  }
  await each_async(deltas, lambda);
  async function lambda2(d) {
    let key = object_property_get(d, "key");
    let versions = object_property_get(d, "versions");
    let skipped = list_skip_1(versions);
    async function lambda3(item) {
      let e2 = text_empty_is(item);
      if (e2) {
        await file_delete(key);
      } else {
        await file_overwrite(key, item);
      }
      await repos_paths_map_unordered(each_folder);
      async function each_folder(folder) {
        await git_ac_folder(folder, app_a_upload.name);
      }
    }
    await each_async(skipped, lambda3);
  }
  await each_async(deltas, lambda2);
  async function lambda5() {
    await git_push_repos();
  }
  invoke(lambda5);
}
