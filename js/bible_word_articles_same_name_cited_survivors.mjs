import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function bible_word_articles_same_name_cited_survivors(rows, files) {
  "The rows left when articles sharing one title are cut down to those the verse cites; a title with only one article, or none of whose articles is cited, keeps every row.";
  arguments_assert(arguments, 2);
  let by_name = new Map();
  for (let row of rows) {
    let name = row[1];
    let group = by_name.get(name) ?? [];
    group.push(row);
    by_name.set(name, group);
  }
  function kept(row) {
    let group = by_name.get(row[1]);
    if (equal(group.length, 1)) {
      return true;
    }
    function cited_is(other) {
      let yes = files.has(other[2]);
      return yes;
    }
    let some = group.some(cited_is);
    if (equal(some, false)) {
      return true;
    }
    let r = files.has(row[2]);
    return r;
  }
  let survivors = rows.filter(kept);
  return survivors;
}
