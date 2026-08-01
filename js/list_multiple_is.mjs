import { greater_than } from "./greater_than.mjs";
import { list_size } from "./list_size.mjs";
export function list_multiple_is(list) {
  "Whether a list holds more than one thing.";
  "Two or more and more than one are the same question of a count, and this used to";
  "ask it the first way while nine files asked it the second. Same meaning, different";
  "shape, so the fold could not see that those nine were already this function; they";
  "stayed written out by hand. Spelled the way the callers spell it, they fold.";
  let a = list_size(list);
  let m = greater_than(a, 1);
  return m;
}
