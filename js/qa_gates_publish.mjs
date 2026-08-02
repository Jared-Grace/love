import { qa_gates } from "./qa_gates.mjs";
import { qa_gates_publish_skip_words } from "./qa_gates_publish_skip_words.mjs";
import { list_filter_property_text_includes_not_multiple } from "./list_filter_property_text_includes_not_multiple.mjs";
export function qa_gates_publish() {
  "the gates that can say whether a build is safe to put in front of a reader - every gate the repo has, less the ones watching files that never reach a browser. it is a subset because the whole set takes long enough to run that peers commit inside the window, so a publish keeps being refused over something red that a page could not have caused";
  "a gate is kept unless its name says otherwise, so this narrows the wait without ever narrowing what a shipped page is checked against; the wide set stays what `q` runs";
  let gates = qa_gates();
  let words = qa_gates_publish_skip_words();
  let kept = list_filter_property_text_includes_not_multiple(
    gates,
    "name",
    words,
  );
  return kept;
}
