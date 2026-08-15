import { ebible_bible_folders_sorted } from "./ebible_bible_folders_sorted.mjs";
import { bible_folders_sentence_end_marked } from "./bible_folders_sentence_end_marked.mjs";
import { bible_sentence_gaps_sample_chapters } from "./bible_sentence_gaps_sample_chapters.mjs";
import { bible_sentence_gaps_sample_count } from "./bible_sentence_gaps_sample_count.mjs";
export function bible_sentence_gaps_sample() {
  "What a sentence-gap measurement is taken over: the bibles worth asking, the chapters to read, and how many verses of each.";
  "The bibles that mark no sentence ends are left out, for the same reason the page leaves them out: they can only ever answer no, and a reader of one of them is given what they asked for with nothing added.";
  "The three of them are answered together because they are one choice, not three. Two measurements were each gathering all three for themselves, so a change to what is sampled had to be made twice to mean anything - and the day it was made once, the two would still have run, still have answered, and quietly have been measuring different things.";
  let all = ebible_bible_folders_sorted();
  let bible_folders = bible_folders_sentence_end_marked(all);
  let chapter_codes = bible_sentence_gaps_sample_chapters();
  let count = bible_sentence_gaps_sample_count();
  let sample = {
    bible_folders,
    chapter_codes,
    count,
  };
  return sample;
}
