import { list_empty_is } from "./list_empty_is.mjs";
import { property_get } from "./property_get.mjs";
export function gloss_finding_elsewhere_empty_is(finding) {
  "Whether a parsing disagreement found no other word in its own passage carrying the form its explanation names.";
  "This is the line the two answers are sorted on. Nothing else in a finding says how hard it is to explain away, so a reader wanting the short list asks for the ones this says yes to.";
  let elsewhere = property_get(finding, "elsewhere");
  let empty = list_empty_is(elsewhere);
  return empty;
}
