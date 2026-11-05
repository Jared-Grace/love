import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
export function reply_bible_tokens_spelled(verses_columns, wordings_all) {
  "The columns of each verse as tokens: the sorted different elements at that place, and whether the place is optional. A word the Bibles print with both u and v becomes one element, its most used spelling with a star after it, so loue and love are one thing at every place, including a place where only love was printed.";
  let counts = new Map();
  for (let word of wordings_all.join(" ").split(" ")) {
    let count = counts.get(word) || 0;
    counts.set(word, count + 1);
  }
  let groups = new Map();
  for (let word of counts.keys()) {
    let normal = word.replaceAll("v", "u");
    let group = groups.get(normal) || [];
    group.push(word);
    groups.set(normal, group);
  }
  let starred = new Map();
  for (let group of groups.values()) {
    if (greater_than(group.length, 1)) {
      function more_used(a, b) {
        let left = counts.get(b);
        let right = counts.get(a);
        let order = subtract(left, right);
        return order;
      }
      let head = [...group].sort(more_used)[0];
      for (let word of group) {
        starred.set(word, `${head}*`);
      }
    }
  }
  function token_from(column) {
    function element_of(word) {
      let element = starred.get(word) || word;
      return element;
    }
    let v = column.words.map(element_of);
    let elements = [...new Set(v)].sort();
    let token = {
      elements,
      optional: column.optional,
    };
    return token;
  }
  function tokens_from(columns) {
    let tokens = columns.map(token_from);
    return tokens;
  }
  let verses_tokens = verses_columns.map(tokens_from);
  return verses_tokens;
}
