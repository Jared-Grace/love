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
  ("the dev tools card comes after the apps, not among them: it is not an app somebody came here to use, it is the way in to the game's test screens from a phone, which has no localhost to reach them from");
  app_index_dev_g_card(root);
}
