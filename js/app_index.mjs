import { fn_name } from "./fn_name.mjs";
import { function_import_relative } from "./function_import_relative.mjs";
import { app_index_built_card } from "./app_index_built_card.mjs";
import { app_index_dev_build_card } from "./app_index_dev_build_card.mjs";
import { app_index_dev_about_card } from "./app_index_dev_about_card.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_index_dev_links_show } from "./app_index_dev_links_show.mjs";
import { app_shared_app_fn_set } from "./app_shared_app_fn_set.mjs";
import { app_index_main_fns } from "./app_index_main_fns.mjs";
import { app_index_generic } from "./app_index_generic.mjs";
import { app_index_dev_g_card } from "./app_index_dev_g_card.mjs";
import { property_get } from "./property_get.mjs";
export async function app_index(context) {
  app_shared_app_fn_set(context, app_index);
  let root = property_get(context, "root");
  ("the way into the dev builds comes before even the working links, because it is not a place to go but a choice of which copy of everything below it the rest of this page leads to");
  app_index_dev_build_card(root);
  ("and the same card the other way for whoever is standing in the dev build, so the way back to the ordinary site is a tap rather than an address typed out on a phone. Exactly one of the two ever shows, because each asks which copy this page is.");
  app_index_built_card(root);
  ("the working links come before the apps, and only on a machine on this same network: while something is being worked on they are the reason this page was opened, and the top is the part a phone shows without scrolling");
  ("waited on, so the cards below still land below them: what is drawn there is fetched by name rather than imported, to keep it out of the public page's bundle, and a fetch that is not waited on would let the rest of this page overtake it");
  await app_index_dev_links_show(root);
  ("about sits up here with the working links rather than down among the apps, because it is the same kind of thing they are: a way in for whoever is working, shown only on this network, and worth one tap instead of the four it takes to reach the same paragraph through an app's settings.");
  app_index_dev_about_card(root, lambda_about);
  let entries = app_index_main_fns();
  app_index_generic(context, entries);
  ("the dev tools card comes after the apps, not among them: it is not an app somebody came here to use, it is the way in to the game's test screens from a phone, which has no localhost to reach them from");
  app_index_dev_g_card(root);
  async function lambda_about() {
    "★ WHAT THIS OPENS IS ASKED FOR BY NAME AND NOT IMPORTED, and that is about weight rather than about tidiness. The card above decides who ever TAPS this and settles nothing about who DOWNLOADS what it opens - a bundler follows a plain import whether the branch is walked or not, so every reader of the public index was fetching the whole of what is promised about money, every section of it, in order never to be shown any of it. A name joined into a path at the moment it is wanted is something a bundler cannot see through.";
    "It is fetched here rather than where the card asks its question, because this is the one place that names what opens; the card is handed a way to open something and is right not to know what.";
    let f_name = fn_name("app_index_about_open");
    let fn = await function_import_relative(f_name);
    await fn(root, lambda_index_again);
  }
  async function lambda_index_again() {
    "about is drawn over this page rather than beside it, so coming back means drawing this page again from nothing rather than uncovering it";
    html_clear(root);
    await app_index(context);
  }
}
