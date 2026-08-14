import { arguments_assert } from "./arguments_assert.mjs";
import { bible_folder_chapter_sentence_gaps } from "./bible_folder_chapter_sentence_gaps.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { bible_chapters_sentence_gaps_combine } from "./bible_chapters_sentence_gaps_combine.mjs";
import { property_set } from "./property_set.mjs";
export async function bible_folder_chapters_sentence_gaps(
  bible_folder,
  chapter_codes,
  count,
) {
  "Reads several chapters of one bible and tallies how far a passage is carried on past where the counting stopped.";
  "The tally is what the claim has to be checked against. A bound says how far the carrying COULD go and the wording a reader is shown says how far it usually does, and those two come apart badly - a bound of twenty five verses is compatible with almost every sentence finishing inside one.";
  "Each chapter is measured on its own and only the answers are put together, so no sentence is ever read as running from the end of one chapter into the start of the next.";
  arguments_assert(arguments, 3);
  async function lambda(chapter_code) {
    let chapter_measured = await bible_folder_chapter_sentence_gaps(
      bible_folder,
      chapter_code,
      count,
    );
    return chapter_measured;
  }
  let each_chapter = await list_map_unordered_async(chapter_codes, lambda);
  let measured = bible_chapters_sentence_gaps_combine(
    chapter_codes,
    each_chapter,
  );
  property_set(measured, "bible_folder", bible_folder);
  return measured;
}
