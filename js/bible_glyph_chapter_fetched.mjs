import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapter_fetch } from "./bible_glyph_chapter_fetch.mjs";
import { bible_glyph_chapter_parse } from "./bible_glyph_chapter_parse.mjs";
export async function bible_glyph_chapter_fetched(chapter_code) {
  arguments_assert(arguments, 1);
  ("$plain chapter_code");
  ("the code names one chapter, spelled as the chapter codes spell it. It names a chapter to send for and nothing that runs.");
  ("One picture Bible chapter, sent for on its own and with every word already parsed out of the shorthand - the same answer ",
    fn_name("bible_glyph_chapter"),
    " gives, reached without holding the other twenty four.");
  ("THE TWO WAYS IN EXIST BECAUSE THE TWO CALLERS ARE NOT ALIKE. A program running on this machine already has the whole Bible on its disk and wants it in one call; a page on a phone has none of it and wants exactly one chapter. The same Bible and the same parsing, reached from opposite ends.");
  ("IT IS THE PAIR AND NOT A THIRD ANSWER. The sending for is ",
    fn_name("bible_glyph_chapter_fetch"),
    " and the reading is ",
    fn_name("bible_glyph_chapter_parse"),
    ", both of which the other way in uses too, so there is nothing here that could disagree with anything - which is the only reason two ways in are safe to have at all.");
  ("An unknown code is refused by the sending for, so there is nothing to check here. Checking it again would be a second answer to the same question, and the day the two differ the wrong one is whichever the reader happens to reach.");
  let stored = await bible_glyph_chapter_fetch(chapter_code);
  let chapter_parsed = bible_glyph_chapter_parse(stored);
  return chapter_parsed;
}
