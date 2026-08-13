import { app_shared_button_spaced } from "./app_shared_button_spaced.mjs";
import { app_shared_hash_field_drop_reload } from "./app_shared_hash_field_drop_reload.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_shared_hash_field_drop_button(parent, field, value) {
  "The way past a word in a link that nobody can make sense of: take it out and open the page on what is left.";
  "It stands beside the offered corrections rather than only appearing when there are none, because a reader may recognise that none of the guesses is theirs, and the page should not hold them there for it.";
  let text = text_combine_multiple(['Leave "', value, '" out']);
  function lambda() {
    app_shared_hash_field_drop_reload(field, value);
  }
  let component = app_shared_button_spaced(parent, text, lambda);
  return component;
}
