import { ebible_language_to_name } from "./ebible_language_to_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function ebible_language_label(code) {
  "How to name a language to somebody choosing one: what it is called, with the code a link writes it as in brackets after.";
  "Both halves are needed and neither on its own will do. The code alone is what the link says and means nothing to most people; the name alone leaves a reader unable to tell which of two near-identical guesses is the one their link nearly spelled.";
  let name = ebible_language_to_name(code);
  let label = text_combine_multiple([name, " (", code, ")"]);
  return label;
}
