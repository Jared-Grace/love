import { property_get } from "./property_get.mjs";
import { g_sermon_edited_path } from "./g_sermon_edited_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function g_sermon_edited_save(sermon) {
  let chapter_code = property_get(sermon, "chapter_code");
  let path = g_sermon_edited_path(chapter_code);
  await file_overwrite_json(path, sermon);
  return path;
}
