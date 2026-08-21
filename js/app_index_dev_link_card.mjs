import { app_index_emoji } from "./app_index_emoji.mjs";
import { app_index_label_generic } from "./app_index_label_generic.mjs";
import { window_go_app } from "./window_go_app.mjs";
import { app_index_card } from "./app_index_card.mjs";
import { property_get } from "./property_get.mjs";
export function app_index_dev_link_card(root, entry) {
  "One card on the index page for one place worth going straight to, opened the same way every other card on that page opens its app.";
  "The address it builds is a relative one, so the card leads to whichever stage the index itself was opened from. Opened from the working copy it reaches the working copy, and opened from the deployed site it reaches the deployed site, with nothing written down twice and nothing to keep in step.";
  "The picture in front of the writing is the one belonging to the app this card leads to, rather than one chosen here. A card is recognised by where it goes, and where it goes already has a picture - so the praying game's card wears the praying game's hands without that being written down a second place to fall out of step.";
  let app_fn = property_get(entry, "app_fn");
  let hash = property_get(entry, "hash");
  let written = property_get(entry, "label");
  let emoji = app_index_emoji(app_fn);
  let label = app_index_label_generic(emoji, written);
  let text = property_get(entry, "text");
  function opened() {
    window_go_app(app_fn, hash);
  }
  app_index_card(root, label, text, opened);
}
