import { greater_than } from "./greater_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { subtract } from "./subtract.mjs";
export function reply_bible_choices_shared(verses_tokens) {
  "The choices that get a function of their own, largest first, each as its elements joined by spaces. A choice earns one by appearing more than once, in the same verse or another, or by sitting inside a bigger choice, which then calls it. A starred word counts as a choice, since it is one.";
  let counts = new Map();
  for (let tokens of verses_tokens) {
    for (let token of tokens) {
      if (
        greater_than(token.elements.length, 1) ||
        token.elements[0].endsWith("*")
      ) {
        let key = token.elements.join(" ");
        let count = counts.get(key) || 0;
        counts.set(key, count + 1);
      }
    }
  }
  let keys = [...counts.keys()];
  function shared_is(key) {
    let elements = key.split(" ");
    function holds_it(other) {
      let others = other.split(" ");
      function other_has(element) {
        let has = others.includes(element);
        return has;
      }
      let holds = not_equal(other, key) && elements.every(other_has);
      return holds;
    }
    let a2 = counts.get(key);
    let is = greater_than(a2, 1) || keys.some(holds_it);
    return is;
  }
  function larger_first(a, b) {
    let order =
      subtract(b.split(" ").length, a.split(" ").length) || a.localeCompare(b);
    return order;
  }
  let shared = keys.filter(shared_is).sort(larger_first);
  return shared;
}
