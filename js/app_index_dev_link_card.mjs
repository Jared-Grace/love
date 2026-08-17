import { app_index_card } from "./app_index_card.mjs";
import { property_get } from "./property_get.mjs";
import { window_open_app } from "./window_open_app.mjs";
export function app_index_dev_link_card(root, entry) {
  "One card on the index page for one place worth going straight to, opened the same way every other card on that page opens its app.";
  "The address it builds is a relative one, so the card leads to whichever stage the index itself was opened from. Opened from the working copy it reaches the working copy, and opened from the deployed site it reaches the deployed site, with nothing written down twice and nothing to keep in step.";
  let app_fn = property_get(entry, "app_fn");
  let hash = property_get(entry, "hash");
  let label = property_get(entry, "label");
  let text = property_get(entry, "text");
  function opened() {
    window_open_app(app_fn, hash);
  }
  app_index_card(root, label, text, opened);
}
