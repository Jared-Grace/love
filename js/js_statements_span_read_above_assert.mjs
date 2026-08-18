import { js_statements_span_read_above_names } from "./js_statements_span_read_above_names.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export function js_statements_span_read_above_assert(span, head, f_name_new) {
  "$plain f_name_new";
  "Refuses a run of lines that brings into being a name the lines above it already read, and lets every other run through";
  "The language makes function declarations before the first line of a body runs, so a line above may call one written below it and this repo does exactly that. A cut turns the declaration into a plain binding at the call site, and a plain binding starts where it is written - so every caller above is left holding nothing.";
  "This is the third of the refusals and it looks at the one place the other two never did. One asks what the run reaches back to write, one asks what the run hands forward; both read the run and the lines behind it. Neither had any reason to look at the lines in front, because in a body read straight down nothing in front can depend on the run. Making a function before the body runs is the exception, and it is the whole of the exception.";
  "Refused rather than repaired by leaving the declaration where it stands, because which lines a cut moves is what the caller chose by naming its two ends. Quietly keeping one of them back would make the cut mean something other than what was asked for, and the run left behind would no longer be the run anybody read.";
  let early = js_statements_span_read_above_names(span, head);
  list_empty_is_assert_json(early, {
    hint: "this run of lines makes a function that the lines above it already call, and a cut would turn that into an ordinary binding written where the run was - so those callers would find nothing there. Would you like to choose ends that begin above the first line calling it, or ends that leave the function where it stands?",
    f_name_new,
  });
}
