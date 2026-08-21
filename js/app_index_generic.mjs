import { window_app_url_generic } from "./window_app_url_generic.mjs";
import { app_index_card_link } from "./app_index_card_link.mjs";
import { app_shared_mobile_default_font_size } from "./app_shared_mobile_default_font_size.mjs";
import { app_shared_name_prefix_without } from "./app_shared_name_prefix_without.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
export function app_index_generic(context, entries) {
  let root = property_get(context, "root");
  app_shared_mobile_default_font_size(context);
  let hash = {};
  ("an app opens in a tab of its own, so this page stays where it is and a reader who came here to open two things does not have to come back for the second.");
  ("The tab that could not be typed into was a tab this page OPENED, by running window.open itself. Measured on a phone: a box in such a tab received keyup for every letter and never keydown, so nothing was ever entered, while the same page reached by its own address took every letter. The letters were lost before the page saw them, so no code here could have caught it or fixed it.");
  ("A real link is not that. The browser follows it itself, and the page it lands on is one reached by its own address - the case that was measured WORKING. Whether that holds on the phone in question is the thing being found out, and until it has been there is one place to change it back: the card below is the only kind of card on this page that leads to an app.");
  ("A link also gives a reader the choice this page cannot give them: held down rather than tapped, a browser offers to open it here, or beside this, or to keep the address. A button offers none of those, whichever way its lambda was written.");
  function lambda3(entry) {
    let fn = property_get(entry, "app_fn");
    let label = app_index_label(fn);
    let url = window_app_url_generic(app_shared_name_prefix_without, fn, hash);
    let text = property_get(entry, "text");
    app_index_card_link(root, label, text, url);
  }
  each(entries, lambda3);
}
