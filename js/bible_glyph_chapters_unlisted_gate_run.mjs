import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { list_size } from "./list_size.mjs";
import { assert_json } from "./assert_json.mjs";
import { bible_glyph_chapters_unlisted } from "./bible_glyph_chapters_unlisted.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function bible_glyph_chapters_unlisted_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: every picture Bible chapter written as a function is named in the list of chapters.");
  ("IT PASSES AT NOUGHT AND THERE IS NO BASELINE, because an unlisted chapter is finished work that no reader can reach, and there is nothing a tolerance would be for.");
  ("IT GUARDS A FAILURE NOTHING ELSE CAN SEE. Every other chapter gate walks the list, so a chapter outside it is outside every gate too - and the survey that picks the next chapter to author offers it again. Measured 2026-09-15: ninety five chapters had sat outside the list for ten days, and one more was imported into it without ever being bound.");
  ("IT COUNTS THE LISTED CHAPTERS beside the verdict, because a list that stopped loading would leave the walk comparing against nothing and would still find every file.");
  let chapters = bible_glyph_chapters();
  let chapters_read = list_size(chapters);
  assert_json(chapters_read, {
    hint: "no listed chapter was read at all, so the comparison has nothing on one side of it",
  });
  let unlisted = await bible_glyph_chapters_unlisted();
  let none = list_empty_is(unlisted);
  let f_name = fn_name("bible_glyph_chapters_unlisted_add");
  assert_json(none, {
    unlisted,
    hint: text_combine_multiple([
      "these chapters are written and not named in the list of chapters, so no page, band or gate reaches them. Run ",
      f_name,
      ", then land them with the added write and the missing bands repair, each from a fresh process",
    ]),
  });
  let r = {
    chapters_read,
  };
  return r;
}
