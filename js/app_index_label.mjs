import { app_index_emoji } from "./app_index_emoji.mjs";
import { app_shared_name_prefix_without } from "./app_shared_name_prefix_without.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
export function app_index_label(app_fn_name) {
  "what one app's card says on it: its name, with a small picture in front where there is one that says something about that app.";
  "An app with no picture gets its name and no room held open where a picture would have gone. A blank kept in line with the ones above it would read as a picture that failed to arrive - which is a thing a reader can do nothing about and will try to.";
  let without = app_shared_name_prefix_without(app_fn_name);
  let emoji = app_index_emoji(app_fn_name);
  let none = text_empty_is(emoji);
  if (none) {
    return without;
  }
  let label = text_combine_multiple([emoji, " ", without]);
  return label;
}
