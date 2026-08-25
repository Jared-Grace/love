import { arguments_assert } from "./arguments_assert.mjs";
import { app_index_dev_apps_all_card } from "./app_index_dev_apps_all_card.mjs";
import { app_index_dev_link_card } from "./app_index_dev_link_card.mjs";
import { app_index_dev_links } from "./app_index_dev_links.mjs";
import { each } from "./each.mjs";
export function app_index_dev_links_draw(root) {
  "$plain root";
  "Paints the working links at the top of the index page. The half that is only ever wanted on this network, kept apart from the question of whether we are on it.";
  "★ IT IS SEPARATE FOR WEIGHT, NOT FOR CLARITY. The question above decides which visitor SEES these and settles nothing about which visitor DOWNLOADS them - a bundler follows a plain import whether the branch is walked or not, so every reader of the public index was fetching a list of half-finished things to look at, the names of them and the sentences describing them, in order never to be shown any of it. Asked for by name at the moment it is wanted, it stays out.";
  "They sit above the apps because they are the reason this page was opened at all while something is being worked on, and because the top of a page is the part a phone shows without any scrolling.";
  arguments_assert(arguments, 1);
  let links = app_index_dev_links();
  function link_show(link) {
    app_index_dev_link_card(root, link);
  }
  each(links, link_show);
  ("There used to be a third kind of card here, for a page kept by hand and reached by its file name rather than by an app's name. There are no such pages now: a page at an address of its own must be an app, so a card that could only ever point at one that was not has nothing left to point at.");
  ("and last, the way to every app there is rather than to one of them. It comes after the named links because it is what you reach for when the thing you want is NOT named above - the whole list, chosen by nobody, including whatever somebody started this week.");
  app_index_dev_apps_all_card(root);
}
