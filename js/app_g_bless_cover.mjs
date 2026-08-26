import { html_style_background } from "./html_style_background.mjs";
import { app_shared_color_page_dark } from "./app_shared_color_page_dark.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_document_root } from "./html_document_root.mjs";
import { html_div } from "./html_div.mjs";
import { html_loading_backdrop_style } from "./html_loading_backdrop_style.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_loading_spinner } from "./html_loading_spinner.mjs";
export function app_g_bless_cover() {
  arguments_assert(arguments, 0);
  ("The sheet this game waits behind while its street is still arriving, with the same");
  ("spinner turning on it that every other screen here waits behind.");
  ("DARK, and the same dark every other cover in this repo wears. Green was tried first, on");
  ("the argument that the green of the arrow buttons would read as this game rather than as");
  ("a page loading. It read as a control instead: green is the colour of a thing to press");
  ("here, so a whole screen of it looked like a surface waiting for a thumb. Dark says");
  ("nothing at all, which is what a cover is for, and a street in daylight arriving out of");
  ("the dark reads as a screen being handed over.");
  ("It is SOLID rather than the shared dim, because there is nothing behind it worth seeing");
  ("through. The page under this one is empty white, and eight parts in ten of black laid");
  ("over white is a grey that reads as a fault rather than as a cover.");
  ("It is also the only thing between the player and that white: the pictures here are");
  ("downloaded one at a time and the ground is the last of them to arrive.");
  ("Everything about it except that colour is the shared cover's, taken from the shared");
  ("cover rather than written again - where it sits, how big it is, how high it stands. So");
  ("the one thing this game says differently is the one thing written here, and a change to");
  ("how a cover is laid out reaches this one without anybody remembering it exists.");
  ("Hung on the document rather than inside the game's box, for the reason the shared cover");
  ("is: the box gets emptied and rebuilt, and a cover inside it would be thrown away by the");
  ("very redraw it is covering.");
  let div = html_loading_backdrop();
  let dark = app_shared_color_page_dark();
  html_style_background(div, dark);
  html_style_assign(div, {
    transition: "opacity 0.15s ease",
  });
  html_loading_spinner(div);
  return div;
}
