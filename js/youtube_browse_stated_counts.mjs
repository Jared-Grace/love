import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_includes } from "./list_includes.mjs";
import { youtube_answer_texts } from "./youtube_answer_texts.mjs";
export function youtube_browse_stated_counts(answer, counted_word) {
  "Every different number youtube's answer names things by, as in twenty-five videos or a hundred and four playlists, with each number given once however many times the answer says it.";
  "Youtube writes a count as a whole phrase a person is meant to read, so a phrase is what is looked for, and the phrase has to be the whole of what it is found in. A number sitting inside a longer sentence is that sentence saying something else.";
  "Every number found is kept rather than one being chosen, because the interesting answers are none and several - a list youtube did not count, and an answer where something else counts things too - and a caller that only ever saw the winner could not tell those two apart, nor say which it was looking at.";
  arguments_assert(arguments, 2);
  let pattern = new RegExp("^([0-9,]+) " + counted_word + "s?$");
  let counts = [];
  for (let text of youtube_answer_texts(answer)) {
    let found = text.match(pattern);
    if (equal(found, null)) {
      continue;
    }
    let plain = found[1].split(",").join("");
    let count = Number(plain);
    if (list_includes(counts, count)) {
      continue;
    }
    counts.push(count);
  }
  return counts;
}
