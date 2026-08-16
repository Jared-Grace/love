import { property_list_empty_is } from "./property_list_empty_is.mjs";
export function gloss_finding_elsewhere_empty_is(finding) {
  "Whether a parsing disagreement found no other word in its own passage carrying the form its explanation names.";
  "This is the line the two answers are sorted on. Nothing else in a finding says how hard it is to explain away, so a reader wanting the short list asks for the ones this says yes to.";
  let empty = property_list_empty_is(finding, "elsewhere");
  return empty;
}
