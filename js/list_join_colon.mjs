import { list_join } from "./list_join.mjs";
export function list_join_colon(list) {
  "The items run together with a colon between each one and the next, and nothing else added.";
  "A BARE colon, unlike its doubled and tripled cousins, which pad themselves with spaces on both sides to stand out as a separator between whole phrases. This one is the colon that binds two parts of one name tightly enough to read as a single thing - a chapter and its verses, an hour and its minutes.";
  let joined = list_join(list, ":");
  return joined;
}
