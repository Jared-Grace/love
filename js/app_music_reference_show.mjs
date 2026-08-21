import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_bible_reference_hash_key } from "./app_shared_bible_reference_hash_key.mjs";
import { text_replace_space_to } from "./text_replace_space_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_a_href_text } from "./html_a_href_text.mjs";
import { html_display_block } from "./html_display_block.mjs";
export function app_music_reference_show(parent, reference) {
  "$plain reference";
  "One passage under a line of the song: its name, as a link that opens the passage in the bible reader, and an empty place under it for the words themselves.";
  "THE WORDS ARE NOT FETCHED HERE. Drawing the whole song is one pass and reading forty chapters is another, and doing them together would leave a reader looking at a blank page until the last chapter arrived. The place is made now and filled when its words come, so the song is readable at once and gets fuller rather than appearing late.";
  "The name is a link as well as a heading, because somebody who wants the passage around the verse - what was said before it, what follows - is asking a question this page cannot answer and the reader next door can.";
  arguments_assert(arguments, 2);
  let box = html_div(parent);
  let key = app_shared_bible_reference_hash_key();
  let plus = "+";
  let spelled = text_replace_space_to(reference, plus);
  let href = text_combine_multiple(["bible.html#", key, "=", spelled]);
  let link = html_a_href_text(box, href, reference);
  html_display_block(link);
  let words = html_div(box);
  let asked = {
    reference: reference,
    words: words,
  };
  return asked;
}
