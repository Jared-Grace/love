import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { list_size } from "./list_size.mjs";
import { assert_json } from "./assert_json.mjs";
import { bible_glyph_chapters_book_codes_unknown } from "./bible_glyph_chapters_book_codes_unknown.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function bible_glyph_chapters_book_codes_unknown_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: every written chapter of the picture Bible names a book of the canon, so the index can place all of them.");
  ("IT PASSES AT NOUGHT AND THERE IS NO BASELINE, because a chapter that cannot be placed is a chapter no reader can reach. There is nothing here for a tolerance to be for.");
  ("IT GUARDS A FAILURE THAT LOOKS LIKE SUCCESS. ",
    fn_name("bible_glyph_chapters_by_book"),
    " gathers chapters under the books they belong to, so a chapter belonging to no book is gathered by nobody and simply absent from the list. The page draws, the rows are all correct, and one chapter is gone - there is no wrong output anywhere to notice.");
  ("ONE LETTER IS THE WHOLE DISTANCE. A chapter code is typed by whoever writes the chapter, and the code opens its own page perfectly well however it is spelled, because the page finds a chapter by matching the code against itself. So the mistake survives every test that follows a link and is caught only by asking the canon.");
  ("IT COUNTS THE CHAPTERS IT LOOKED AT beside the verdict, because a walk that stopped reaching them would find no bad codes and report all clear having asked about nothing.");
  let chapters = bible_glyph_chapters();
  let chapters_read = list_size(chapters);
  assert_json(chapters_read, {
    hint: "no chapter was read at all, and this Bible has twenty five written - the walk has stopped reaching them, so every code is being passed without being looked at",
  });
  let unknown = bible_glyph_chapters_book_codes_unknown();
  let none = list_empty_is(unknown);
  let f_name = fn_name("ebible_books_engbsb");
  assert_json(none, {
    unknown,
    hint: text_combine_multiple([
      "these chapters name a book that is not in the canon, so the index cannot place them and quietly leaves them out. Each entry gives the chapter code as written and the book code taken off the front of it. Check that front against ",
      f_name,
      " - it is almost always one letter or one digit of padding",
    ]),
  });
  let r = {
    chapters_read,
  };
  return r;
}
