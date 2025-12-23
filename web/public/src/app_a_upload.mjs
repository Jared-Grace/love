import { git_acp_call_folder } from "../../../love/public/src/git_acp_call_folder.mjs";
import { repos_paths_map_unordered } from "../../../love/public/src/repos_paths_map_unordered.mjs";
import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { list_skip_1 } from "../../../love/public/src/list_skip_1.mjs";
import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_a_upload(deltas) {
  async function lambda(d) {
    let key = object_property_get(d, "key");
    let versions = object_property_get(d, "versions");
    let contents = await file_read(key);
    let first = list_first(versions);
    equal_assert(contents, first);
  }
  await each_async(deltas, lambda);
  async function lambda2(d) {
    let key = object_property_get(d, "key");
    let versions = object_property_get(d, "versions");
    let skipped = list_skip_1(versions);
    async function lambda3(item) {
      let result = await file_overwrite(key, item);
      marker("1");
      await repos_paths_map_unordered(each_folder);
      async function each_folder(folder) {
        await git_acp_call_folder(app_a_upload, args, folder);
      }
    }
    await each_async(skipped, lambda3);
  }
  await each_async(deltas, lambda2);
  marker("1");
}
