import { gloss_marker_clauses } from "./gloss_marker_clauses.mjs";
import { text_replace_multiple_to } from "./text_replace_multiple_to.mjs";
export function gloss_explain_marker_clauses_stripped(explain) {
  "One word explanation with any clause that only points at a marker taken out of it, and every other word of it left exactly as it was.";
  "$plain explain";
  "the explanation is prose a reader reads. It is text to look at and nothing that runs.";
  "An explanation carrying no such clause comes back as itself, which is what lets this be asked of every word of a chapter rather than only of the ones somebody has already picked out.";
  let clauses = gloss_marker_clauses();
  let empty = "";
  let r = text_replace_multiple_to(explain, clauses, empty);
  return r;
}
