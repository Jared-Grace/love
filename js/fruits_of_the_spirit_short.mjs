import { less_than_equal } from "./less_than_equal.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
export function fruits_of_the_spirit_short() {
  "the fruits of the Spirit of eight letters or fewer, so a line holding three of them in an array still fits a phone. 2026-11-15: the happy walk found array_copy drawing self-control past a phone's edge, on a line of three long fruits";
  let list = fruits_of_the_spirit();
  let short = [];
  for (let item of list) {
    if (less_than_equal(item.length, 8)) {
      short.push(item);
    }
  }
  return short;
}
