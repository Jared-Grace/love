import { text_lines_working } from "./text_lines_working.mjs";
import { g_sermon_edited_store_name } from "./g_sermon_edited_store_name.mjs";
import { storage_function_folder_path } from "./storage_function_folder_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { list_add } from "./list_add.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { add } from "./add.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
export async function g_sermon_bible_store_convert() {
  "Copy every chapter the hand-edited bible store holds into the sermon write store, rewritten into the write store's own shape.";
  "TWO SHAPES were live at once and only one of them could be read by anything downstream. The bible store spells a passage {verse_numbers, text, sermon, original}, where sermon is one string with a line break between each preaching line; the write store spells it {verse_numbers, scripture, lines}, where each line is its own object. Every reader written since asks for the second, so James and Romans - twenty one of the thirty three chapters that have preaching written, and all of Romans - threw the moment an arc prompt reached for them. Converging the data is the fix rather than teaching each reader both shapes, because a reader that knows both keeps the old shape alive forever.";
  ("INDICES ARE LEFT EMPTY, deliberately. They say which words of the passage a line claims, and the bible store never held them - nothing was recorded, so there is nothing to carry. Deriving them by matching words would invent an answer that looks authored and is not. Empty is the honest state and it is also visible: ",
    fn_name("g_sermon_indices_uncovered"),
    " reports every token of these passages as unclaimed, so the missing work shows up as a worklist rather than disappearing. Omitting lines altogether would have hidden it, because that report skips a passage with no lines at all.");
  ("ORIGINAL IS NOT CARRIED. The write store has no slot for the Greek and its own writer would drop it on the first per-passage save, so carrying it would plant a key that quietly vanishes later. It is not lost: the generate store still holds the original beside the same passage, which is where ",
    fn_name("g_sermon_study_passage"),
    " already reads it from.");
  ("A chapter the write store already holds is SKIPPED rather than overwritten. The write store is where reviewed work lands, and the bible store is the older, hand-edited one - so where both have a chapter, the newer one wins and this must not step on it.");
  let f_name = g_sermon_edited_store_name();
  let from_folder = storage_function_folder_path(f_name);
  let f_name_write = fn_name("g_sermon_write");
  let to_folder = storage_function_folder_path(f_name_write);
  let files = await folder_read_files(from_folder);
  let converted = [];
  let skipped = [];
  for (let file of files) {
    let to_path = path_join([to_folder, file]);
    let exists = await file_exists(to_path);
    if (exists) {
      list_add(skipped, file);
      continue;
    }
    let from_path = path_join([from_folder, file]);
    let chapter = await file_read_json(from_path);
    let passages = property_get(chapter, "passages");
    let rewritten = [];
    let lines_total = 0;
    for (let passage of passages) {
      let verse_numbers = property_get(passage, "verse_numbers");
      let scripture = property_get(passage, "text");
      let sermon = property_get(passage, "sermon");
      let kept = text_lines_working(sermon);
      function line_object(text) {
        let line = {
          text,
          indices: [],
        };
        return line;
      }
      let lines = list_map(kept, line_object);
      lines_total = add(lines_total, lines.length);
      list_add(rewritten, {
        verse_numbers,
        scripture,
        lines,
      });
    }
    let chapter_code = property_get(chapter, "chapter_code");
    let contents = json_format_to({
      chapter_code,
      passages: rewritten,
    });
    await file_overwrite_uncached(to_path, contents);
    list_add(converted, {
      chapter_code,
      passages: rewritten.length,
      lines: lines_total,
    });
  }
  let r = {
    converted,
    skipped,
  };
  return r;
}
