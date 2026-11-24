import { object_property_names } from "./object_property_names.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { path_join } from "./path_join.mjs";
import { gloss_write_file_path } from "./gloss_write_file_path.mjs";
import { app_learn_eng_gloss_urdu_generate } from "./app_learn_eng_gloss_urdu_generate.mjs";
import { path_basename } from "./path_basename.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { app_learn_eng_gloss_urdu_write_file_from_temp } from "./app_learn_eng_gloss_urdu_write_file_from_temp.mjs";
export async function app_learn_eng_gloss_urdu_write_chapter_from_temp(
  chapter_code,
) {
  "Save every passage of a chapter's Urdu word explanations from one file made in scripts/temp, named gloss_<chapter>_all.json and holding each passage's explanations under its verse key.";
  "A read-only scratch script can build the whole chapter in one run; this splits it into the per-passage files the single write reads, then saves each, so a chapter is one command rather than a shell loop over its passages.";
  "$plain chapter_code";
  "names a chapter of the Bible to read. It names nothing that runs.";
  let file_path = path_join([
    "scripts",
    "temp",
    "gloss_" + chapter_code + "_all.json",
  ]);
  let all = await file_read_json(file_path);
  let saved = [];
  for (let verse_key of object_property_names(all)) {
    let path = gloss_write_file_path(
      chapter_code,
      verse_key,
      app_learn_eng_gloss_urdu_generate,
    );
    let base = await path_basename(path);
    let file_path2 = path_join(["scripts", "temp", base]);
    let contents = JSON.stringify(all[verse_key], null, 1);
    await file_overwrite(file_path2, contents);
    await app_learn_eng_gloss_urdu_write_file_from_temp(
      chapter_code,
      verse_key,
    );
    saved.push(verse_key);
  }
  return saved;
}
