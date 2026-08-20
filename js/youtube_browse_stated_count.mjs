import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_browse_stated_counts } from "./youtube_browse_stated_counts.mjs";
export function youtube_browse_stated_count(answer, counted_word) {
  "How many things youtube itself says a list holds, read out of the answer it sent, or nothing when the answer does not say.";
  "Every phrase found has to say the same number, and anything else answers nothing at all. A title reading exactly like a count would otherwise be taken for one, and a guess about how many things there are is worse than no answer: the caller can see nothing and go on, but it cannot see a wrong number and know.";
  arguments_assert(arguments, 2);
  let counts = youtube_browse_stated_counts(answer, counted_word);
  if (not_equal(counts.length, 1)) {
    return null;
  }
  let count = counts[0];
  return count;
}
