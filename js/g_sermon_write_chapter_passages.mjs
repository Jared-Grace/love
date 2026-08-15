import { property_get } from "./property_get.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { g_sermon_write } from "./g_sermon_write.mjs";
export async function g_sermon_write_chapter_passages(chapter_code) {
  "$plain chapter_code";
  "The ordered passages of one chapter as the write store holds them.";
  "The write store only, and no falling back to the edited one. There is a reading beside this that does fall back, and it answers an empty list when neither store has the chapter; the readings built on this one are drafting aids, and a chapter that has not been written yet is a mistake in what was asked for rather than a chapter with nothing in it. Asked here, that mistake is said out loud instead of coming back as a report with no findings in it, which reads exactly like a chapter with nothing wrong.";
  let write_path = local_function_path_json(chapter_code, g_sermon_write);
  let write_chapter = await file_read_json(write_path);
  let passages = property_get(write_chapter, "passages");
  return passages;
}
