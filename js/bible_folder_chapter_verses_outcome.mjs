import { arguments_assert } from "./arguments_assert.mjs";
import { range_1 } from "./range_1.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { ebible_chapter_verses_storage_outcome } from "./ebible_chapter_verses_storage_outcome.mjs";
import { ebible_verse_merge } from "./ebible_verse_merge.mjs";
import { list_find_property_try_or_null } from "./list_find_property_try_or_null.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { null_is } from "./null_is.mjs";
import { text_to } from "./text_to.mjs";
export async function bible_folder_chapter_verses_outcome(
  bible_folder,
  chapter_code,
  count,
) {
  "$plain chapter_code";
  "$plain bible_folder";
  "The opening verses of one chapter of one bible, with null standing where a verse could not be fetched, and beside them whether the chapter itself was missing or simply could not be reached.";
  "A verse that will not come is kept as a hole rather than dropped, because dropping it closes the gap and the verses either side of it become neighbours that never were. Anything measured across a run of verses would then be measured across a join that is not in the bible.";
  "THE TWO REASONS A CHAPTER GIVES NOTHING ARE KEPT APART, and that is the whole of what this adds. A bible that does not hold this chapter and a chapter that would not answer this afternoon both leave every verse null, and a caller counting the nulls cannot tell them apart - so it writes down how a run went as though it were a fact about somebody's bible. Measured 2026-08-20: a hundred bibles were recorded as having no readable verse of Luke 1, and twenty eight of them read in full when asked again the same morning.";
  "The chapter is asked for once and the verses are picked out of it, rather than each verse being asked for by name. Every verse is stored twice - in a file of its own and inside its chapter - and the two say the same words, because the file of its own is written out of the chapter's own verse at upload time. So one question answers for all of them, and asking forty times cost forty waits for what one wait already had.";
  "The number counted up to here is a number and the number a verse keeps is written as text, so it is spelled out before the two are compared. They were never compared before this - the number was put into a file name, where a number and its spelling are the same thing - and left as it was, every verse would answer that it is not there.";
  arguments_assert(arguments, 3);
  let outcome = await ebible_chapter_verses_storage_outcome(
    bible_folder,
    chapter_code,
  );
  let chapter = property_get(outcome, "verses");
  let absent = property_get(outcome, "absent");
  let unreachable = property_get(outcome, "unreachable");
  let verse_numbers = range_1(count);
  let property_name = verse_number_key();
  function lambda(verse_number) {
    let wanted = text_to(verse_number);
    let v = list_find_property_try_or_null(chapter, property_name, wanted);
    let gone = null_is(v);
    if (gone) {
      return null;
    }
    let verse = ebible_verse_merge(bible_folder, chapter_code, v);
    return verse;
  }
  let verses = list_map(verse_numbers, lambda);
  let r = {
    verses,
    absent,
    unreachable,
  };
  return r;
}
