import { bible_glyph_chapter_draft_coverage } from "./bible_glyph_chapter_draft_coverage.mjs";
import { text_split_comma_map_async } from "./text_split_comma_map_async.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function bible_glyph_chapters_draft_coverage(
  chapter_codes,
  testament_name,
) {
  arguments_assert(arguments, 2);
  ("$plain chapter_codes");
  ("$plain testament_name");
  ("the codes name the chapters to weigh against each other, comma joined, and the testament names which root table to read them against. Both are data and neither runs.");
  ("How much of each of several chapters the root table can already draw, biggest share first.");
  ("IT EXISTS BECAUSE ASKING ABOUT ONE CHAPTER NEVER ANSWERED THE QUESTION ANYBODY HAD. The reading next door says how thin a single chapter is, and that is worth knowing only once you have already decided to consider it. What actually chooses the chapter to author next is comparing candidates, and comparing them meant running that reading five times by hand and writing the five shares down somewhere - which is a loop of invocations, so it was a command waiting to be built.");
  ("THE COMMONEST UNDRAWN WORDS ARE DELIBERATELY LEFT OUT OF THIS ONE. They are thirty rows per chapter and this is asked of five or ten chapters at once, so carrying them here would bury the one column anybody is reading. The division is that this narrows the field and the reading next door explains the winner: ask this first, then ask that about whichever chapter came out on top.");
  ("A HIGH SHARE STILL DOES NOT DECIDE, and putting them in order makes that easier to forget rather than harder. The reading this is built on says so at length: a chapter drawn almost wholly in pictures nobody has met is harder to read than one drawn two thirds in pictures they already know, and a chapter whose blanks are proper names loses far less than one whose blanks are its verbs. John fourteen was chosen over four others on 2026-08-19, and the share is not why - it won because its blanks turned out to be the article and the pronouns rather than any word of its vocabulary. The order here is a shortlist and never a verdict.");
  async function lambda(chapter_code) {
    let coverage = await bible_glyph_chapter_draft_coverage(
      chapter_code,
      testament_name,
      0,
    );
    let measured = {
      chapter_code,
      verses: property_get(coverage, "verses"),
      words: property_get(coverage, "words"),
      drawn: property_get(coverage, "drawn"),
      share: property_get(coverage, "share"),
    };
    return measured;
  }
  let measured_each = await text_split_comma_map_async(chapter_codes, lambda);
  function lambda2(measured) {
    let share = property_get(measured, "share");
    return share;
  }
  list_sort_number_mapper_reverse(measured_each, lambda2);
  return measured_each;
}
