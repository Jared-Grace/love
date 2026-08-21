import { g_arc_written_chapter } from "./g_arc_written_chapter.mjs";
import { property_get } from "./property_get.mjs";
import { assert_json } from "./assert_json.mjs";
import { g_arc_lines_addressed } from "./g_arc_lines_addressed.mjs";
import { words_early_reader_outside } from "./words_early_reader_outside.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { text_combine } from "./text_combine.mjs";
import { g_arc_feedback_add } from "./g_arc_feedback_add.mjs";
import { add_1 } from "./add_1.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function g_arc_feedback_words_add(chapter_code, index) {
  "Read one written person line by line, and file a note against every line saying a word a child of the settled reading age would not have - naming the words and asking for nothing.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "IT IS THE FIRST CHECK TO FILE RATHER THAN PRINT, and that is the change it is really making. A report is read by a person, who then has to carry what they read to wherever the fixing happens; a note is already there when the fixing starts. The same finding costs a person a reading in the first shape and nothing at all in the second.";
  "SO WHAT A PERSON IS LEFT WITH IS WHAT THIS COULD NOT SEE. Run before anybody opens the arc, it takes the whole vocabulary question off their desk, and every check written after it takes another one - until what is left needs a person because no rule could have caught it.";
  "IT NAMES THE WORDS AND ASKS FOR NOTHING, in the shape every note here is written in. Saying which words are too hard leaves the sentence with whoever writes sentences; saying what the line should say instead has written the line, and then the next line needs writing too. A word may also be perfectly fair - a dyer says dye - so a note that had demanded a replacement would have demanded a worse line.";
  "IT DOES NOT CLEAR FIRST, so running it twice files everything twice. Clearing is a separate command on purpose: the notes it would drop include a person's, and a check has no business throwing away a reading it cannot reproduce.";
  let arcs = await g_arc_written_chapter(chapter_code);
  let found = null;
  for (let entry of arcs) {
    let entry_index = property_get(entry, "index");
    let same = equal(entry_index, index);
    if (same) {
      found = property_get(entry, "arc");
    }
  }
  let missing = equal(found, null);
  let there = not(missing);
  assert_json(there, {
    chapter_code,
    index,
    hint: "no person of that number is written in this chapter",
  });
  let lines = g_arc_lines_addressed(found);
  let filed = 0;
  let words_named = [];
  for (let line of lines) {
    let text = property_get(line, "text");
    let outside = await words_early_reader_outside(text);
    let any = list_empty_not_is(outside);
    if (any) {
      let number = property_get(line, "number");
      let field = property_get(line, "field");
      let joined = list_join_comma_space(outside);
      let note = text_combine(
        "a child that age would not have these words: ",
        joined,
      );
      await g_arc_feedback_add(chapter_code, index, number, field, note);
      filed = add_1(filed);
      list_add_multiple(words_named, outside);
    }
  }
  let r = {
    chapter_code,
    index,
    lines: list_size(lines),
    filed,
    words: list_size(words_named),
  };
  return r;
}
