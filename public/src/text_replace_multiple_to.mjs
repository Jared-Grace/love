import { each } from "../../../love/public/src/each.mjs";
import { text_replace } from "../../../love/public/src/text_replace.mjs";
export function text_replace_multiple_to(t, froms, to) {
  let replaced = t;
  function lambda(from) {
    t = text_replace(t, from, to);
  }
  each(froms, lambda);
  return replaced;
}
