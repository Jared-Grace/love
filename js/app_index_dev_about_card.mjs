import { host_local_network_is } from "./host_local_network_is.mjs";
import { app_index_card } from "./app_index_card.mjs";
import { app_shared_about_text } from "./app_shared_about_text.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_index_dev_about_card(root, opened) {
  "the card at the top of the index page that opens what is promised about money here, shown only on a machine on this same network.";
  "it is a way in for whoever is working on that text, not a second home for it. the text itself lives in the about screen of the app it belongs to, and reaching it there is open an app, open settings, open about, open money - four taps to look at a paragraph being written. this is one.";
  "shown only on this network for the same reason the working links above it are: nothing here is ever seen by a reader of the deployed site, so a way in that exists for convenience cannot become a second place a reader has to be told about.";
  "the test is asked here rather than by the page that calls this, the same way the working links ask it, so there is one answer to keep right instead of one per caller.";
  arguments_assert(arguments, 2);
  let wanted = host_local_network_is();
  if (wanted) {
    let label = app_shared_about_text();
    let text = "Why everything here is free, and what happens with a gift";
    app_index_card(root, label, text, opened);
  }
}
