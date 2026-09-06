import { app_shared_app_fn_set } from "./app_shared_app_fn_set.mjs";
import { property_get } from "./property_get.mjs";
import { app_index_dev_build_card } from "./app_index_dev_build_card.mjs";
import { app_index_built_card } from "./app_index_built_card.mjs";
import { app_index_dev_links_show } from "./app_index_dev_links_show.mjs";
import { app_index_dev_about_card } from "./app_index_dev_about_card.mjs";
import { app_index_main_fns } from "./app_index_main_fns.mjs";
import { app_index_generic } from "./app_index_generic.mjs";
import { app_index_dev_g_card } from "./app_index_dev_g_card.mjs";
import { app_index_gloss_coverage_show } from "./app_index_gloss_coverage_show.mjs";
import { html_clear } from "./html_clear.mjs";
export async function app_index(context) {
  app_shared_app_fn_set(context, app_index);
  let root = property_get(context, "root");
  ("the way into the dev builds comes before even the working links, because it is not a place to go but a choice of which copy of everything below it the rest of this page leads to");
  app_index_dev_build_card(root);
  ("and the same card the other way for whoever is standing in the dev build, so the way back to the ordinary site is a tap rather than an address typed out on a phone. Exactly one of the two ever shows, because each asks which copy this page is.");
  app_index_built_card(root);
  ("the working links come before the apps, and only on a machine on this same network: while something is being worked on they are the reason this page was opened, and the top is the part a phone shows without scrolling");
  ("waited on, so the cards below still land below them: what is drawn there is fetched at the moment it is wanted rather than imported, to keep it out of the public page's bundle, and a fetch that is not waited on would let the rest of this page overtake it");
  await app_index_dev_links_show(root);
  ("about sits up here with the working links rather than down among the apps, because it is the same kind of thing they are: a way in for whoever is working, shown only on this network, and worth one tap instead of the four it takes to reach the same paragraph through an app's settings.");
  app_index_dev_about_card(root, lambda_about);
  let entries = app_index_main_fns();
  let cards = app_index_generic(context, entries);
  ("the dev tools card comes after the apps, not among them: it is not an app somebody came here to use, it is the way in to the game's test screens from a phone, which has no localhost to reach them from");
  app_index_dev_g_card(root);
  ("★ HOW FAR THE TWO LANGUAGE APPS HAVE GOT IS ASKED LAST, WITH EVERY CARD ALREADY ON THE SCREEN, which is the opposite of the line above about the working links, and the two differ in what waiting costs. Those are drawn only on this network and only above the apps, so waiting for them holds up a part of the page nobody outside this house ever sees. This is a store somewhere else, asked by everybody who opens the site, and the browser half of fetching gives up after eight seconds and tries twice more - so drawing anything behind it risks a blank front page for half a minute in order to put a number in a sentence.");
  ("It is last rather than started here and waited on further down, which is the shape that would have read better and does not survive: the canonical pass writes an await back in front of a call whose answer is thrown away, so a page whose ordering depended on that await being absent would be one pass away from being wrong without a word of this file changing. Being last needs no await to be absent - there is nothing after it to hold up. It never throws: what it does when the store says nothing is leave every card exactly as it was written.");
  await app_index_gloss_coverage_show(cards);
  async function lambda_about() {
    "★ WHAT THIS OPENS IS FETCHED WHEN IT IS TAPPED AND NOT BEFORE, and that is about weight rather than about tidiness. The card above decides who ever TAPS this and settles nothing about who DOWNLOADS what it opens - a plain import is followed whether the branch is walked or not, so every reader of the public index was fetching the whole of what is promised about money, every section of it, in order never to be shown any of it.";
    "It is fetched here rather than where the card asks its question, because this is the one place that names what opens; the card is handed a way to open something and is right not to know what.";
    "★ THE ADDRESS IS WRITTEN OUT RATHER THAN BUILT, and here that is the whole difference between working and not. The other way of leaving a bundle - joining a name into a path so the bundler cannot see through it - is for a half that only ever runs in NODE, where the file it names is genuinely sitting next to this one on a disk. This runs in a BROWSER when somebody taps, where the only thing beside the page is whatever the build put there: an address the build never saw is an address nothing was ever written to, so the tap reached for a file that does not exist and nothing opened. Written out, the build sees it, keeps it out of the page all the same, and puts it somewhere the tap can find.";
    let module = await import("./app_index_about_open.mjs");
    let fn = property_get(module, "app_index_about_open");
    await fn(root, lambda_index_again);
  }
  async function lambda_index_again() {
    "about is drawn over this page rather than beside it, so coming back means drawing this page again from nothing rather than uncovering it";
    html_clear(root);
    await app_index(context);
  }
}
