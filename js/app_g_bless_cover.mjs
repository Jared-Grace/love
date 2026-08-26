import { arguments_assert } from "./arguments_assert.mjs";
import { html_document_root } from "./html_document_root.mjs";
import { html_div } from "./html_div.mjs";
import { html_loading_backdrop_style } from "./html_loading_backdrop_style.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_button_background } from "./app_shared_button_background.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_loading_spinner } from "./html_loading_spinner.mjs";
export function app_g_bless_cover() {
  arguments_assert(arguments, 0);
  ("The sheet this game waits behind while its street is still arriving, with the same");
  ("spinner turning on it that every other screen here waits behind.");
  ("GREEN, and the green of this game's own buttons, where every other cover in the repo is");
  ("dark. The dark one is a neutral hush and it belongs on a screen that is about to show");
  ("words; this one is about to show a street in daylight, and a player who has just come");
  ("from the arrow buttons at the bottom of it recognises the colour as this game rather");
  ("than as the page loading. It is also the only thing between them and a white flash: the");
  ("pictures here are downloaded one at a time and the ground is the last of them to");
  ("arrive.");
  ("Everything about it except that colour is the shared cover's, taken from the shared");
  ("cover rather than written again - where it sits, how big it is, how high it stands. So");
  ("the one thing this game says differently is the one thing written here, and a change to");
  ("how a cover is laid out reaches this one without anybody remembering it exists.");
  ("Hung on the document rather than inside the game's box, for the reason the shared cover");
  ("is: the box gets emptied and rebuilt, and a cover inside it would be thrown away by the");
  ("very redraw it is covering.");
  let html = html_document_root();
  let div = html_div(html);
  let backdrop = html_loading_backdrop_style();
  html_style_assign(div, backdrop);
  let green = app_shared_button_background();
  html_style_set(div, "background", green);
  html_style_assign(div, {
    transition: "opacity 0.15s ease",
  });
  html_loading_spinner(div);
  return div;
}
