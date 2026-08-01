import { text_dispatcher_command_names_cases } from "./text_dispatcher_command_names_cases.mjs";
import { property_get } from "./property_get.mjs";
import { text_dispatcher_command_names } from "./text_dispatcher_command_names.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function text_dispatcher_command_names_gate_run() {
  "QA gate: each written-down piece of writing yields the commands the corpus says";
  "it spells out, and no others.";
  "This is where the reading behind the repo-wide sweep is answerable. That sweep";
  "walks every function looking for writing that tells a reader to run something,";
  "and it is green today - which it would also be if the reader had quietly stopped";
  "finding commands at all, over a repo it had genuinely read and genuinely never";
  "looked at.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = text_dispatcher_command_names_cases();
  function answer(c) {
    let text = property_get(c, "text");
    let names = text_dispatcher_command_names(text);
    return names;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "names",
    "why",
    "text dispatcher command names",
  );
  return r;
}
