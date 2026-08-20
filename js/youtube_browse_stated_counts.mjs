import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { list_includes } from "./list_includes.mjs";
export function youtube_browse_stated_counts(answer, counted_word) {
  "Every different number youtube's answer names things by, as in twenty-five videos or a hundred and four playlists, with each number given once however many times the answer says it.";
  "Youtube writes a count as a whole phrase a person is meant to read, so the phrase is what is looked for, in the answer written out as text. Reading it down a path would have gone empty the next time youtube moved its header, and looking for it is the same reasoning the entries themselves are found by.";
  "Every number found is kept rather than one being chosen, because the interesting answers are none and several - a list youtube did not count, and an answer where something else counts things too - and a caller that only ever saw the winner could not tell those two apart, nor say which it was looking at.";
  arguments_assert(arguments, 2);
  let text = json_to(answer);
  let pattern = new RegExp('"([0-9,]+) ' + counted_word + 's?"', "g");
  let counts = [];
  for (let found of text.matchAll(pattern)) {
    let plain = found[1].split(",").join("");
    let count = Number(plain);
    if (list_includes(counts, count)) {
      continue;
    }
    counts.push(count);
  }
  return counts;
}
