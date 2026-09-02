import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_read } from "./function_read.mjs";
import { function_prose_lines } from "./function_prose_lines.mjs";
import { list_add } from "./list_add.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { list_size } from "./list_size.mjs";
import { text_number_ordinal_spelled } from "./text_number_ordinal_spelled.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export async function bible_glyph_chapters_prose_missing() {
  arguments_assert(arguments, 0);
  ("The picture Bible chapters the list holds without saying anything about, given as their chapter codes.");
  ("EVERY CHAPTER ON THAT LIST IS THERE FOR A REASON AND THE REASON IS ONLY EVER WRITTEN IN THE PROSE. The list itself says which chapters exist and nothing whatever about why those and not the nine hundred others; a paragraph beside them is where the measurement that chose one, and the reading that overruled the measurement, are kept. A chapter added without one is a choice nobody can check afterwards, and the gap is invisible until somebody reads the file end to end.");
  ("A CHAPTER IS SPOKEN FOR WHEN A PARAGRAPH OPENS WITH ITS PLACE IN THE LIST, which is the shape the paragraphs already have - the fourth, the fifth, and the sixteenth each begin their own. An opening is asked for rather than a mention anywhere in the line, because the eighth chapter's paragraph calls it the first from the other testament, and a line that merely holds the word first would let that sentence stand in for a paragraph about the first chapter that was never written.");
  ("Words are lowered before they are compared, because a sentence begins with a capital and a spelled number does not.");
  ("A paragraph is allowed to open with and, because several of them are second halves that carry on from the paragraph above.");
  let f_name = fn_name("bible_glyph_chapters");
  let code = await function_read(f_name);
  let lines = function_prose_lines(code);
  let lowered = [];
  for (let line of lines) {
    let item = text_lower_to(line);
    list_add(lowered, item);
  }
  let chapters = bible_glyph_chapters();
  let count = list_size(chapters);
  let missing = [];
  for (let index = 0; less_than(index, count); index++) {
    let ordinal = text_number_ordinal_spelled(index + 1);
    let head = text_combine_3("the ", ordinal, " ");
    let head_carried = text_combine_3("and the ", ordinal, " ");
    let spoken_for = false;
    for (let line of lowered) {
      if (text_starts_with(line, head)) {
        spoken_for = true;
      }
      if (text_starts_with(line, head_carried)) {
        spoken_for = true;
      }
    }
    if (not(spoken_for)) {
      list_add(missing, chapters[index].chapter_code);
    }
  }
  return missing;
}
