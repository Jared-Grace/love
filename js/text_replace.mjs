import { list_join } from "./list_join.mjs";
import { text_split } from "./text_split.mjs";
export function text_replace(t, from, to) {
  let split = text_split(t, from);
  let replaced = list_join(split, to);
  return replaced;
}
