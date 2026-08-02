import { firebase_storage_download_json_decompress_if_compressed } from "./firebase_storage_download_json_decompress_if_compressed.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { g_content_backup_path } from "./g_content_backup_path.mjs";
import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function g_content_backup_file(storage_path) {
  "Copies one stored file into the backup repo, written out plainly.";
  "Most of it is squeezed small in storage, and a squeezed file is one unreadable line that changes everywhere when one word of it changes. Unpacking it here is what lets the history show which sentence of a sermon somebody edited, which is the whole reason for keeping it in a repo rather than in another bucket.";
  let project_url = firebase_storage_url_project_jg();
  let value = await firebase_storage_download_json_decompress_if_compressed(
    project_url,
    storage_path,
  );
  let path = g_content_backup_path(storage_path);
  await file_parent_exists_ensure(path);
  ("overwriting rather than refusing to, because every pass writes every file again - the second run of a backup that would not overwrite is a failed run, and the repo underneath is what keeps the version being written over");
  let json = json_format_to(value);
  await file_overwrite(path, json);
  return path;
}
