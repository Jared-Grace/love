import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_size } from "./list_size.mjs";
import { examples_order } from "./examples_order.mjs";
import { examples_notes } from "./examples_notes.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export function examples_notes_gate_run() {
  "QA gate: every example in the reading order has a line saying why it is there, and every such line names an example that exists.";
  "The two lists sit in separate files and nothing but this holds them together, so either can drift. Both directions are checked because they fail differently: an example with no note is a rung on the climb with no reason given, and a note with no example is a description of something that was renamed or deleted and left its description behind.";
  let order = examples_order();
  let notes = examples_notes();
  let named = properties_get(notes);
  function note_missing_is(name) {
    let missing = list_includes_not(named, name);
    return missing;
  }
  let unexplained = list_filter(order, note_missing_is);
  list_empty_is_assert_json(unexplained, {
    hint: text_combine_multiple([
      "these examples are in the reading order with no note saying why they are there — add one to ",
      examples_notes.name,
    ]),
  });
  function example_missing_is(name) {
    let missing = list_includes_not(order, name);
    return missing;
  }
  let stranded = list_filter(named, example_missing_is);
  list_empty_is_assert_json(stranded, {
    hint: "these notes describe examples that are not in the reading order — was the example renamed or removed?",
  });
  ("Says how much it looked at, because a gate that answers nothing cannot be");
  ("told apart from one that did nothing. Both leave the same empty line, and the");
  ("reader is left inferring a pass from the absence of a complaint.");
  let r = {
    ordered: list_size(order),
    unexplained: 0,
    stranded: 0,
  };
  return r;
}
