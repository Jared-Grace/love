import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { json_format_to } from "./json_format_to.mjs";
("Append a submitted suggestion to a per-chapter history list, so the reviewer can");
("look back at any past suggestion for a passage. One growing list per chapter, in");
("submission order: a list of { verse, text }.");
export async function g_verify_suggest_history_append(
  chapter_code,
  verse,
  text,
) {
  let path = local_function_path_json(
    chapter_code,
    g_verify_suggest_history_append,
  );
  let exists = await file_exists(path);
  let list = [];
  if (exists) {
    list = await file_read_json(path);
  }
  list.push({
    verse,
    text,
  });
  let contents = json_format_to(list);
  await file_overwrite_uncached(path, contents);
  return path;
}
