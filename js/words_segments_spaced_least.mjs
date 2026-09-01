import { null_not_is } from "./null_not_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { list_min } from "./list_min.mjs";
export function words_segments_spaced_least(segments, bigrams) {
  "Of the places a cut word claims a space belongs, how often the writing actually puts one there, at the place it does so least.";
  "$plain segments";
  "the pieces one word was cut into, in the order they are written.";
  "$plain bigrams";
  "how often the writing puts each pair of words side by side with nothing but a space between them, kept as the pair against its count.";
  "The least of them is what comes back, because a word cut into three claims two spaces, and it is only as well attested as the space nobody writes.";
  let counts = [];
  let previous = null;
  for (let segment of segments) {
    let following = null_not_is(previous);
    if (following) {
      let pair = text_combine_multiple([previous, " ", segment]);
      let seen = bigrams[pair];
      let count = seen ? seen : 0;
      list_add(counts, count);
    }
    previous = segment;
  }
  let least = list_min(counts);
  return least;
}
