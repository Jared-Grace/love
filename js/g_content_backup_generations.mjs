import { g_content_backup_generations_path } from "./g_content_backup_generations_path.mjs";
import { file_read_json_initialize } from "./file_read_json_initialize.mjs";
export async function g_content_backup_generations() {
  "What the backup already holds, read as a file address against the version of it that was copied.";
  "The first run has nothing to read, and is handed an empty record rather than an error, because a backup that has never run is the ordinary way for one to start.";
  let path = g_content_backup_generations_path();
  let initial = {};
  let data = await file_read_json_initialize(path, initial);
  return data;
}
