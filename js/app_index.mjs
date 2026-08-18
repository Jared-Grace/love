import { app_index_about_card } from "./app_index_about_card.mjs";
import { app_index_about_open } from "./app_index_about_open.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_index_dev_links_show } from "./app_index_dev_links_show.mjs";
import { app_shared_app_fn_set } from "./app_shared_app_fn_set.mjs";
import { app_index_main_fns } from "./app_index_main_fns.mjs";
import { app_index_generic } from "./app_index_generic.mjs";
import { app_index_dev_g_card } from "./app_index_dev_g_card.mjs";
import { property_get } from "./property_get.mjs";
export function app_index(context) {
  app_shared_app_fn_set(context, app_index);
  let root = property_get(context, "root");
  ("the working links come before the apps, and only on a machine on this same network: while something is being worked on they are the reason this page was opened, and the top is the part a phone shows without scrolling");
  app_index_dev_links_show(root);
  let entries = app_index_main_fns();
  app_index_generic(context, entries);
  ("about comes after the apps and before the dev tools: it is not an app either, but it is the one thing on this page addressed to whoever is reading it rather than to whoever is working on it.");
  app_index_about_card(root, lambda_about);
  ("the dev tools card comes after the apps, not among them: it is not an app somebody came here to use, it is the way in to the game's test screens from a phone, which has no localhost to reach them from");
  app_index_dev_g_card(root);
  function lambda_about() {
    app_index_about_open(root, lambda_index_again);
  }
  function lambda_index_again() {
    "about is drawn over this page rather than beside it, so coming back means drawing this page again from nothing rather than uncovering it";
    html_clear(root);
    app_index(context);
  }
}
