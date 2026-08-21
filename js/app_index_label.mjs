import { app_index_emoji } from "./app_index_emoji.mjs";
import { app_index_label_generic } from "./app_index_label_generic.mjs";
import { app_shared_name_prefix_without } from "./app_shared_name_prefix_without.mjs";
export function app_index_label(app_fn_name) {
  "what one app's card says on it: its name, with a small picture in front where there is one that says something about that app.";
  "The app's own name is the writing, which is the whole difference between this and the general one beside it. Every other card on the page is called something a person wrote for it; an app's card is called what the app is called, so that a rename of the app renames the card too.";
  let without = app_shared_name_prefix_without(app_fn_name);
  let emoji = app_index_emoji(app_fn_name);
  let label = app_index_label_generic(emoji, without);
  return label;
}
