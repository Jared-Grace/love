import { arguments_assert } from "./arguments_assert.mjs";
import { apps_page_dark_is } from "./apps_page_dark_is.mjs";
import { app_shared_color_page_dark } from "./app_shared_color_page_dark.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_color_page_background } from "./app_shared_color_page_background.mjs";
export function html_code_page_background(name) {
  "$plain name";
  arguments_assert(arguments, 1);
  ("The colour to paint an app's page before any of it has arrived, and the scheme that");
  ("says which way round the page is, written as a style for the page element itself.");
  ("It goes on the PAGE element rather than into a stylesheet in the head, because the head");
  ("is rebuilt from scratch whenever the HTML is regenerated and a tag added there is a tag");
  ("that quietly stops being written. It is also the earliest thing on the page there is,");
  ("which is the whole point: a colour the browser has before it has read anything else.");
  ("EVERY app says its colour now, light as well as dark. A light app used to say nothing");
  ("and lean on the browser painting white, which holds only while the page is the whole");
  ("window and the browser is left alone. Inside someone else's frame a page that names no");
  ("colour is TRANSPARENT, so the host's own grey shows through and the words go unreadable");
  ("- measured on an itch.io embed, grey in the frame and black full screen. A browser told");
  ("to force dark takes the same silence as leave to invert the whole page.");
  ("The light colour is the shared page off-white rather than pure white, because that is");
  ("what the rest of the repo already means by the ground a page sits on: a bar that sticks");
  ("to the top of a scrolling page is painted that colour so the page does not show through");
  ("it, and a white card is drawn on it so the card reads as raised. Pure white was the");
  ("other reading - it is what these pages happen to look like today - but it is an");
  ("accident of nobody having said anything, and keeping it would leave the sticky bar a");
  ("shade off the page it is meant to disappear into.");
  ("color-scheme is the half that a colour alone cannot do. A background stops the page");
  ("being see-through; it does not stop a browser that has been told to force dark from");
  ("inverting everything on top of it. Naming the scheme says the page has already chosen,");
  ("and is what keeps a phone set to darken every site from rewriting these colours.");
  let dark_is = apps_page_dark_is(name);
  if (dark_is) {
    let dark = app_shared_color_page_dark();
    let r_dark = text_combine_multiple([
      "background:",
      dark,
      ";color-scheme:dark",
    ]);
    return r_dark;
  }
  let light = app_shared_color_page_background();
  let r = text_combine_multiple(["background:", light, ";color-scheme:light"]);
  return r;
}
