import { list_find } from "./list_find.mjs";
import { list_single } from "./list_single.mjs";
import { list_single_message } from "./list_single_message.mjs";
import { list_matching_single } from "./list_matching_single.mjs";
import { js_type_find } from "./js_type_find.mjs";
import { js_array_element_text_find } from "./js_array_element_text_find.mjs";
import { js_array_element_identifier_find } from "./js_array_element_identifier_find.mjs";
export function functions_refusing_finders() {
  "Every helper that refuses rather than handing back nothing. Asking one of";
  "these whether it found something is asking a question that already has an";
  "answer: if it did not, nobody is here to read the asking.";
  "A name belongs here only once its refusing has been read in its own source or";
  "in what it calls. A guess would fail a caller for a check that is genuinely";
  "doing work, which is worse than the fault being looked for - so the list is";
  "short on purpose and grows by somebody checking, not by resemblance.";
  let finders = [
    list_find.name,
    list_single.name,
    list_single_message.name,
    list_matching_single.name,
    js_type_find.name,
    js_array_element_text_find.name,
    js_array_element_identifier_find.name,
  ];
  return finders;
}
