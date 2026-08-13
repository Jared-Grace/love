import { storage_function_folder_path } from "./storage_function_folder_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
export async function g_sermon_scripture_key_migrate() {
  "Rewrite every stored passage in the sermon write store so its Scripture text sits under scripture rather than under english.";
  "ENGLISH named the language the text happened to be in, which is a fact about today rather than about the field. The same slot holds the passage whatever tongue it is read in, and a translated game would have had to keep writing its Tagalog into a key called english or fork the shape. SCRIPTURE names what the value is, and the reader beside it already drew that line in prose - the lines are the game's own words and only the Scripture may be answered from.";
  "TEXT was the obvious other candidate and is taken: inside lines a passage already has text, meaning one sermon line, so the same word would mean the Scripture at one level and a paraphrase of it one level down.";
  "Written as a migration rather than as a reader that accepts either key, because a reader that accepts both never finishes - the old key stays legible forever and nothing ever tells you the store has moved.";
  let f_name = fn_name("g_sermon_write");
  let folder = storage_function_folder_path(f_name);
  let files = await folder_read_files(folder);
  let chapters = [];
  let migrated_total = 0;
  for (let file of files) {
    let path = path_join([folder, file]);
    let chapter = await file_read_json(path);
    let passages = property_get(chapter, "passages");
    let migrated = 0;
    let rewritten = [];
    for (let passage of passages) {
      let old_key = "english" in passage;
      if (not(old_key)) {
        list_add(rewritten, passage);
        continue;
      }
      migrated = add(migrated, 1);
      let verse_numbers = property_get(passage, "verse_numbers");
      let scripture = property_get(passage, "english");
      let lines = property_get(passage, "lines");
      list_add(rewritten, {
        verse_numbers,
        scripture,
        lines,
      });
    }
    let none = equal(migrated, 0);
    if (none) {
      continue;
    }
    migrated_total = add(migrated_total, migrated);
    let chapter_code = property_get(chapter, "chapter_code");
    let contents = json_format_to({
      chapter_code,
      passages: rewritten,
    });
    await file_overwrite_uncached(path, contents);
    list_add(chapters, {
      chapter_code,
      migrated,
    });
  }
  let r = {
    chapters,
    migrated_total,
  };
  return r;
}
