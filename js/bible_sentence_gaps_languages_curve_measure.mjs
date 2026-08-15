import { bible_sentence_gaps_sample_read } from "./bible_sentence_gaps_sample_read.mjs";
import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_folders_chapters_ends } from "./bible_folders_chapters_ends.mjs";
import { bible_sentence_gaps_language_counts } from "./bible_sentence_gaps_language_counts.mjs";
import { list_size } from "./list_size.mjs";
import { lists_combine } from "./lists_combine.mjs";
import { bible_chapters_ends_subsets_sentence_gaps } from "./bible_chapters_ends_subsets_sentence_gaps.mjs";
import { list_map } from "./list_map.mjs";
export async function bible_sentence_gaps_languages_curve_measure() {
  "Counts how far a passage is carried on for readers of one, two and three bibles at once, and of every bible at once, from a single reading of the sample.";
  "The two ends of this were already known and the middle was not, which is the part every real reader sits in. One bible carried three verses at the furthest and all thirty-eight carried sixteen; between those the shape was a guess, and a guess about the middle is what the wording a reader sees is written against.";
  "It reads everything once. The fetching is the whole cost and the folding is free, so nine thousand readers cost barely more than one - which is why this can afford to ask about every possible reader rather than a chosen few, and so answers about readers in general instead of telling a story about the pair that was picked.";
  arguments_assert(arguments, 0);
  let r = await bible_sentence_gaps_sample_read(bible_folders_chapters_ends);
  let chapters_ends = property_get(r, "read");
  let bible_folders = property_get(r, "bible_folders");
  let chapter_codes = property_get(r, "chapter_codes");
  let counts = bible_sentence_gaps_language_counts();
  let every = list_size(bible_folders);
  let sizes = lists_combine([counts, [every]]);
  function lambda(size) {
    let measured_size = bible_chapters_ends_subsets_sentence_gaps(
      chapters_ends,
      size,
    );
    return measured_size;
  }
  let curve = list_map(sizes, lambda);
  let measured = {
    bible_folders,
    chapter_codes,
    curve,
  };
  return measured;
}
