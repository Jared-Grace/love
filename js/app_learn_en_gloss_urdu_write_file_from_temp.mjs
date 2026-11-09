import { app_learn_en_gloss_urdu_generate } from "./app_learn_en_gloss_urdu_generate.mjs";
import { gloss_write_file_path } from "./gloss_write_file_path.mjs";
import { path_basename } from "./path_basename.mjs";
import { path_join } from "./path_join.mjs";
import { file_copy_overwrite } from "./file_copy_overwrite.mjs";
import { app_learn_en_gloss_urdu_write_file } from "./app_learn_en_gloss_urdu_write_file.mjs";
export async function app_learn_en_gloss_urdu_write_file_from_temp(
  chapter_code,
  verse_key,
) {
  "Save a passage's Urdu word explanations from a file of the same name made in scripts/temp, by copying it into the handover folder and then saving it exactly as the plain write does.";
  "A scratch script there can build the file from the passage's own counts, but it runs read-only and the shell may only send its output into scripts/temp, so without this the finished file has to be typed out again in full to reach the handover folder.";
  "$plain chapter_code";
  "$plain verse_key";
  "both name text to read: a chapter of the Bible, and the verses a passage of it covers. Neither names anything that runs.";
  let fn = app_learn_en_gloss_urdu_generate;
  let path = gloss_write_file_path(chapter_code, verse_key, fn);
  let base = await path_basename(path);
  let from = path_join(["scripts", "temp", base]);
  await file_copy_overwrite(from, path);
  let r = await app_learn_en_gloss_urdu_write_file(chapter_code, verse_key);
  return r;
}
