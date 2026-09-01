import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_numbered_names } from "./bible_glyph_chapters_numbered_names.mjs";
import { fn_name } from "./fn_name.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function bible_glyph_chapters_numbered_names_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: the picture Bible list numbers its chapters one, two, three with nothing skipped and nothing repeated, and every chapter it numbers is a chapter it hands back.");
  ("THE ONE FAILURE HERE THAT LOSES A CHAPTER IS A NAME LEFT OUT OF THE ARRAY. Adding a chapter is an import, a numbered name, a line in the array and a paragraph; forget the line in the array and the chapter is imported, bound, prose written about it, and absent from the Bible. Every other reading counts the array, so every other reading agrees the Bible is fine and one chapter short.");
  ("THE NUMBERING ITSELF IS CHECKED BECAUSE IT IS A LOG AND NOTHING READS IT. A jump from the thirty third to the thirty fifth costs nothing at run time and is invisible in every answer this repo gives, which is exactly the shape of thing that is wrong for a year before anybody sees it.");
  ("THE THREE FAILURES ARE REPORTED APART because they are three repairs. An array nobody can find is a list somebody reworded; names in the wrong order are a hand slipping; a name in the bindings and not in the array is a chapter that has been written and is not being read. Rolled into one answer they would all read as the list being broken.");
  ("THE HINT CARRIES THE LINE TO WRITE, because there is nothing here to decide - the list knows how long it is and English has one way of counting to it.");
  let names = await bible_glyph_chapters_numbered_names();
  let f_name = fn_name("bible_glyph_chapters");
  assert_json(names.listed_found_is, {
    hint: text_combine_multiple([
      "the array of chapters in ",
      f_name,
      " could not be found at all - the line beginning let chapters has been reworded or deleted. Write it again, listing the names under expected_line in that order",
    ]),
    expected_line: names.expected_line,
  });
  assert_json(names.bound_agree_is, {
    expected_line: names.expected_line,
    bound_line: names.bound_line,
    hint: text_combine_multiple([
      "the numbered names ",
      f_name,
      " binds its chapters to are not one, two, three with nothing skipped - read the two lines under expected_line and bound_line side by side and rename the bindings until they match, which also renames them where they are used in the array",
    ]),
  });
  assert_json(names.listed_agree_is, {
    expected_line: names.expected_line,
    listed_line: names.listed_line,
    hint: text_combine_multiple([
      "the array in ",
      f_name,
      " does not hold every numbered name in order - a chapter bound above it and missing from the list here is a chapter that has been written and is in no Bible. Read the two lines under expected_line and listed_line side by side",
    ]),
  });
  let r = {
    chapters: names.count,
  };
  return r;
}
