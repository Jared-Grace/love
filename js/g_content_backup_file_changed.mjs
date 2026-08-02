import { property_get_or_null_equal } from "./property_get_or_null_equal.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_object_generation } from "./firebase_storage_object_generation.mjs";
import { g_content_backup_path } from "./g_content_backup_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { and } from "./and.mjs";
import { g_content_backup_file } from "./g_content_backup_file.mjs";
import { property_set } from "./property_set.mjs";
export async function g_content_backup_file_changed(storage_path, generations) {
  "Copies one stored file down, unless the copy already here is of the same writing.";
  "Asking what version storage holds is a few hundred bytes; fetching the file is tens of thousands. Almost nothing changes between one day and the next, so asking first turns a pass that reads everything into one that reads what somebody edited.";
  "The file being present is checked as well as the version matching, because a record saying a file was copied is not the same claim as the file still being there.";
  let project_url = firebase_storage_url_project_jg();
  let generation = await firebase_storage_object_generation(
    project_url,
    storage_path,
  );
  let same = property_get_or_null_equal(generations, storage_path, generation);
  let path = g_content_backup_path(storage_path);
  let exists = await file_exists(path);
  let held = and(same, exists);
  if (held) {
    return path;
  }
  await g_content_backup_file(storage_path);
  property_set(generations, storage_path, generation);
  return path;
}
