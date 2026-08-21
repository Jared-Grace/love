import { app_index_dev_apps_all_card } from "./app_index_dev_apps_all_card.mjs";
import { app_index_dev_pages } from "./app_index_dev_pages.mjs";
import { app_index_dev_page_card } from "./app_index_dev_page_card.mjs";
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
    ("A page kept by hand is listed here too, after the working links. It is reached by its file name rather than by an app's name, so it is a different kind of card, but it is wanted in the same place and for the same reason: it exists to be tapped rather than typed.");
    let pages = app_index_dev_pages();
    function page_show(page) {
      app_index_dev_page_card(root, page);
    }
    each(pages, page_show);
    ("and last of the three, the way to every app there is rather than to one of them. It comes after the named links because it is what you reach for when the thing you want is NOT named above - the whole list, chosen by nobody, including whatever somebody started this week.");
    app_index_dev_apps_all_card(root);
  }
}
