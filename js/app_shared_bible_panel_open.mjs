import { html_clear } from "./html_clear.mjs";
import { app_shared_button_back } from "./app_shared_button_back.mjs";
import { app_shared_button_back_to } from "./app_shared_button_back_to.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
export function app_shared_bible_panel_open(content, destination, back) {
  "start an in-place bible panel: clear the area, then lead with the back button that leaves it";
  "The way out names where it leads when the panel knows - a panel is drawn over the reading rather than instead of it, so what is underneath is still there and can be said. A panel that cannot name it says Back on its own, which is what all of them said before, and is still the honest answer when there is no passage underneath yet.";
  let unnamed = text_empty_is(destination);
  if (unnamed) {
    app_shared_button_back(content, back);
    return;
  }
  app_shared_button_back_to(content, destination, back);
}
