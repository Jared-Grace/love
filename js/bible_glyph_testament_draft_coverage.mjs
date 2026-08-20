import { arguments_assert } from "./arguments_assert.mjs";
import { bible_interlinear_chapters_words_cache } from "./bible_interlinear_chapters_words_cache.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { bible_glyph_chapter_draft_coverage } from "./bible_glyph_chapter_draft_coverage.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { property_get } from "./property_get.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { list_take } from "./list_take.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_glyph_testament_draft_coverage(
  testament_name,
  count,
) {
  arguments_assert(arguments, 2);
  ("$plain testament_name");
  ("$plain count");
  ("the testament names which half of the Bible to survey and which root table to read it against, and the count is how many of the best chapters to hand back. Both are data and neither runs.");
  ("How much of EVERY unwritten chapter of one testament the root table can already draw, best first, cut to the length asked for.");
  ("IT FINDS ITS OWN SET, which is the whole of what it adds over the reading next door. That one weighs the chapters it is handed, so the shortlist is typed by a person - and a typed shortlist is a guess about where to look, made before looking. Five chapters were compared to choose the fourth, twelve to choose the fifth and thirty to choose the sixth, each list longer than the last and each one still somebody's hunch about which thirty were worth asking about. There is no hunch left in asking about all of them.");
  ("A CHAPTER ALREADY WRITTEN IS LEFT OUT, because the question this answers is which one to author NEXT. The six that exist would otherwise sit at the top of every answer forever - they were chosen for coming top - and a reader would have to know the written list by heart to skip past them. Reading the written list is cheaper than remembering it, so it is read.");
  ("THE CHAPTERS COME FROM THE INTERLINEAR RATHER THAN FROM THE CANON, and that is the difference between a survey that runs and one that stops. The canon names every chapter that exists; the interlinear holds the ones there are words for, and asking it about a chapter it does not hold is refused rather than answered thinly. Surveying from the canon would therefore die on the first gap, and a survey is exactly the caller that meets every gap there is.");
  ("A HIGH SHARE STILL DOES NOT DECIDE, and a longer list makes that easier to forget rather than harder. What chose the last three chapters was never the share alone: John fourteen won on its blanks being the article and the pronouns rather than its vocabulary, and both letters of John won partly on being short enough to finish. This narrows two hundred and sixty chapters to a handful; a person still reads the handful.");
  let chapters_words = await bible_interlinear_chapters_words_cache();
  let chapter_codes = object_property_names(chapters_words);
  function lambda(chapter_code) {
    let name = bible_chapter_testament_name(chapter_code);
    let match = equal(name, testament_name);
    return match;
  }
  let of_testament = list_filter(chapter_codes, lambda);
  let written = bible_glyph_chapters();
  let written_codes = list_map_property(written, "chapter_code");
  function lambda2(chapter_code) {
    let unwritten = list_includes_not(written_codes, chapter_code);
    return unwritten;
  }
  let candidates = list_filter(of_testament, lambda2);
  async function lambda3(chapter_code) {
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
  let measured_each = await list_map_async(candidates, lambda3);
  function lambda4(measured) {
    let share = property_get(measured, "share");
    return share;
  }
  list_sort_number_mapper_reverse(measured_each, lambda4);
  let top = list_take(measured_each, count);
  let r = {
    testament_name,
    measured: list_size(measured_each),
    written: list_size(written_codes),
    top,
  };
  return r;
}
