import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { properties_get } from "./properties_get.mjs";
import { folder_web_latest_absolute_join } from "./folder_web_latest_absolute_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { file_hash } from "./file_hash.mjs";
import { property_get } from "./property_get.mjs";
export async function qa_stage_pieces_changed(hashes) {
  "Names the files in the waiting folder that are no longer what these hashes say, a missing file counting as changed";
  "The refusal to build during a send stops a build starting; it cannot stop one that began first and finishes during the walk, or a copy made by hand. This reads the files themselves, so it catches those too";
  arguments_assert(arguments, 1);
  let changed = [];
  let file_names = properties_get(hashes);
  for (let file_name of file_names) {
    let file_path = folder_web_latest_absolute_join(file_name);
    let standing = await file_exists(file_path);
    if (not(standing)) {
      list_add(changed, file_name);
      continue;
    }
    let hash_now = await file_hash(file_path);
    let hash_built = property_get(hashes, file_name);
    if (not_equal(hash_now, hash_built)) {
      list_add(changed, file_name);
    }
  }
  return changed;
}
