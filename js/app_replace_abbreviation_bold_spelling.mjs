import { list_filter_indices_odd } from "./list_filter_indices_odd.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_replace_abbreviation_bold_spelling(parts) {
  "The letters an explanation shows in bold, joined - what the reader is being shown the abbreviation is made of.";
  "The pieces are drawn plain and bold in turn starting with plain, so the bold ones are the pieces sitting at an odd place in the list.";
  let bolds = list_filter_indices_odd(parts);
  let spelled = text_combine_multiple(bolds);
  return spelled;
}
