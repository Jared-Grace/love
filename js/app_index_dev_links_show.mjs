import { app_index_dev_apps_all_card } from "./app_index_dev_apps_all_card.mjs";
import { app_index_dev_link_card } from "./app_index_dev_link_card.mjs";
import { app_index_dev_links } from "./app_index_dev_links.mjs";
import { each } from "./each.mjs";
import { host_local_network_is } from "./host_local_network_is.mjs";
export function app_index_dev_links_show(root) {
  "The working links at the very top of the index page, shown only when the page came from a machine on this same network.";
  "The test is asked here rather than by the page that calls this, so there is one answer to keep right instead of one per caller. A caller asks to show the links and gets nothing where nothing should be shown.";
  "They sit above the apps because they are the reason this page was opened at all while something is being worked on, and because the top of a page is the part a phone shows without any scrolling.";
  let wanted = host_local_network_is();
  if (wanted) {
    let links = app_index_dev_links();
    function link_show(link) {
      app_index_dev_link_card(root, link);
    }
    each(links, link_show);
    ("There used to be a third kind of card here, for a page kept by hand and reached by its file name rather than by an app's name. There are no such pages now: a page at an address of its own must be an app, so a card that could only ever point at one that was not has nothing left to point at.");
    ("and last, the way to every app there is rather than to one of them. It comes after the named links because it is what you reach for when the thing you want is NOT named above - the whole list, chosen by nobody, including whatever somebody started this week.");
    app_index_dev_apps_all_card(root);
  }
}
