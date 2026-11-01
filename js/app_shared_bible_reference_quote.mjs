import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_reference_url } from "./app_shared_bible_reference_url.mjs";
import { html_a_href_text_new_tab } from "./html_a_href_text_new_tab.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { html_color_inherit } from "./html_color_inherit.mjs";
import { html_text_decoration } from "./html_text_decoration.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_language_code_reader } from "./app_shared_language_code_reader.mjs";
import { ebible_language_to_bible_folder } from "./ebible_language_to_bible_folder.mjs";
import { app_shared_bible_reference_text } from "./app_shared_bible_reference_text.mjs";
import { html_loading_suppressed } from "./html_loading_suppressed.mjs";
import { null_is } from "./null_is.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { promise_later_catch_ignore } from "./promise_later_catch_ignore.mjs";
export function app_shared_bible_reference_quote(parent, reference) {
  "$plain parent";
  "$plain reference";
  "A passage shown the way a verse is shown: its reference first, then its words in full - and the whole of it pressable, opening the bible reader at that passage in a new tab, the way pressing a verse while reading takes you into it.";
  "THE WHOLE BLOCK IS ONE LINK, not the reference alone. A reader's eye lands on the words, so the words are what they reach for; a small link underneath would be the one part of the passage they did not think to press.";
  "THE WORDS KEEP THE PAGE'S OWN COLOUR and only the reference is underlined. Words painted in link colour read as a link about the passage rather than as scripture, and the underline is enough to say the block can be pressed.";
  "QUOTED, NOT ONLY NAMED. A reference alone asks the reader to go and look before they can weigh what is being said, and most will not - so the words are put where the claim is.";
  "THE WORDS COME IN THE READER'S OWN BIBLE, fetched after the page is drawn. The link is drawn at once, so a passage that fails to arrive, or one their version does not hold, still leaves somewhere to go - and the page around it never waits.";
  "A NEW TAB because the reader is in the middle of reading a promise, and checking its footing should not cost them their place in it.";
  arguments_assert(arguments, 2);
  let url = app_shared_bible_reference_url(reference);
  let quote = html_a_href_text_new_tab(parent, url, "");
  html_display_block(quote);
  html_color_inherit(quote);
  html_text_decoration(quote, "none");
  let value = app_shared_spaced_small_gap();
  html_style_margin_y(quote, value);
  let label = html_div_text_bold(quote, reference);
  html_text_decoration(label, "underline");
  let words = html_div(quote);
  let language_code = app_shared_language_code_reader();
  let bible_folder = ebible_language_to_bible_folder(language_code);
  async function fill() {
    async function fetch_one() {
      let fetched = await app_shared_bible_reference_text(
        bible_folder,
        reference,
      );
      return fetched;
    }
    let text = await html_loading_suppressed(fetch_one);
    if (null_is(text)) {
      return;
    }
    html_text_set(words, text);
  }
  promise_later_catch_ignore(fill);
  return quote;
}
