import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function function_part_name_cases() {
  "The name of a function and the name of a piece written inside it, with the name that piece should stand under once it is moved out written down beside each one, and nothing written where the two names cannot say it.";
  "The cases that hand nothing back are the ones worth having. Joining two names is not the hard half; knowing which pairs of names must not be joined is, and each of the four that must not be is here for its own reason rather than as one rule spelled four ways.";
  "The doubled name is the case this corpus was written for. A piece spelled with its holder's whole name in it was joined to that name again, three times in one sitting, and every one of those names had to be undone by hand afterwards while nothing anywhere went red.";
  arguments_assert(arguments, 0);
  let cases = [
    {
      f_name: fn_name("integer_factorization_to_sat"),
      nested: "clause_add",
      named: "integer_factorization_to_sat_clause_add",
      why: "the ordinary case: the holder's name, then the name the piece already answers to",
    },
    {
      f_name: fn_name("bible_glyph_chapters_table_behind"),
      nested: fn_name("bible_glyph_chapters_table_behind_because"),
      named: fn_name("bible_glyph_chapters_table_behind_because"),
      why: "the piece already spells its holder's whole name, so joining the holder in again would say it twice. This exact pair was joined once and what it left behind was a name sixty letters long that had to be renamed by hand",
    },
    {
      f_name: "bible_glyph_chapters_table",
      nested: "bible_glyph_chapters_table_behindmost",
      named: "bible_glyph_chapters_table_behindmost",
      why: "the letters of the holder are there and they are followed by a mark between parts, so the holder really is named at the start and the name is left alone",
    },
    {
      f_name: "bible_glyph_chapters_table",
      nested: "bible_glyph_chapters_tables",
      named: "bible_glyph_chapters_table_bible_glyph_chapters_tables",
      why: "the letters of the holder are there but a letter carries the word on, so the holder is not what is named at the start and the join stands. It reads badly and it is written down rather than hidden, because the alternative is a rule that cannot say where one word ends",
    },
    {
      f_name: "app_code_lessons_review_diff",
      nested: "sectionSize",
      named: "app_code_lessons_review_diff_section_size",
      why: "a word with capitals in it is turned over into this repo's spelling before it is joined, because a capital stands where a part begins",
    },
    {
      f_name: "app_code_lessons_review_diff",
      nested: "readHTMLBody",
      named: null,
      why: "two capitals side by side are one short word between them, and turning them over would pull that word into a letter each, so the piece is handed back for a person to name",
    },
    {
      f_name: "app_code_lessons_review_diff",
      nested: "section2Size",
      named: null,
      why: "a capital says the parts are marked by capitals, and then anything that is not a letter says they are marked by something else as well, so this rule cannot see where they are",
    },
    {
      f_name: "app_code_lessons_review_diff",
      nested: "section2",
      named: "app_code_lessons_review_diff_section2",
      why: "the same digit with no capital beside it is left alone and joined, because nothing here claimed the parts were marked by capitals. What is not a letter is only ever looked at as a reason to distrust a capital",
    },
    {
      f_name: "app_code_lessons_review_diff",
      nested: "lambda3",
      named: null,
      why: "a name a pass handed out to a function written without one says nothing about what the function does, and the number on the end is only which one it was in the file that day",
    },
  ];
  return cases;
}
