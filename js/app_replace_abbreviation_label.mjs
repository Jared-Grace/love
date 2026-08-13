import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_replace_abbreviation_label(parts) {
  "The words an explanation reads as, with the bolding dropped - what the learner would say the short word stands for.";
  let label = text_combine_multiple(parts);
  return label;
}
