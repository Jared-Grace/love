import { fn_name } from "./fn_name.mjs";
import { g_arc_write_path } from "./g_arc_write_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { assert_json } from "./assert_json.mjs";
import { g_sermon_chapter_passages_chaptered } from "./g_sermon_chapter_passages_chaptered.mjs";
import { g_arc_review_text } from "./g_arc_review_text.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { folder_user_join } from "./folder_user_join.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { text_size } from "./text_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function g_arc_person_review_write(chapter_code, index) {
  "One written person, laid out with the Scripture of every answer, written where the human already goes to read one.";
  "$plain chapter_code";
  "IT EXISTS BECAUSE A RENDER GOES STALE AND SAYS NOTHING WHEN IT DOES. A readable copy of an arc was made by hand once and left in the temp folder; the store was then edited and the copy was not, so the next person to open it read words that had not been in the game for hours and reported them as current. Nothing was broken and nothing could go red - a text file has no way to know that what it was made from has moved.";
  "So the repair is not to keep the copy in step, which is a promise no file can keep, but to make REMAKING it cost one command. A render that is one command away is never worth trusting when it is old, and the same path is written over, so the stale copy is destroyed by the act of asking for a fresh one rather than left beside it to be read again.";
  "THE PATH IS NOT ASKED FOR, unlike the older whole-file writer beside it. That one takes a place to write because a written arc had no settled home yet; this one is named for a person in a chapter, the store's own naming answers where that person lives, and a caller free to choose the file name is a caller free to leave the old one sitting there under the name somebody reads.";
  "The index is the person's own number in the chapter rather than their position in the list, because the two agree only while nobody has ever been removed, and the number is what every other report about a word or a turn already says.";
  let path = g_arc_write_path(chapter_code);
  let chapter = await file_read_json(path);
  let written = property_get(chapter, "arcs");
  let wanted = number_from_text(index);
  let found = null;
  for (let entry of written) {
    let entry_index = property_get(entry, "index");
    let same = equal(entry_index, wanted);
    if (same) {
      found = property_get(entry, "arc");
    }
  }
  let missing = equal(found, null);
  let there = not(missing);
  assert_json(there, {
    chapter_code,
    index: wanted,
    hint: text_combine_multiple([
      "no person of that number is written in this chapter - ask ",
      fn_name("g_arc_written_gate_run"),
      " how many there are",
    ]),
  });
  let passages = await g_sermon_chapter_passages_chaptered(chapter_code);
  let text = g_arc_review_text(found, passages);
  let lowered = text_lower_to(chapter_code);
  let file_name = text_combine_multiple([
    "arc_",
    lowered,
    "_person_",
    wanted,
    ".txt",
  ]);
  let review_path = folder_user_join("temp", file_name);
  await file_overwrite(review_path, text);
  let r = {
    review_path,
    characters: text_size(text),
  };
  return r;
}
