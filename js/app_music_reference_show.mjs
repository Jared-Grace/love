import { app_music_reference_version } from "./app_music_reference_version.mjs";
import { property_get } from "./property_get.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { app_shared_caption_font_size } from "./app_shared_caption_font_size.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_bible_reference_open } from "./app_shared_bible_reference_open.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
export function app_music_reference_show(parent, reference) {
  "$plain reference";
  "One passage under a line of the song: its name, as a button that opens the passage in the bible reader in a tab of its own, and an empty place under it for the words themselves.";
  "IT OPENS BESIDE THE SONG RATHER THAN INSTEAD OF IT. Somebody who wants what surrounds the verse - what was said before it, what follows - is asking a question this page cannot answer and the reader next door can; but they have not finished with the song, and sending the page away would lose them their place in it.";
  "A button and not a link, because everything else that acts on this page is a button and a reader should not have to work out which of two shapes does something.";
  "THE WORDS ARE NOT FETCHED HERE. Drawing the song is one pass and reading its passages is another, and doing them together would leave a reader looking at a blank page. The place is made now and filled when its words come.";
  "WHOSE WORDS THEY ARE IS WRITTEN UNDER THEM, AND IT IS WRITTEN NOW. The page quotes most passages from one translation and a few from another, so a reader met by a wording they do not recognise has no way of telling a different bible from a mistake. Which translation a passage comes from is decided before anything is fetched, so the name can be put on the screen in the same pass that draws the place - it waits on nothing and cannot arrive late or not at all.";
  arguments_assert(arguments, 2);
  let box = html_div(parent);
  function open() {
    app_shared_bible_reference_open(reference);
  }
  app_shared_button_wide(box, reference, open);
  let words = html_div(box);
  let version = app_music_reference_version(reference);
  let name = property_get(version, "name");
  let caption = html_div(box);
  html_text_set(caption, name);
  let size = app_shared_caption_font_size();
  html_style_font_size(caption, size);
  let asked = {
    reference: reference,
    words: words,
  };
  return asked;
}
