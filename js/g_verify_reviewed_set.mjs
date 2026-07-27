import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { json_format_to } from "./json_format_to.mjs";
("The sermon loop calls this after it handles a reviewer suggestion. It records");
("which verse was reviewed plus a short human-facing note, so g_verify can show a");
("badge that Claude saw and handled the suggestion, closing the loop without chat.");
export async function g_verify_reviewed_set(chapter_code, verse, note) {
  "$plain chapter_code";
  let path = local_function_path_json(chapter_code, g_verify_reviewed_set);
  let contents = json_format_to({
    verse,
    note,
  });
  await file_overwrite_uncached(path, contents);
  return path;
}
