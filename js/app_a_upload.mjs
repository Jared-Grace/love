import { text_empty_is } from "./text_empty_is.mjs";
import { git_push_repos } from "./git_push_repos.mjs";
import { invoke } from "./invoke.mjs";
import { git_ac_folder } from "./git_ac_folder.mjs";
import { equal } from "./equal.mjs";
import { repos_paths_map_unordered } from "./repos_paths_map_unordered.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { list_skip_1 } from "./list_skip_1.mjs";
import { list_first } from "./list_first.mjs";
import { file_read } from "./file_read.mjs";
import { property_get } from "./property_get.mjs";
import { each_async } from "./each_async.mjs";
import { assert_json } from "./assert_json.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_delete } from "./file_delete.mjs";
export async function app_a_upload(deltas) {
  async function lambda(d) {
    let key = property_get(d, "key");
    let versions = property_get(d, "versions");
    let e = await file_exists(key);
    if (e) {
      let contents = await file_read(key);
      let first = list_first(versions);
      let eq = equal(contents, first);
      assert_json(eq, {
        contents,
        versions,
      });
    }
  }
  await each_async(deltas, lambda);
  async function lambda2(d) {
    let key = property_get(d, "key");
    let versions = property_get(d, "versions");
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
