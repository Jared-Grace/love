import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_count_stated } from "./bible_glyph_chapters_count_stated.mjs";
import { fn_name } from "./fn_name.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { function_name_to_path_relative } from "./function_name_to_path_relative.mjs";
import { file_read } from "./file_read.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
import { text_replace_once } from "./text_replace_once.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { equal_not } from "./equal_not.mjs";
export async function bible_glyph_chapters_count_stated_repair() {
  arguments_assert(arguments, 0);
  ("Puts the right number of chapters into the sentence that tells a reader how many the picture Bible holds, and says whether that moved the file.");
  ("THE NUMBER IS NOT A JUDGEMENT AND NEVER WAS. The list knows its own length and English has one way of saying it, so the only thing a person was ever doing here was carrying a number across a file - which is the kind of work that is done right every time until the once it is not.");
  ("IT REPLACES THE WORDS AND NOT THE SENTENCE, because everything around them is authored: why the list is written out rather than found by name, and what a reader asking what this Bible contains is owed. A generator that rendered the sentence would take those words away in exchange for a number.");
  ("A SENTENCE THAT IS NOT THERE AT ALL IS REFUSED RATHER THAN WRITTEN, because where it belongs among the paragraphs is a decision about how the file reads and there is nothing here that can make it. The gate beside this says the same thing in the same case, and for the same reason.");
  ("It reports whether the file moved, so a run that had nothing to do and a run that did its work are told apart. Landing a chapter says true; running it again straight away says false.");
  let stated = await bible_glyph_chapters_count_stated();
  let f_name = fn_name("bible_glyph_chapters");
  let b = equal_not(stated.said, null);
  assert_json(b, {
    spelled: stated.spelled,
    hint: text_combine_multiple([
      "no sentence in ",
      f_name,
      " tells a reader how many chapters this Bible holds, so there is nothing here to correct - write the sentence again, beginning with the words under spelled, and where it goes among the paragraphs is yours to decide",
    ]),
  });
  let f_path = function_name_to_path_relative(f_name);
  let before = await file_read(f_path);
  let said_phrase = text_combine_multiple([
    stated.said_written,
    " chapters today,",
  ]);
  let t = text_first_upper_to(stated.spelled);
  let spelled_phrase = text_combine_multiple([t, " chapters today,"]);
  let after = text_replace_once(before, said_phrase, spelled_phrase);
  await file_overwrite(f_path, after);
  let changed = equal_not(before, after);
  let r = {
    said: stated.said,
    spelled: stated.spelled,
    chapters: stated.count,
    changed,
  };
  return r;
}
