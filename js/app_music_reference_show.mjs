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
  arguments_assert(arguments, 2);
  let box = html_div(parent);
  function open() {
    app_shared_bible_reference_open(reference);
  }
  app_shared_button_wide(box, reference, open);
  let words = html_div(box);
  let asked = {
    reference: reference,
    words: words,
  };
  return asked;
}
