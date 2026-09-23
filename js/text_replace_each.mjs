import { text_replace } from "./text_replace.mjs";
export function text_replace_each(text, replacements) {
  "The text with every piece named on the left of the replacements put in place of by what it names on the right, the pieces taken one after another in the order written.";
  "One after another means a later piece is looked for in what the earlier ones left, so a replacement that writes a piece named further down is replaced again; order them so none does.";
  let replaced = text;
  for (let from in replacements) {
    replaced = text_replace(replaced, from, replacements[from]);
  }
  return replaced;
}
