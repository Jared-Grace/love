import { fn_name } from "./fn_name.mjs";
export function functions_refusing_finders() {
  "Every helper that refuses rather than handing back nothing. Asking one of";
  "these whether it found something is asking a question that already has an";
  "answer: if it did not, nobody is here to read the asking.";
  "A name belongs here only once its refusing has been read in its own source or";
  "in what it calls. A guess would fail a caller for a check that is genuinely";
  "doing work, which is worse than the fault being looked for - so the list is";
  "short on purpose and grows by somebody checking, not by resemblance.";
  let finders = [
    fn_name("list_find"),
    fn_name("list_single"),
    fn_name("list_single_message"),
    fn_name("list_matching_single"),
    fn_name("js_type_find"),
    fn_name("js_array_element_text_find"),
    fn_name("js_array_element_identifier_find"),
  ];
  return finders;
}
