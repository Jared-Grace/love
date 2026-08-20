import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_includes } from "./list_includes.mjs";
export function youtube_browse_stated_count(answer, counted_word) {
  "How many things youtube itself says a list holds, read out of the answer it sent, or nothing when the answer does not say.";
  "Youtube writes the number as a whole phrase a person is meant to read - twenty-five videos, a hundred and four playlists - so the phrase is what is looked for, in the answer written out as text. Reading it down a path would have gone empty the next time youtube moved its header, and looking for it is the same reasoning the entries themselves are found by.";
  "Every phrase found has to say the same number, and anything else answers nothing at all. A title reading exactly like a count would otherwise be taken for one, and a guess about how many things there are is worse than no answer: the caller can see nothing and go on, but it cannot see a wrong number and know.";
  arguments_assert(arguments, 2);
  let text = JSON.stringify(answer);
  let pattern = new RegExp('"([0-9,]+) ' + counted_word + 's?"', "g");
  let counts = [];
  for (let found of text.matchAll(pattern)) {
    let count = Number(found[1].split(",").join(""));
    if (list_includes(counts, count)) {
      continue;
    }
    counts.push(count);
  }
  if (not_equal(counts.length, 1)) {
    return null;
  }
  return counts[0];
}
