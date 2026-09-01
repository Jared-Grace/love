import { object_property_names } from "./object_property_names.mjs";
import { text_segments_strongest } from "./text_segments_strongest.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { words_segments_spaced_least } from "./words_segments_spaced_least.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export function words_glued_candidates(words, bigrams, half_least, parts) {
  "Every word in a body of writing that reads as a given number of the writing's own ordinary words run together with the spaces missing between them.";
  "$plain words";
  "how often the writing uses each word, kept as the word against its count.";
  "$plain bigrams";
  "how often the writing puts each pair of words side by side with nothing but a space between them.";
  "$plain half_least";
  "how often the rarest piece has to stand on its own elsewhere before the word is worth offering: a number, and nothing that runs.";
  "$plain parts";
  "how many words to try reading it as: a number, and nothing that runs. Two finds a missing space, three finds two of them, and a word that reads as three also reads as two, so the two answers overlap and both are worth asking for.";
  "A word is offered where it can be cut so that EVERY piece is a word the writing uses on its own, often. That is all the evidence there is, and it is deliberately not enough to act on by itself: a language is free to weld two of its own small words into a real closed compound, and no counting tells that apart from a space that went missing. What comes back is a list for somebody who knows the language to rule on, one word at a time.";
  "How often the pieces stand side by side WITH a space is reported beside each one, and it is worth reading even though it decides nothing. It was tried as the whole test first and it failed: in the Urdu bible the spaced spelling of the welded pairs turns up nought times out of nought, because whatever welded them welded every one of them. A defect that is thorough looks exactly like a convention, and only the same pair being spelled both ways somewhere else in the same book gives it away.";
  "Nor does that count tell a defect from ordinary spelling. Read against English, which has nothing wrong with it, the never-spaced list is because, into, upon, another, cannot, nothing — every one correct. The count says how big the pile is and in what order to ask; it does not say what is wrong.";
  "Where a word can be cut in more than one place, the cut is the one whose weakest piece is the commonest word, because a cut is only as good as the rarest of the words it claims to have found.";
  "Pieces of a single character are not offered. Every script has marks that stand alone as a letter, and cutting one letter off the front finds a piece for almost anything.";
  let found = [];
  for (let word of object_property_names(words)) {
    let best = text_segments_strongest(word, words, parts);
    let missing = null_is(best);
    if (missing) {
      continue;
    }
    let weakest = property_get(best, "weakest");
    let enough = greater_than_equal(weakest, half_least);
    if (enough) {
      let segments = property_get(best, "segments");
      let glued = property_get(words, word);
      let spaced = words_segments_spaced_least(segments, bigrams);
      let candidate = {
        word,
        glued,
        segments,
        weakest,
        spaced,
      };
      list_add(found, candidate);
    }
  }
  function mapper(candidate) {
    let n = property_get(candidate, "glued");
    return n;
  }
  let ranked = list_sort_number_mapper_reverse(found, mapper);
  return ranked;
}
