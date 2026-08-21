import { ebible_versions_english_downloadable_cache } from "./ebible_versions_english_downloadable_cache.mjs";
import { ebible_bibles_measure_generic } from "./ebible_bibles_measure_generic.mjs";
import { ebible_verse_marks_gaps_bible } from "./ebible_verse_marks_gaps_bible.mjs";
export async function ebible_versions_english_verse_marks_gaps_measure() {
  "Every English bible the search index walks, measured for chapters whose pages skip a verse number between the first mark and the last.";
  "The English ones first because a gap has to be judged by somebody reading the chapter, and these are the chapters that can be read here. The same measuring applies to every bible whose pages are on this machine and costs about a second and a half for two hundred and sixty chapters, so widening it is a question of who will read the answer rather than what it costs.";
  "Expect most of what this finds to be no fault at all. A verse that the older manuscripts do not carry is left out of a translation made from the critical text, and its number goes with it - Acts 8 verse 37, Luke 17 verse 36, and about a dozen more are absent from most modern translations on purpose. So the gaps have to be held against that known set before any of them means anything, and a bare count of them says almost nothing.";
  let bible_folders = await ebible_versions_english_downloadable_cache();
  let r = await ebible_bibles_measure_generic(
    bible_folders,
    ebible_verse_marks_gaps_bible,
  );
  return r;
}
