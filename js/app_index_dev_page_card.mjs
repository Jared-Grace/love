import { app_index_card } from "./app_index_card.mjs";
import { property_get } from "./property_get.mjs";
import { window_go } from "./window_go.mjs";
export function app_index_dev_page_card(root, entry) {
  "One card on the index page for a plain page that is not an app - a page kept by hand while something is being looked into, reached by its own file name rather than by the name of a function.";
  "Beside the twin for apps: an app is named by the function that draws it and its address is worked out from that name, so nothing has to be written down twice. A page like this has no such function, and its file name is the only name it has.";
  "The name is a relative one, so the card leads to whichever copy the index itself was opened from.";
  let page = property_get(entry, "page");
  let label = property_get(entry, "label");
  let text = property_get(entry, "text");
  function opened() {
    window_go(page);
  }
  app_index_card(root, label, text, opened);
}
