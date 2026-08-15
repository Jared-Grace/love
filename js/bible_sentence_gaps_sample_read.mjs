import { bible_sentence_gaps_sample } from "./bible_sentence_gaps_sample.mjs";
import { property_get } from "./property_get.mjs";
export async function bible_sentence_gaps_sample_read(chapters_fn) {
  "Reads the sentence-gap sample with the given reading of a chapter, and hands back what was read together with the sample it was read over.";
  "The sample is handed back beside the reading because a measurement has to say what it was taken over to mean anything, and one of the two measurements built on this counts the bibles it read as part of its own answer.";
  "Which reading of a chapter is used is the only thing the two measurements differ in at this point - one wants the gaps themselves, the other wants the sentence ends to fold afterwards - so it is the one thing handed in, and everything around it is said once.";
  let sample = bible_sentence_gaps_sample();
  let bible_folders = property_get(sample, "bible_folders");
  let chapter_codes = property_get(sample, "chapter_codes");
  let count = property_get(sample, "count");
  let read = await chapters_fn(bible_folders, chapter_codes, count);
  let r = {
    bible_folders,
    chapter_codes,
    count,
    read,
  };
  return r;
}
