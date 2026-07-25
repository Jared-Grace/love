import { g_sermon_groups_write } from "./g_sermon_groups_write.mjs";
import { folder_user_storage_path } from "./folder_user_storage_path.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function g_sermon_groups_write_file(chapter) {
  "read an authored grouping from the convention path sermon_loop/groups_<chapter>.json and store it through the validating writer; the prompt-free entry (the groups JSON lives in a file, not a CLI arg)";
  let name = path_join(["sermon_loop", "groups_" + chapter + ".json"]);
  let path = folder_user_storage_path(name);
  let groups = await file_read_json(path);
  let r = await g_sermon_groups_write(chapter, groups);
  return r;
}
