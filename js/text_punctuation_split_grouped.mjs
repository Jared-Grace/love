import { text_words } from "./text_words.mjs";
import { list_map_filter } from "./list_map_filter.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export function text_punctuation_split_grouped(t) {
  "The words one piece of text carries, kept in the runs that punctuation cuts it into rather than poured into one list.";
  "The reader beside this one hands back every word with the runs lost, which is the right answer wherever only the words matter. It is the wrong answer wherever what stands NEXT to what matters: a full stop or an opening quote between two words means the writer never put those two words together, and a reading that has forgotten the full stop counts them as a pair anyway.";
  "A space is not a cut here, because a space is what holds a run together. Only the marks are.";
  "Nothing empty comes back, so a line ending in a full stop adds no run.";
  let cutter = new RegExp("[^\\p{L}\\p{M}\\p{N} ]+", "gu");
  let segments = t.split(cutter);
  function lambda(segment) {
    let words = text_words(segment);
    return words;
  }
  let grouped = list_map_filter(segments, lambda, list_empty_not_is);
  return grouped;
}
