import { each } from "./each.mjs";
import { text_replace } from "./text_replace.mjs";
export function text_replace_multiple_to(t, froms, to) {
  let replaced = t;
  function lambda(from) {
    replaced = text_replace(replaced, from, to);
  }
  each(froms, lambda);
  return replaced;
}
