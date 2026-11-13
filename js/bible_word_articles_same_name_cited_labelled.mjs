import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function bible_word_articles_same_name_cited_labelled(
  survivors,
  counts,
) {
  arguments_assert(arguments, 2);
  for (let row of survivors) {
    counts.set(row[1], (counts.get(row[1]) ?? 0) + 1);
  }
  let seen = new Map();
  function labelled(row) {
    let total = counts.get(row[1]);
    if (equal(total, 1)) {
      return row;
    }
    let position = (seen.get(row[1]) ?? 0) + 1;
    seen.set(row[1], position);
    let copy = [...row];
    copy[1] = row[1] + ", article " + position + " of " + total;
    return copy;
  }
  return labelled;
}
