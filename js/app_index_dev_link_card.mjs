import { app_index_emoji } from "./app_index_emoji.mjs";
import { app_index_label_generic } from "./app_index_label_generic.mjs";
import { app_shared_name_prefix_without } from "./app_shared_name_prefix_without.mjs";
import { window_app_url_generic } from "./window_app_url_generic.mjs";
import { app_index_card_link } from "./app_index_card_link.mjs";
import { property_get } from "./property_get.mjs";
export function app_index_dev_link_card(root, entry) {
  "One card on the index page for one place worth going straight to, opened the same way every other card on that page opens its app.";
  "The address it builds is a relative one, so the card leads to whichever stage the index itself was opened from. Opened from the working copy it reaches the working copy, and opened from the deployed site it reaches the deployed site, with nothing written down twice and nothing to keep in step.";
  "The picture in front of the writing is the one belonging to the app this card leads to, rather than one chosen here. A card is recognised by where it goes, and where it goes already has a picture - so the praying game's card wears the praying game's hands without that being written down a second place to fall out of step.";
  "It is a real LINK, the same as the app cards further down, and so it opens in a tab of its own. It was a button running a lambda, and a lambda can only ever replace the page it was pressed on: whoever came here to open two things had to come back for the second, and the way back from an app is the phone's own back gesture rather than anything this page can offer. The cards below had already been made links for exactly that; these are the ones a phone shows FIRST, so they were the ones where it was felt.";
  "Being a link is also the difference between a card that can only be tapped and one a browser will hold under a long press - open beside this, keep the address, send it somewhere. None of those exist for a button however its lambda is written.";
  let app_fn = property_get(entry, "app_fn");
  let hash = property_get(entry, "hash");
  let written = property_get(entry, "label");
  let emoji = app_index_emoji(app_fn);
  let label = app_index_label_generic(emoji, written);
  let text = property_get(entry, "text");
  let url = window_app_url_generic(
    app_shared_name_prefix_without,
    app_fn,
    hash,
  );
  app_index_card_link(root, label, text, url);
}
