import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { html_text_set_if } from "./html_text_set_if.mjs";
export function app_replace_rule_set_labels_set(
  index_selected_held,
  label_rules,
  label_symbols,
) {
  "Tells the player which row to press next: a rule while none is chosen, then a symbol once one is.";
  "Asked after every change to the chosen rule, not only on a whole redraw - pressing a rule repaints just the buttons, and labels left to the redraw kept asking for a rule after one was chosen.";
  arguments_assert(arguments, 3);
  let value = property_get(index_selected_held, "index_selected");
  let has_selection = null_not_is(value);
  html_text_set_if(has_selection, "Rules:", "Choose a rule:", label_rules);
  html_text_set_if(
    has_selection,
    "Choose a symbol:",
    "Symbols:",
    label_symbols,
  );
}
