import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { app_shared_spaced_tiny_gap } from "./app_shared_spaced_tiny_gap.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { html_centered } from "./html_centered.mjs";
import { app_shared_caption_opacity } from "./app_shared_caption_opacity.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
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
  "THE PASSAGE HOLDS ITS CONTENTS OFF ITS OWN EDGES, AND THE NAME UNDER THEM IS CENTRED AND PALED. A passage is a block of quoted words with a button over it and a label under it, and run tight against its neighbours the three of them read as one long column in which nothing tells a reader where one passage stops and the next starts. An inset is what draws that boundary without a rule or a box needing to be painted, and the two directions are not the same size. Sideways the inset stands alone and can be generous. Down the page it is paid three times over between one passage and the next - once under the passage above, once by the gap the column already keeps, once over the passage below - so a matching inset there measured two and a half times the room the sides get and pushed a name and the button under it apart far enough to look unrelated. The vertical is cut to the smallest step for that reason: three of the small ones still come to twice what the column kept on its own. The label is treated the other way about: set flush left in full black under a quotation it reads as the last line of the quotation, so centring it says plainly that it is a caption and not scripture, and the paleness says the same thing again in the one way position cannot.";
  arguments_assert(arguments, 2);
  let box = html_div(parent);
  let inset_x = app_shared_spaced_gap();
  html_style_padding_x(box, inset_x);
  let inset_y = app_shared_spaced_tiny_gap();
  html_style_padding_y(box, inset_y);
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
  html_centered(caption);
  let paleness = app_shared_caption_opacity();
  html_style_opacity(caption, paleness);
  let asked = {
    reference: reference,
    words: words,
  };
  return asked;
}
