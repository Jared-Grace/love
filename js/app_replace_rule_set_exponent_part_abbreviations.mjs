import { object_merge_set } from "./object_merge_set.mjs";
export function app_replace_rule_set_exponent_part_abbreviations(
  abbreviations,
) {
  "What the short words of an exponent part stand for, kept in one place so both exercises that teach it call the same things by the same names.";
  object_merge_set(abbreviations, {
    eE: [
      "lowercase ",
      "e",
      " or uppercase ",
      "E",
      ", the letter that marks an exponent",
    ],
    ep: ["", "e", "x", "p", "onent"],
    se: ["", "s", "cientific notation number ", "e", "nding"],
    sn: ["", "s", "cientific ", "n", "otation number"],
  });
}
