import { arguments_assert } from "./arguments_assert.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { app_bible_pictures_button } from "./app_bible_pictures_button.mjs";
export function app_bible_pictures_verse_button(v) {
  arguments_assert(arguments, 1);
  ("The way into the picture Bible on the verse screen, standing in the row of buttons under the verse beside copy and share.");
  ("IT STANDS IN THAT ROW RATHER THAN IN THE BAR ALONG THE TOP, because a reader wondering what else can be done with the verse in front of them looks under it, where everything else that can be done with it already is.");
  ("IT IS HANDED WHAT THE SCREEN ANSWERED WITH RATHER THAN THE ROW ITSELF, because the screen answers with nothing at all on the ways out that stop early - a passage named by the link, an address naming no chapter - and on those there is no row to draw into and no verse to draw it for. That also settles which chapter this is without asking the address: by the time the screen has answered it has worked the chapter out and says so.");
  ("A CHAPTER NOBODY HAS DRAWN PICTURES FOR GETS NO BUTTON. That question is asked once, next door, by the thing that draws it.");
  let nothing_drawn = null_is(v);
  if (nothing_drawn) {
    return;
  }
  let bottom = property_get(v, "bottom");
  let chapter_code = property_get(v, "chapter_code");
  app_bible_pictures_button(bottom, chapter_code);
}
