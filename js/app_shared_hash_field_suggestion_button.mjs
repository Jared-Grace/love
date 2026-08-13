import { app_shared_button_spaced } from "./app_shared_button_spaced.mjs";
import { app_shared_hash_field_swap_reload } from "./app_shared_hash_field_swap_reload.mjs";
import { property_get } from "./property_get.mjs";
export function app_shared_hash_field_suggestion_button(
  parent,
  field,
  value,
  suggestion,
) {
  "One correction offered to a reader whose link says something a field cannot make sense of. Pressing it is the reader saying yes, that is what I meant.";
  "The field says how to word its own suggestions, because what a reader needs to see is not what the link carries: a language wants its name beside its code, a chapter wants the book spelled out. The link carries the short form either way, and offering the short form back to somebody who already could not read it is offering nothing.";
  let label = property_get(field, "label");
  let text = label(suggestion);
  function lambda() {
    app_shared_hash_field_swap_reload(field, value, suggestion);
  }
  let component = app_shared_button_spaced(parent, text, lambda);
  return component;
}
