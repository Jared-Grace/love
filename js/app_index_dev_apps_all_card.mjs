import { app_shared_name_prefix_without } from "./app_shared_name_prefix_without.mjs";
import { window_app_url_generic } from "./window_app_url_generic.mjs";
import { app_index_card_link } from "./app_index_card_link.mjs";
import { fn_name } from "./fn_name.mjs";
export function app_index_dev_apps_all_card(root) {
  "the card on the index page that opens the page listing EVERY app, including the ones this page leaves out.";
  "The index below is a chosen list - what a reader coming to this site should be offered. The all-apps page is the unchosen one: it is built from the apps themselves, so an app that exists at all is on it, whether or not anybody has decided it is ready to be offered. That makes it the way to reach something half-written, and the reason it shows only on this network.";
  "It is a real link rather than a button, so it opens in a tab of its own and this page stays where it is - the same way every app card below opens, and for the same reason: whoever came here to look at two things should not have to come back for the second.";
  "The address is worked out from the app's own name rather than written down, so it is relative and leads to whichever copy this page was itself opened from.";
  let a_name = fn_name("app_apps_all");
  let hash = {};
  let url = window_app_url_generic(
    app_shared_name_prefix_without,
    a_name,
    hash,
  );
  let label = "All apps";
  let text =
    "Every app there is, built from the apps themselves rather than chosen - the way to reach one that is still being written";
  app_index_card_link(root, label, text, url);
}
