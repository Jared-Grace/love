import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { bible_sentence_gaps_sample_chapters } from "./bible_sentence_gaps_sample_chapters.mjs";
import { bible_sentence_gaps_sample_count } from "./bible_sentence_gaps_sample_count.mjs";
import { bible_folder_chapters_sentence_gaps } from "./bible_folder_chapters_sentence_gaps.mjs";
export async function bible_sentence_gaps_measure() {
  "Runs the measurement: reads the sampled chapters of the English bible and answers with a tally of how far a passage is carried on past where the counting stopped.";
  "The English bible is the one asked, because it is the one the wording a reader is shown was written in and the one the bound was chosen against. A bible that marks its sentences differently would answer differently, and that is a separate question from this one.";
  arguments_assert(arguments, 0);
  let bible_folder = ebible_folder_english();
  let chapter_codes = bible_sentence_gaps_sample_chapters();
  let count = bible_sentence_gaps_sample_count();
  let measured = await bible_folder_chapters_sentence_gaps(
    bible_folder,
    chapter_codes,
    count,
  );
  return measured;
}
