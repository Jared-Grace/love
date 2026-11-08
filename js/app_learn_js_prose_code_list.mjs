import { app_learn_js_prose_code_list_generic } from "./app_learn_js_prose_code_list_generic.mjs";
export function app_learn_js_prose_code_list(parent, lines) {
  "a lettered list of explanation lines - each line is itself a parts-list (the same [kind, text] shape a single line takes), rendered as one lettered item (a, b, c). For a small fixed set of cases where the enumeration itself carries meaning, such as the three cases of a trichotomy. Letters, not numbers, so the marker never reads as one of the numbers being compared. Its own top and bottom margin are cleared so the surrounding flex gap alone spaces it from its neighbours.";
  let ol = app_learn_js_prose_code_list_generic(parent, lines, "lower-alpha");
  return ol;
}
